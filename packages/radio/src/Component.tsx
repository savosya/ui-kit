import * as React from 'react';
import { useRef, useState } from 'react';
import clsx from 'clsx';

import { useFocus } from '@savosya/savosya-myuikit-hooks';
import { mergeRefs } from '@savosya/savosya-myuikit-utils';

import { CheckIcon } from './components';
import { RadioProps } from './radio.types';
import cls from './index.module.scss';

export const Radio = React.forwardRef<HTMLLabelElement, RadioProps>((props, ref) => {
  const { className, label, hint, size = 'm', checked, markType = 'default', name, onChange, classes, disabled, ...rest } = props;

  const isControlled = typeof checked === 'boolean';

  const [internalChecked, setChecked] = useState(false);

  const labelRef = useRef<HTMLLabelElement>(null);
  const [focused] = useFocus(labelRef, 'keyboard');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    if (!isControlled) {
      setChecked(true);
    }

    if (onChange) {
      onChange(event, { checked: event.target.checked, name: event.target.name });
    }
  };

  const isChecked = isControlled ? checked : internalChecked;
  return (
    <label
      className={clsx(
        cls.root,
        cls[size],
        {
          [cls.indeterminate]: isChecked && markType === 'default',
          [cls.checked]: isChecked && markType === 'check',
          [cls.disabled]: disabled
        },
        className,
        classes?.root
      )}
      ref={mergeRefs([labelRef, ref])}
    >
      <input type="radio" name={name} onChange={handleChange} checked={isChecked} disabled={disabled} {...rest} />

      <span
        className={clsx(cls.box, cls[size], {
          [cls.indeterminate]: isChecked && markType === 'default',
          [cls.checked]: isChecked && markType === 'check',
          [cls.disabled]: disabled,
          [cls.focus]: focused
        })}
      >
        {isChecked && markType === 'check' && <CheckIcon size={size} />}

        {isChecked && markType === 'default' && (
          <span
            className={clsx(cls.indeterminateBox, cls[size], {
              [cls.disabled]: disabled
            })}
          />
        )}
      </span>

      <span className={clsx(cls.content, classes?.content, { [cls.disabled]: disabled })}>{label}</span>
    </label>
  );
});
