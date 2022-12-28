import { describe, it, expect } from 'vitest';
import { shallowMount, mount } from '@vue/test-utils';
import Badge from './Badge.vue';
import { badgeSizes, badgeColors } from './constants.js';

function sm(props) {
    return shallowMount(Badge, props);
}


describe("Badge.vue", () => {

    it('renders the content passed to the default slot', () => {
        const slotText = 'test123';

        const wrapper = sm({
            slots: {
                default: slotText
            }
        });

        expect(wrapper.text()).toMatch(slotText);
    });


    /****** SIZE ********/
    function sizeTest(size) {
        const wrapper = sm({
            props: {
                size: badgeSizes[size]
            }
        });

        expect(
            wrapper.find(`.m-badge-${size}`).exists()
        ).toBe(true);
    }

    Object.keys(badgeSizes).forEach((size) => {
        it(`should display a ${size} Badge when the "size" prop is "${size}"`, () => {
            sizeTest(size);
        });
    });


    /****** Color ********/
    function colorTest(color) {
        const wrapper = sm({
            props: {
                color: badgeColors[color]
            }
        });

        expect(
            wrapper.find(`.m-badge-${color}`).exists()
        ).toBe(true);
    }

    Object.keys(badgeColors).forEach((color) => {
        it(`should display a ${color} Badge when the "color" prop is "${color}"`, () => {
            colorTest(color);
        });
    });
});
