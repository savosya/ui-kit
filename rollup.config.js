import fs from 'fs'
import * as path from 'path'
import {readPackageUpSync} from 'read-pkg-up'

/** plugins */
import multiEntry from 'rollup-plugin-multi-input'
import wildcardExternal from '@oat-sa/rollup-plugin-wildcard-external'
import typescript from "rollup-plugin-ts"
import css from "rollup-plugin-import-css";
import postcss from 'rollup-plugin-postcss'
import postcssImport from 'postcss-import'
import autoprefixer from 'autoprefixer'
import discardComments from 'postcss-discard-comments'
import discardEmpty from 'postcss-discard-empty'
import copy from 'rollup-plugin-copy'
// import postcssPresetEnv from 'postcss-preset-env'

/** tools */
import {purgecssAfterBuildPlugin} from "./tools/rollup/purgecss-after-build.js";
import addCssImports from "./tools/css/add-css-imports.js";
import resolvePackageJsonImports from "./tools/rollup/resolve-packagejson-import.js";

/** vars */
const KIT_NAME = '@savosya/savosya-myuikit-'

const currentPackageDir = process.cwd()
const pkgPath = fs.realpathSync(currentPackageDir)
const {packageJson: pkg} = readPackageUpSync({cwd: pkgPath});
const currentComponentName = pkg.name.replace(KIT_NAME, '');
const componentBuildDir = path.resolve(currentPackageDir, `../../build/${currentComponentName}`);


/** configuration */
const baseConfig = {
    input: [
        'src/**/*.{ts,tsx}',
        'src/**/*.{css,scss}',
        '!src/**/*.{test,stories}.{ts,tsx}',
        '!src/**/*.mdx',
        '!src/**/*.d.ts',
    ],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {}), 'react/jsx-transform'],
};

const defaultOutputOptions = {
    exports: 'named',
    sourcemap: true,
    preserveModules: true,
}

const postcssPlugin = (cssPath) => {
    return postcss({
        modules: {
            generateScopedName: `savosya-${currentComponentName}_[local]__[hash:base64:4]`,
        },
        autoModules: false,
        include: ["src/**/*.{css,scss}"],
        plugins: [
            postcssImport({}),
            autoprefixer(),
            discardEmpty(),
            discardComments(),
        ],
        sourceMap: true,
        extract: path.resolve(cssPath),
        extensions: ['.scss', '.css'],
    })
}

const plugins = ({isEsm}) => {
    return [
        wildcardExternal(['@savosya/savosya-myuikit-*']),
        multiEntry.default(),
        postcssPlugin(isEsm ? 'build/esm/styles.css' : 'build/cjs/styles.css'),
        // css(),
        purgecssAfterBuildPlugin({pkgPath}),
        typescript({tsconfig: `${currentPackageDir}/tsconfig.json`}),
    ]
}

/** Всего создается 2 версии пакетов. Commonjs и ESModules */
const cjs = {
    ...baseConfig,
    output: [
        {
            ...defaultOutputOptions,
            dir: 'build/cjs',
            format: "cjs",
            /**
             *  resolvePackageJsonImports - резолвит package.json для всего пакета компонента.
             *  Нужно при импорте чтобы модуль брал es версию компонента.
             * */
            plugins: [addCssImports(), resolvePackageJsonImports({module: 'esm/index.js', main: 'cjs/index.js'})]
        },
    ],
    plugins: [...plugins({isEsm: false})],
    // external: [/\.css$/],
}

const esm = {
    ...baseConfig,
    output: [
        {
            ...defaultOutputOptions,
            dir: 'build/esm',
            format: "esm",
            generatedCode: 'es2015',
            plugins: [addCssImports()]
        },
    ],
    plugins: [...plugins({isEsm: true})],
    // external: [/\.css$/],
}


/** DEPRECATED -- Создает Root Package в корне проекта -- DEPRECATED */
const root = {
    input: ['build/**/*.js'],
    external: baseConfig.external,
    output: [{dir: componentBuildDir}],
    plugins: [
        multiEntry.default({relative: 'build'}),
        copy({
            flatten: false,
            targets: [
                {src: ['build/**/*', '!**/*.js'], dest: componentBuildDir},

                /** Переписать package.json для каждого пакета в root сборке */
                // {
                //     src: 'package.json',
                //     dest: `../../build/${currentComponentName}`,
                //     transform: () => createPackageJson('./esm/index.js'),
                // }
            ],
        }),
    ],
};

// export default [cjs, esm, root].filter(Boolean);
export default [cjs, esm].filter(Boolean);
