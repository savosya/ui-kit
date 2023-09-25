const fs = require('fs');
const path = require('path');

/**
 * folderName: string
 * targetPath: string
 * */
function createPathFolder(folderName, targetPath) {
    const currentResolvePath = path.resolve(targetPath, folderName);
    if (!fs.existsSync(currentResolvePath)) { // проверка - существует такая директория или нет?
        fs.mkdirSync(currentResolvePath); // если нет, то создаем новую
    }
}


/**
 * packageName: string
 * packagesDir: string
 * */
function checkPackageExistence(packageName, packagesDir) {
    return fs.existsSync(`${packagesDir}/${packageName}`);
}


/**
 * name: string
 * */
function camelToSnake(name) {
    const snake = String(name).replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
    if (snake.startsWith('-')) {
        return snake.replace('-', '')
    }
    return snake
}

function snakeToCamel(name) {
    return name.split('-').map(part => {
        const capitalized = part.charAt(0).toUpperCase() + part.slice(1);
        return capitalized
    }).join('')
}



module.exports = {
    createPathFolder,
    checkPackageExistence,
    camelToSnake,
    snakeToCamel
}
