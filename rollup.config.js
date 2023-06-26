import fs from 'fs';
import path from 'path';
import {readPackageUpSync} from 'read-pkg-up';

/** plugins */
import multiEntry from 'rollup-plugin-multi-input';
import wildcardExternal from '@oat-sa/rollup-plugin-wildcard-external';
import typescript from "rollup-plugin-ts";
import sass from 'node-sass'
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import postcssValues from 'postcss-modules-values';
import json from '@rollup/plugin-json';
// import {terser} from "rollup-plugin-terser";
import copy from 'rollup-plugin-copy';

/** tools */
import {createPackageJson} from "./tools/rollup/create-package-json.js";
import {coreComponentsRootPackageResolver} from "./tools/rollup/resolve-root.js";
import {coreComponentsTypingsResolver} from "./tools/rollup/resolve-typings.js";
import {coreComponentsResolver} from "./tools/rollup/resolve-package.js";


/** vars */
const KIT_NAME = '@savosya/savosya-myuikit-'

const currentPackageDir = process.cwd()
const pkgPath = fs.realpathSync(currentPackageDir)
const {packageJson: pkg} = readPackageUpSync({cwd: pkgPath});
const currentComponentName = pkg.name.replace(KIT_NAME, '');
const componentBuildDir = `../../build/${currentComponentName}`;


const copyPlugin = (dest) =>
    copy({
        flatten: false,
        targets: [{src: ['src/**/*.{png,svg,jpg,jpeg}', '!**/__image_snapshots__/**'], dest}],
    });

const baseConfig = {
    input: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.{test,stories}.{ts,tsx}',
        '!src/**/*.mdx',
        '!src/**/*.d.ts',
    ],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
};

const defaultOptions = {
    sourcemap: true,
    exports: 'named',
    preserveModules: true,
}

const postcssPlugin = (cssPath) => {
    return postcss({
        preprocessor: (content, id) => new Promise(resolve => {
            const result = sass.renderSync({ file: id })
            resolve({ code: result.css.toString() })
        }),
        modules: {
            generateScopedName: `savosya-${currentComponentName}_[local]__[hash:base64:4]`,
            getJSON(id, exportedTokens) {
                const jsonExport = {};
                Object.keys(exportedTokens).forEach((token) => {
                    jsonExport[token] = token;
                });
            },
        },
        plugins: [autoprefixer, postcssValues()],
        sourceMap: true,
        extract: path.resolve(cssPath),
        extensions: ['.sass','.css']
    })
}

const plugins = [
    wildcardExternal(['@savosya/savosya-myuikit-*']),
    multiEntry.default(),
]

const cjs = {
    ...baseConfig,
    output: [
        {
            ...defaultOptions,
            dir: 'build',
            format: "cjs",
            // interop: 'compat',
            // esModule: true,
        },
    ],
    plugins: [
        ...plugins,
        postcssPlugin('build/index.css'),
        typescript({tsconfig: `${currentPackageDir}/tsconfig.json`}),
        json(),
        copyPlugin('build'),
        copy({targets: [{src: ['package.json'], dest: 'build'}]}),
    ],
}

const esm = {
    ...baseConfig,
    output: [
        {
            ...defaultOptions,
            dir: 'build/esm',
            format: "esm",
            plugins: [coreComponentsResolver({importFrom: 'esm'})]
        },
    ],
    plugins: [
        ...plugins,
        postcssPlugin('build/esm/index.css'),
        typescript({outDir: 'build/esm', tsconfig: `${currentPackageDir}/tsconfig.json`}),
        json(),
        copyPlugin('build/esm'),
    ],
}

const root = {
    input: ['build/**/*.js'],
    external: baseConfig.external,
    plugins: [
        multiEntry.default({
            relative: 'build',
        }),
        copy({
            flatten: false,
            targets: [
                {src: ['build/**/*', '!**/*.js'], dest: componentBuildDir},
                {
                    src: 'package.json',
                    dest: `../../build/${currentComponentName}`,
                    transform: () => createPackageJson('./esm/index.js'),
                }
            ],
        }),
        coreComponentsRootPackageResolver({currentPackageDir}),
    ],
    output: [
        {
            dir: componentBuildDir,
            plugins: [coreComponentsTypingsResolver({componentBuildDir})],
        },
    ],
};

export default [cjs, esm, root].filter(Boolean);
