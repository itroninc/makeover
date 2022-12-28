import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
        }
    },
    test: {
        globals: true, // provide vitest api globally
        environment: 'jsdom',
        coverage: {
            provider: 'c8',
            reportsDirectory: 'test_output/coverage',
            reporter: ['cobertura', 'text'], // https://vitest.dev/guide/coverage.html#coverage-setup
        },
        include: [
            './src/**/*.test.js'
        ],
        reporters: [
            'default',
            'junit'
        ],
        outputFile: './test_output/reports/junit.xml'
    }
});
