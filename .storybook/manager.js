import { addons } from '@storybook/addons';
import makeoverTheme from './theme';

// https://storybook.js.org/docs/react/configure/features-and-behavior
addons.setConfig({
    theme: makeoverTheme,
    isFullscreen: false,
    initialActive: 'docs',
    toolbar: {
        title: { hidden: false },
        zoom: { hidden: false },
        eject: { hidden: false },
        copy: { hidden: false },
        fullscreen: { hidden: false }
      },
});
