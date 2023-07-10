import path from 'path';

const CSS_FILE_EXTENSIONS = ['.css', '.scss'];

function hasCssImport(code) {
    return CSS_FILE_EXTENSIONS.some(ext => code.includes(`.css`))
}

const addCssImports = (options = {}) => {
    const {extensions = CSS_FILE_EXTENSIONS} = options;
    return {
        name: 'add-css-imports',
        // sequential: true,
        // order: 'pre',
        generateBundle: async (options, bundle) => {
            const hasStyles = Object.keys(bundle).some(fileName =>
                extensions.includes(path.extname(fileName)),
            );

            if (!hasStyles) return;

            const jsFileName = 'Component.js';

            const cssFile = bundle['styles.css'];
            const cssFileName = cssFile.fileName;

            const chunkWithImport = bundle[jsFileName]

            if (chunkWithImport) {
                chunkWithImport.imports.push(cssFileName)

                const importStatement = `require('./${cssFileName}');\n`;
                chunkWithImport.code = importStatement + chunkWithImport.code;

            }
        },
    };
}

export default addCssImports

