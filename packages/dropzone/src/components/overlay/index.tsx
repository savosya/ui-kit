import React, { FC } from 'react';
import clsx from 'clsx';

import cls from './index.module.scss';

export type OverlayProps = {
  text?: string;
  visible?: boolean;
};

export const Overlay: FC<OverlayProps> = ({ text = 'Перетащите файлы', visible = false }) => (
  <div
    className={clsx(cls.overlay, {
      [cls.visible]: visible,
    })}
  >
    <span className={cls.text}>{text}</span>
  </div>
);
