<script>
export default {
    name: 'MBadge'
}
</script>

<script setup>
import { computed } from 'vue';
import { badgeSizes, badgeColors } from './constants.js';

const props = defineProps({
    size: {
        type: String,
        default: badgeSizes.md,
        validator: (value) => Object.keys(badgeSizes).includes(value)
    },

    color: {
        type: String,
        default: badgeColors.green,
        validator: (value) => Object.keys(badgeColors).includes(value)
    }
});
</script>


<template>
    <div :class="[`m-badge`, `m-badge-${size}`, `m-badge-${color}`]"><slot></slot></div>
</template>


<style>
.m-badge {
    @apply rounded-full text-center inline-block font-semibold;
    padding: 0 5px;
}

/* Sizes */
.m-badge-sm {
    font-size: 11px;
    line-height: 18px;
    min-width: 18px;
    height: 18px;
}
.m-badge-md {
    font-size: 14px;
    line-height: 22px;
    min-width: 22px;
    height: 22px;
}
.m-badge-lg {
    font-size: 16px;
    line-height: 27px;
    min-width: 27px;
    height: 27px;
}

/* Colors */
.m-badge-blue {
    @apply bg-blue-500 text-white;
}
.m-badge-red {
    @apply bg-red-500 text-white;
}
.m-badge-green {
    @apply bg-emerald-500 text-white;
}
.m-badge-yellow {
    @apply bg-amber-400;
}
.m-badge-gray {
    @apply bg-gray-400 text-white;
}
.m-badge-black {
    @apply bg-gray-800 text-white;
}
</style>
