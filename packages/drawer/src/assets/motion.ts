import type { DrawerProps } from 'rc-drawer';
import './motion.css';

const MASK_CLASSNAME = 'eub-drawer-mask-motion'
const PANEL_CLASSNAME = 'eub-drawer-panel-motion'

export const maskMotion: DrawerProps['maskMotion'] = {
  motionAppear: true,
  motionName: MASK_CLASSNAME,
  onAppearEnd: console.warn,
};

export const motion: DrawerProps['motion'] = placement => ({
  motionAppear: true,
  motionName: `${PANEL_CLASSNAME}-${placement}`,
});

const motionProps: Partial<DrawerProps> = {
  maskMotion,
  motion,
};

export default motionProps;