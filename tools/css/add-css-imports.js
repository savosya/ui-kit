import path from 'path';

const CSS_FILE_EXTENSIONS = ['.css', '.scss'];

function hasCssImport(code) {
    return CSS_FILE_EXTENSIONS.some(ext => code.includes(`.css`))
}

export function addCssImports(options = {}) {
    const {extensions = CSS_FILE_EXTENSIONS, isEsm = true} = options;
    return {
        name: 'add-css-imports',
        generateBundle(outputOptions, bundle) {
            const hasStyles = Object.keys(bundle).some(fileName =>
                extensions.includes(path.extname(fileName)),
            );

            if (!hasStyles) {
                return;
            }

            const cssFile = bundle['styles.css'];
            const cssFileName = cssFile.fileName;
            const jsFiles = Object.keys(bundle).filter(fileName =>
                /\.js$/.test(fileName),
            );

            for (const jsFileName of jsFiles) {
                const jsFile = bundle[jsFileName];
                const importStatement = isEsm
                    ? `import '${cssFileName}';\n`
                    : `require('${cssFileName}');\n`;

                jsFile.code = importStatement + jsFile.code;
            }

            // delete bundle['styles.css'];
        },
    };
}

