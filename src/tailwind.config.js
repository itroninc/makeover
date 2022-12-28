const path = require('path');
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        path.join(__dirname, './components/**/*.{vue,js,ts,jsx,tsx}'),
        path.join(__dirname, './composables/**/*.{js,ts}'),
        path.join(__dirname, './docs/**/*.{js,ts}'),
        path.join(__dirname, './directives/**/*.{js,ts}'),
        path.join(__dirname, './utils/**/*.{js,ts}'),
    ],
    theme: {
        extend: {
            colors: {
                gray: colors.neutral
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms')({
            strategy: 'class'
        })
    ]
};
