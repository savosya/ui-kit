import path from 'path';

/**
 *  Плагин расчитан на работу после обработки postcss.
 *  Проверяет есть ли в билде файлы с расширением .css,
 *  (NOTE: ПРОВЕРКА НА .css ФАЙЛЫ ТОЛЬКО НА ВЕРХНЕМ УРОВНЕ)
 *  если есть, то добавляет require('./styles.css') в начало Component.tsx.
 *
 *  note: Добавление import './styles.css' приводит к ошибке, т.к. rollup начинает парсить css файл.
 *
 *  TODO: добавить кастомизацию плагина через options
 * */

export const addCssImports = (options = {}) => {
  const { isEsm } = options;

  return {
    name: 'add-css-imports',
    generateBundle: async (options, bundle) => {
      const cssStyles = Object.keys(bundle)
        .filter(fileName => '.css'.includes(path.extname(fileName)))
        .reverse();
      if (!cssStyles.length) return;

      const jsFileName = 'Component.js';

      cssStyles.forEach(cssName => {
        const cssFile = bundle[cssName];
        const cssFileName = cssFile.fileName;

        const chunkWithImport = bundle[jsFileName];

        if (chunkWithImport) {
          chunkWithImport.imports.push(cssFileName);

          // const importStatement = `require('./${cssFileName}');\n`;
          const importStatement = isEsm ? `import './${cssFileName}';\n` : `require('./${cssFileName}');\n`;
          chunkWithImport.code = importStatement + chunkWithImport.code;
        }
      });
    }
  };
};
