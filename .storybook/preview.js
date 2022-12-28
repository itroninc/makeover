import { app } from '@storybook/vue3';
import { createRouter, createWebHistory } from 'vue-router';
import i18n from './i18n.js';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import Canvas from './components/Canvas.vue';
import MToastPlugin from '../src/components/toast/index.js';
import MConfirmPlugin from '../src/components/confirm/index.js';
import theme from './theme';

app.use(i18n);
app.use(MToastPlugin);
app.use(MConfirmPlugin);

// vue router is needed in storybook for the 'link' component
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'devices'
        },
        {
            path: '/device',
            name: 'device_123'
        }
    ]
});
app.use(router);


export const parameters = {
    actions: {
        argTypesRegex: "^on[A-Z].*"
    },

    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },

    viewport: {
        viewports: MINIMAL_VIEWPORTS,
    },

    docs: {
        theme: theme
    },

    // previewTabs: {
    //     canvas: { hidden: true }
    // }
};


// https://storybook.js.org/docs/vue/writing-stories/decorators
export const decorators = [(story) => ({
    components: { Canvas },
    template: '<Canvas><story /></Canvas>'
})];


