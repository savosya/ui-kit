/**
 * Заменяет импорты компонентов для сборки modern/cssm/esm
 */
export const coreComponentsResolver = ({ importFrom }) => ({
    name: 'core-components-resolver',
    generateBundle: (_, bundles) => {
        Object.keys(bundles).forEach(bundleName => {
            let code = bundles[bundleName].code;

            const requireRegExp = new RegExp(
                /(\b(?:require\(|import |from )['"])(@savosya\/savosya-myuikit-[^\/\n]+)(['"])/,
            );

            while (requireRegExp.exec(code)) {
                code = code.replace(requireRegExp, `$1$2/${importFrom}$3`);
            }

            bundles[bundleName].code = code;
        });

        return bundles;
    },
});