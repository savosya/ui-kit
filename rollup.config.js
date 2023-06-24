import fs from 'fs';
import {readPackageUpSync} from 'read-pkg-up';

/** plugins */
import multiEntry from 'rollup-plugin-multi-input';
import wildcardExternal from '@oat-sa/rollup-plugin-wildcard-external';
import typescript from "rollup-plugin-ts";
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
const rootDir = `../../build/${currentComponentName}`;


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

const plugins = [
    wildcardExternal(['@savosya/savosya-myuikit-*']),
    multiEntry.default(),
    // terser(),
]

const cjs = {
    ...baseConfig,
    output: [
        {
            ...defaultOptions,
            dir: 'build',
            format: "cjs",
        },
    ],
    plugins: [
        ...plugins,
        typescript({
            tsconfig: resolvedConfig => ({
                ...resolvedConfig,
                tsBuildInfoFile: 'tsconfig.tsbuildinfo',
            }),
        }),
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
        typescript({
            outDir: 'build/esm',
            tsconfig: (resolvedConfig) => ({
                ...resolvedConfig,
                tsBuildInfoFile: 'tsconfig.tsbuildinfo',
            }),
        }),
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
                {src: ['build/**/*', '!**/*.js'], dest: rootDir},
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
            dir: rootDir,
            plugins: [coreComponentsTypingsResolver({rootDir})],
        },
    ],
};


export default [cjs, esm, root].filter(Boolean);
