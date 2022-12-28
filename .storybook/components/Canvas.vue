<script>
import '../../src/css/tailwind.css';
import MSvgSprite from '../../src/components/svg/SvgSprite.vue';

export default {
    name: 'Canvas',

    components: {
        MSvgSprite
    }
};
</script>

<template>
    <div class="makeover-canvas">
        <m-svg-sprite />
        <m-toaster :max-toasts="10" />
        <m-confirm />
        <slot />
    </div>
</template>

