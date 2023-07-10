import fs, {readFileSync} from 'fs';


const resolvePackageJsonImports = (newPackageJsonPartial = {}) => {
    return {
        name: 'resolve-packagejson-imports',
        sequential: true,
        order: 'post',
        writeBundle() {
            const filePath = process.cwd() + '/package.json';
            const outputPath = process.cwd() + '/build/package.json'

            if (fs.existsSync(filePath)) {
                const packageJson = JSON.parse(readFileSync(filePath));
                // Modify the package.json object here
                packageJson.module = 'esm/index.js';
                fs.writeFileSync(outputPath, JSON.stringify(packageJson, null, 2));
            }
        }
    };
}

export default resolvePackageJsonImports

