import {addons} from '@storybook/manager-api'
import {storybookTheme} from "./theme";

// import favicon from './public/favicon.ico';
// const link = document.createElement('link');
// link.setAttribute('rel', 'shortcut icon');
// link.setAttribute('href', favicon);
// document.head.appendChild(link);


addons.setConfig({
  theme: storybookTheme,
  isFullscreen: false,
  showNav: false,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: true,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: true },
    copy: { hidden: true },
    fullscreen: { hidden: false },
  },
})