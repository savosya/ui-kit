import fs, {readFileSync} from 'fs';

/**
 *  Изменяет package.json для компонента, который будет скачан вне root сборки
 *  принимает Partial<PackageJson> и модифицирует package.json
 * */

export const overridePackageJson = (newPackageJsonPartial = {}) => {
    return {
        name: 'override-package-json',
        sequential: true,
        order: 'post',
        writeBundle() {
            const filePath = process.cwd() + '/package.json';
            const outputPath = process.cwd() + '/build/package.json'

            if (fs.existsSync(filePath)) {
                const packageJson = {
                    ...JSON.parse(readFileSync(filePath)),
                    ...newPackageJsonPartial
                };
                fs.writeFileSync(outputPath, JSON.stringify(packageJson, null, 2));
            }
        }
    };
}
