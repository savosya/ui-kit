import * as React from 'react';

import clsx from 'clsx';

import { IndicatorProps } from './indicator.types';
import cls from './index.module.scss';

export const Indicator = ({ size = 'm', number, className }: IndicatorProps) => {
  return <span className={clsx(cls.root, cls[size], className, { [cls.empty]: number === undefined })}>{number}</span>;
};
