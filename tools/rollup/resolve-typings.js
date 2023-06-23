import {globby} from 'globby';
import path from 'path';

import { checkOrCreateDir, readFile, writeFile } from './common.js';

const importTypesRegexp = /((?:from |import\()['"])@savosya\/savosya-myuikit-(.+?)(['"])/;

export function coreComponentsTypingsResolver({ rootDir }) {
    return {
        name: 'core-components-typings-resolver',
        generateBundle: async () => {
            try {
                const matchedPaths = await globby('build/**/*.d.ts');

                await Promise.all(matchedPaths.map(path => transformTypings(path, rootDir)));
            } catch (error) {
                console.log(error);
            }
        },
    };
}

async function transformTypings(source, rootDir) {
    const rootAbsDir = path.resolve(rootDir);
    const sourceAbs = path.resolve(source);

    let fileContent = await readFile(source, 'utf-8');

    let matches;

    while ((matches = importTypesRegexp.exec(fileContent))) {
        const componentName = matches[2];

        const componentRelativePath = path.relative(path.dirname(sourceAbs), componentName);

        fileContent = fileContent.replace(importTypesRegexp, `$1${componentRelativePath}$3`);
    }

    let dest = path.join(rootAbsDir, source.replace('build/', ''));

    await checkOrCreateDir(path.dirname(dest));

    await writeFile(dest, fileContent);
}