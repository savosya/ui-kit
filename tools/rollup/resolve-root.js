import path from "path";
import {requireRegExp} from "./common.js";

export const coreComponentsRootPackageResolver = ({ currentPackageDir }) => ({
    name: 'core-components-root-package-resolver',
    generateBundle: (_, bundles) => {
        Object.keys(bundles).forEach(bundleName => {
            let code = bundles[bundleName].code;

            let matches;
            while ((matches = requireRegExp.exec(code))) {
                const componentName = matches[2];

                const distDir = path.resolve(currentPackageDir, 'build');
                const bundleAbsPath = path.join(distDir, bundleName);
                const bundleDir = path.dirname(bundleAbsPath);
                const componentRelativePath = path
                    .relative(bundleDir, componentName)
                    .replace('/build', ''); // удаляем dist из пути, так как в рут-пакете его нет

                code = code.replace(requireRegExp, `$1${componentRelativePath}$3`);
            }

            bundles[bundleName].code = code;
        });

        return bundles;
    },
});



