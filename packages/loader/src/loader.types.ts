import { HTMLProps } from 'react';

export interface LoaderProps extends HTMLProps<SVGSVGElement> {
  className?: string;
  size?: number;
  color?: string;
  secondaryColor?: string;
  spinner?: boolean;
  fill?: boolean;
  classes?: {
    wrapper?: string;
    loader?: string;
  };
}
