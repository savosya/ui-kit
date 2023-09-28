import React, {FC, useEffect, useState} from 'react';

import cls from './css-vars.module.scss';

type Props = {
  css: string;
  title?: string;
  expandable?: boolean;
};

const regexp = /:root {([^}]*)}/g;

export const CssVars: FC<Props> = ({css, title, expandable}) => {
  const [vars, setVars] = useState('');
  const [open, setOpen] = useState(!expandable);

  useEffect(() => {
    let rootBlockMatch = regexp.exec(css);

    const rootBlocks = [];

    while (rootBlockMatch) {
      rootBlocks.push(rootBlockMatch[1]);
      rootBlockMatch = regexp.exec(css);
    }

    let result = rootBlocks.reduce(
      (acc, item, index) => {
        const isLast = index === rootBlocks.length - 1;
        const divider = isLast ? '' : '\n';

        return `${acc}${item}${divider}`;
      },
      ':root {',
    );

    result += '}';

    setVars(result);
  }, []);

  return (
    <div className={cls.cssVars}>
      {title && <h2>{title}</h2>}
      {vars && (
        <>
          {expandable && (
            <div onClick={() => setOpen(!open)}>
              {open ? 'Скрыть' : 'Показать'}
            </div>
          )}
          {open && (
            <pre className={cls.pre}>
              <code className={cls.code}>
                {vars}
              </code>
            </pre>
          )}

        </>
      )}
    </div>
  );
};
