import {resolve} from 'path'
import {writeFile} from 'fs'
import {readdir} from 'node:fs/promises'
import {promisify} from 'util'
import {PurgeCSS} from 'purgecss'
import postcss from 'postcss'
import discardEmpty from 'postcss-discard-empty'

export const purgecssAfterBuildPlugin = ({pkgPath}) => {
    return {
        name: 'purgecss-after-build-plugin',
        writeBundle: {
            sequential: true,
            order: 'post',
            async handler(handlerOptions) {
                const topLevelFiles = await readdir(resolve(handlerOptions.dir));
                const cssFile = topLevelFiles.find(file => file.endsWith('.css'));

                if (cssFile) {
                    const cssFilePath = resolve(handlerOptions.dir, cssFile);
                    // const css = await promisify(readFile)(cssFilePath, 'utf-8');

                    const purgecssResult = await new PurgeCSS().purge({
                        content: [`${pkgPath}/build/**/*.js`],
                        // css: [`${pkgPath}/build/**/*.css`],
                        /** Only go over TOP LEVEL CSS (Components.css) */
                        css: [cssFilePath],
                        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
                        // defaultExtractor: (content) => {
                        //     // search matches with /savosya-/
                        //     return content.match(/savosya-[\w-]*/gm) || [];
                        // },
                        variables: true,
                    });
                    const purgedCss = purgecssResult[0].css;

                    const postcssResult = await postcss([discardEmpty]).process(purgedCss, { from: cssFilePath });
                    const result = postcssResult.css;

                    await promisify(writeFile)(cssFilePath, result, 'utf-8');

                    console.log(`[PurgeCSS]: wrote purged CSS to ${cssFilePath}`);

                    return {
                        [cssFilePath]: cssFilePath
                    };
                }
            }
        },
    }
}
