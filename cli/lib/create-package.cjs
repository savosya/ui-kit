const fs = require('fs')
const path = require('path')
const { createPathFolder, snakeToCamel } = require('./common.cjs')

/**
 * packageName: string
 * packageFolder: string
 * */
function createPackageTemplate(cmpSnakeName, packagesPath) {
  const cmpCamelName = snakeToCamel(cmpSnakeName)
  // создаем папки
  const packageRootPath = `${packagesPath}/${cmpSnakeName}`
  createPathFolder(cmpSnakeName, packagesPath)

  const packageSrcPath = `${packageRootPath}/src`
  createPathFolder('src', packageRootPath)

  // создаем темплейты
  createPackageJSON(cmpSnakeName, cmpCamelName, packageRootPath)
  createTsConfigJSON(packageRootPath)
  createREADME(cmpSnakeName, packageRootPath)
  createComponent(cmpSnakeName, cmpCamelName, packageSrcPath)
  createTypings(cmpSnakeName, cmpCamelName, packageSrcPath)
  createSCSS(packageSrcPath)
  createIndex(cmpSnakeName, cmpCamelName, packageSrcPath)
  createIndexStories(cmpCamelName, packageSrcPath)
}

/** TEMPLATES */
const createPackageJSON = (snakeName, camelName, packageRootPath) => {
  const code = `{
  "name": "@savosya/savosya-myuikit-${snakeName}",
  "version": "0.0.0",
  "description": "${camelName}",
  "license": "ISC",
  "main": "index.js",
  "module": "build/esm/index.js",
  "peerDependencies": {
    "react": "^17 || ^18",
    "react-dom": "^17 || ^18"
  },
  "publishConfig": {
    "access": "public",
    "directory": "build"
  },
  "scripts": {
    "tsc": "tsc",
    "build": "rollup -c ../../rollup.config.js"
  },
  "dependencies": {
    "clsx": "^1.2.1",
    "tslib": "^2.6.2",
    "@savosya/savosya-myuikit-hooks": "*",
    "@savosya/savosya-myuikit-utils": "*"
  }
}
`
  fs.writeFileSync(path.resolve(packageRootPath, 'package.json'), code)
}

const createTsConfigJSON = packageRootPath => {
  const code = `{
  "include": [
    "src",
    "../../typings"
  ],
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "build",
    "rootDirs": [
      "src"
    ],
    "baseUrl": ".",
    "tsBuildInfoFile": "tsconfig.tsbuildinfo",
    "paths": {
      "@savosya/savosya-myuikit-*": [
        "../*/src"
      ]
    }
  },
  "references": [
    {
      "path": "../hooks"
    },
    {
      "path": "../utils"
    }
  ]
}
`
  fs.writeFileSync(path.resolve(packageRootPath, 'tsconfig.json'), code)
}

const createREADME = (cmpName, packageRootPath) => {
  const code = `# \`${cmpName}\`

## Usage

\`\`\`
const index = require('${cmpName}');

// DEMONSTRATE API
\`\`\`
`
  fs.writeFileSync(path.resolve(packageRootPath, 'README.md'), code)
}

const createComponent = (snakeName, camelName, packageSrcPath) => {
  const code = `import * as React from 'react'

import clsx from 'clsx'

import {${camelName}Props} from './${snakeName}.types'
import cls from './index.module.scss'

export const ${camelName} = ({}: ${camelName}Props) => {

  return (
    <div>
        <div>${camelName} Component</div>
    </div>
  );
}
`
  fs.writeFileSync(path.resolve(packageSrcPath, 'Component.tsx'), code)
}

const createTypings = (snakeName, camelName, packageSrcPath) => {
  const code = `export interface ${camelName}Props {

};
`
  fs.writeFileSync(path.resolve(packageSrcPath, `${snakeName}.types.ts`), code)
}

const createSCSS = packageSrcPath => {
  const code = `@import '../../variables/src/index.css';

:root {

}

.root {

}
`
  fs.writeFileSync(path.resolve(packageSrcPath, 'index.module.scss'), code)
}

const createIndex = (snakeName, camelName, packageSrcPath) => {
  const code = `export {${camelName}} from './Component'
export type {${camelName}Props} from './${snakeName}.types'
`
  fs.writeFileSync(path.resolve(packageSrcPath, 'index.ts'), code)
}

const createIndexStories = (camelName, packageSrcPath) => {
  const packageStoriesPath = `${packageSrcPath}/stories`
  createPathFolder('stories', packageSrcPath)

  const code = `import * as React from 'react';
import {${camelName}} from '../Component';

export default {
  title: 'Components/${camelName}',
  component: ${camelName}
};

export const Default = () => (
    <${camelName}  />
);
`
  fs.writeFileSync(path.resolve(packageStoriesPath, 'Component.stories.tsx'), code)
}

module.exports = {
  createPackageTemplate
}
