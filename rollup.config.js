import fs from 'fs';
import {readPackageUpSync} from 'read-pkg-up';

/** plugins */
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import multiInput from 'rollup-plugin-multi-input';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from "@rollup/plugin-typescript";
import babel from '@rollup/plugin-babel';
import {terser} from "rollup-plugin-terser";
import copy from 'rollup-plugin-cpy'

/** tools */
import createPackageJson from "./tools/rollup/create-package-json.js";
import {coreComponentsResolver} from "./tools/rollup/resolvers.js";


/** vars */
const KIT_NAME = '@savosya/savosya-myuikit-'

const currentPackageDir = process.cwd()
const excludePath = 'node_modules/**';
const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const pkgPath = fs.realpathSync(currentPackageDir)
const {packageJson: pkg} = readPackageUpSync({cwd: pkgPath});
const defaultOptions = {sourcemap: true, exports: 'named'}
const currentComponentName = pkg.name.replace(KIT_NAME, '');
const rootDir = `../../build/${currentComponentName}`;
const excludedPackages = ['package-template']


/** config */
export default {
    input: ['src/index.tsx'],
    // external: ['react', 'react-dom', id => /@babel\/runtime/.test(id)],
    external: ['react', 'react-dom'],
    output: [
        {
            ...defaultOptions,
            file: pkg.main,
            format: "cjs",
        },
        {
            ...defaultOptions,
            file: pkg.module,
            format: 'es',
        }
    ],
    plugins: [
        // multiInput(),
        peerDepsExternal(),
        // commonjs({
        //     include: /node_modules/,
        //     // requireReturnsDefault: true
        // }),
        // resolve({
        //     preferBuiltins: false,
        //     extensions,
        // }),
        typescript({tsconfig: './tsconfig.json', compilerOptions: {lib: ["es5", "dom"], target: "es5"}}),
        // babel({
        //     presets: [
        //         '@babel/env',
        //         '@babel/preset-typescript',
        //     ],
        //     plugins: [
        //         '@babel/plugin-transform-runtime',
        //     ],
        //     babelHelpers: 'runtime',
        //     exclude: excludePath,
        //     extensions,
        // }),
        // terser(),
        (!excludedPackages.includes(currentComponentName)
            ? copy(
                [
                    {files: `${pkgPath}/build/cjs`, dest: `${rootDir}/cjs`},
                    {files: `${pkgPath}/build/esm`, dest: `${rootDir}/esm`},
                    {
                        files: 'package.json',
                        dest: rootDir,
                        // transform: () => createPackageJson('./esm/index.js'),
                    },
                ]
            )
            : undefined)
    ],
};
