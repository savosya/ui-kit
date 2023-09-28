import * as React from 'react';
import { ReactNode } from 'react';

export type TooltipPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export interface TooltipProps {
  title?: ReactNode;
  content?: ReactNode;
  mode?: 'light' | 'dark';
  children: ReactNode;
  offset?: number;
  hideDelay?: number;
  openDelay?: number;
  hideArrow?: boolean;
  clickable?: boolean;
  closeOnScroll?: boolean;
  closeOnResize?: boolean;
  style?: React.CSSProperties;
  open?: boolean;
  position?: { x: number; y: number };
  onShow?: () => void;
  onHide?: () => void;
  opacity?: React.CSSProperties['opacity'];
  float?: boolean;
  placement?: TooltipPlacement;
  trigger?: 'hover' | 'click';
  classes?: {
    anchor?: string;
    root?: string;
    arrow?: string;
    title?: string;
    content?: string;
  };
  className?: string;
}
