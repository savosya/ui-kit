import * as React from "react";
import {ComponentType, ReactNode} from "react";
import {OverlayProps} from "./components";

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
}
