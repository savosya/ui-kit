import { addons } from '@storybook/manager-api';
import { storybookTheme } from './theme';

addons.setConfig({
  theme: storybookTheme,
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: true,
    collapsedRoots: ['other']
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: true },
    copy: { hidden: true },
    fullscreen: { hidden: false }
  }
});
