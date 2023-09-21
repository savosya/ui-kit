import * as React from 'react'
import {useEffect, useRef, useState} from "react";
import clsx from 'clsx'

import Loader from '@savosya/savosya-myuikit-loader'
import {mergeRefs} from "@savosya/savosya-myuikit-utils";
import {useFocus} from "@savosya/savosya-myuikit-hooks";

import {RightChevroneIcon} from "./components/right-chevrone-icon";
import {FileIcon} from "./components/file-icon";
import {CloseIcon} from "./components/close-icon";
import cls from './index.module.scss'

export interface AttachProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size' | 'type' | 'value' | 'defaultValue' | 'onChange' | 'multiple' | 'enterKeyHint'
> {
  title?: string
  description?: string
  loading?: boolean
  disabled?: boolean
  success?: string
  changeDescriptionForFilename?: boolean
  maxWidth?: string | number
  ellipsisTitle?: boolean
  ellipsisDescription?: boolean

  value?: File | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, file: File | null) => void;
  onClear?: (e: React.MouseEvent<any>) => void

  className?: string
  classes?: {
    root?: string
    body?: string
    status?: string
    title?: string
    description?: string
    leftIcon?: string
    rightIcon?: string
  }
}

export const Attach = React.forwardRef<HTMLInputElement, AttachProps>((
  {
    title = 'Выберите файл',
    description,
    loading,
    disabled,
    value,
    accept,
    changeDescriptionForFilename = true,
    id,
    success = 'Файл загружен',
    onChange,
    onClear,
    style,
    maxWidth = 320,
    ellipsisDescription,
    ellipsisTitle,
    classes,
    className,
    ...restProps
  }, ref) => {
  const uncontrolled = value === undefined;

  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);
  const [focused] = useFocus(labelRef, 'keyboard');

  const [fileState, setFile] = useState(value || null);
  let descriptionText = changeDescriptionForFilename ? (fileState?.name || description) : description

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ? event.target.files[0] : null;

    if (onChange) {
      onChange(event, file);
    }

    if (uncontrolled) {
      setFile(file);
    }

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleClearClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    if (uncontrolled) {
      setFile(null);
    }

    if (onClear) {
      onClear(e);
    }
  };

  const handleOpenClick = () => {
    if (loading || disabled) return;
    if (labelRef.current) {
      labelRef.current.click();
    }
  }

  useEffect(() => {
    if (!uncontrolled) {
      setFile(value || null);
    }
  }, [uncontrolled, value]);

  return (
    <div
      className={clsx(cls.root, {[cls.loading]: loading, [cls.disabled]: disabled, [cls.focus]: focused}, className)}
      onClick={handleOpenClick}
      style={{...style, maxWidth: maxWidth}}
    >
      <div className={clsx(classes?.leftIcon)}>
        <FileIcon/>
      </div>

      <div className={clsx(cls.body, classes?.body)}>
        {fileState && success && <div className={clsx(cls.status, classes?.status)}>{success}</div>}

        {title && (
          <div
            className={clsx(cls.title, classes?.title, {[cls.ellipsis]: ellipsisTitle})}
            title={title}
          >
            {title}
          </div>
        )}

        {descriptionText && (
          <div className={clsx(cls.description, classes?.description, {[cls.ellipsis]: ellipsisDescription})}
               title={descriptionText}
          >
            {descriptionText}
          </div>
        )}
      </div>

      <label className={cls.label} htmlFor={id} ref={labelRef}>
        <input
          {...restProps}
          className={cls.control}
          accept={accept}
          disabled={disabled}
          id={id}
          multiple={false}
          // tabIndex={-1}
          type='file'
          onChange={handleInputChange}
          ref={mergeRefs([ref, inputRef])}
        />
      </label>

      <div className={clsx(cls.right, classes?.rightIcon)}>
        {loading ? <Loader size={24}/> : fileState ? <CloseIcon onClick={handleClearClick}/> : <RightChevroneIcon/>}
      </div>
    </div>
  );
})

