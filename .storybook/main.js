const { mergeConfig } = require('vite');
const path = require('path');

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],

    addons: [
        // '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',

        // tailwind 3.x requires postcss 8
        // this forces the usage of postcss 8 (the version defined in package.json):
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss')
                }
            }
        }
    ],

    framework: '@storybook/vue3',

    core: {
        builder: '@storybook/builder-vite'
    },

    features: {
        storyStoreV7: true
    },

    staticDirs: [
        '../static'
    ],

    // async viteFinal(config, { configType }) {
    //     console.log("CONFIG TTYPE", configType)

    //     config.base = '/docs/';

    //     // return the customized config
    //     return config;
    // },
}
