const path = require("path");
const minimist = require("minimist");
const { checkPackageExistence, camelToSnake } = require("./lib/common.cjs");
const { createPackageTemplate } = require("./lib/create-package.cjs");

const args = minimist(process.argv.slice(2));
const componentName = camelToSnake(args.componentName);
const packagesRoot = path.resolve(__dirname, "..", "packages");

if (checkPackageExistence(componentName, packagesRoot)) {
  const err = `Ошибка. Компонент "${componentName}" уже существует.`;
  throw err;
} else {
  createPackageTemplate(componentName, packagesRoot);
}
