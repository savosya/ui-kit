import * as React from 'react';

export interface AttachProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'value' | 'defaultValue' | 'onChange' | 'multiple' | 'enterKeyHint'> {
  title?: string;
  description?: string;
  loading?: boolean;
  disabled?: boolean;
  success?: string;
  changeDescriptionForFilename?: boolean;
  maxWidth?: string | number;
  ellipsisTitle?: boolean;
  ellipsisDescription?: boolean;

  value?: File | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, file: File | null) => void;
  onClear?: (e: React.MouseEvent<any>) => void;

  className?: string;
  classes?: {
    root?: string;
    body?: string;
    status?: string;
    title?: string;
    description?: string;
    leftIcon?: string;
    rightIcon?: string;
  };
}
