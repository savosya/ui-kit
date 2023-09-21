import * as React from 'react'
import {useCallback, useRef, useState} from "react";
import type {ComponentType, ReactNode} from "react"

import clsx from 'clsx'

import {OverlayProps, Overlay as DefaultOverlay} from "./components/overlay";
import cls from './index.module.scss'
import {preventAndStopEvent} from "./utils";

export interface DropzoneProps {
  className?: string;
  text?: string;
  disabled?: boolean;
  error?: boolean;
  block?: boolean;
  overlay?: ComponentType<OverlayProps>;
  onDrop?: (files: FileList) => void;
  onDragOver?: (event: React.DragEvent<HTMLElement>) => void;
  onDragLeave?: (event: React.DragEvent<HTMLElement>) => void;
  onDragEnter?: (event: React.DragEvent<HTMLElement>) => void;
  children?: ReactNode;
};

export const Dropzone = (
  {
    className,
    children,
    text = 'Перетащите файлы',
    error = false,
    overlay: Overlay = DefaultOverlay,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
    block = false,
    disabled,
  }: DropzoneProps) => {
  const [dragOver, setDragOver] = useState(false);

  /**
   * При ховере дочерних элементов срабатывает dragLeave, из-за чего пропадает оверлей
   * https://stackoverflow.com/a/21002544
   */
  const dragCounter = useRef(0);

  const handleDragOver = useCallback(
    (event: React.DragEvent<HTMLElement>) => {
      preventAndStopEvent(event);

      if (disabled) return;

      if (onDragOver) {
        onDragOver(event);
      }
    },
    [onDragOver, disabled],
  );

  const handleDragEnter = useCallback(
    (event: React.DragEvent<HTMLElement>) => {
      preventAndStopEvent(event);

      if (disabled) return;

      dragCounter.current += 1;

      setDragOver(true);

      if (onDragEnter) {
        onDragEnter(event);
      }
    },
    [disabled, onDragEnter],
  );

  const handleDragLeave = useCallback(
    (event: React.DragEvent<HTMLElement>) => {
      preventAndStopEvent(event);

      if (disabled) return;

      dragCounter.current -= 1;

      if (dragCounter.current > 0) return;

      setDragOver(false);

      if (onDragLeave) {
        onDragLeave(event);
      }
    },
    [disabled, onDragLeave],
  );

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLElement>) => {
      preventAndStopEvent(event);

      if (disabled) return;

      setDragOver(false);
      dragCounter.current = 0;

      if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
        if (onDrop) {
          onDrop(event.dataTransfer.files);
        }

        event.dataTransfer.clearData();
      }
    },
    [disabled, onDrop],
  );

  return (
    <div
      className={clsx(cls.root, className, {
        [cls.dragOver]: dragOver,
        [cls.error]: error,
        [cls.block]: block,
        [cls.disabled]: disabled,
      })}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {children}
      {Overlay && <Overlay text={text} visible={Boolean(dragOver)} />}
    </div>
  );
}

