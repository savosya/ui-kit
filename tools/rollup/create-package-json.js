const content = `{
    "main": "index.js",
    "module": "%path%"
}
`

/**
 * Создает контент файла package.json, в котором указывается путь до es-модулей.
 * Это нужно для корректной работы динамического импорта и tree-shaking'а.
 */
export function createPackageJson(path) {
  return content.replace('%path%', path)
}
