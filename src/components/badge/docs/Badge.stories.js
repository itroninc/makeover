import MBadge from '../Badge.vue';

import {
    badgeSizes,
    badgeColors
} from '../constants.js';

import {
    sizeDescription
} from '/.storybook/story-constants.js';


export default {
    title: 'Components/Badge',
    component: MBadge,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: Object.keys(badgeSizes)
            },
            description: sizeDescription,
            table: {
                defaultValue: {
                    summary: badgeSizes.md
                }
            }
        },

        color: {
            control: {
                type: 'select',
                options: Object.keys(badgeColors)
            },
            description: "The color of the badge",
            table: {
                defaultValue: {
                    summary: badgeColors.green
                }
            }
        }
    }
};


const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: {
        MBadge
    },
    setup() {
        return { args };
    },
    template: `
        <m-badge v-bind="args">3</m-tag>
    `
});

export const Badge = Template.bind({});
Badge.args = {
    color: badgeColors.green,
    size: badgeSizes.sm
};
