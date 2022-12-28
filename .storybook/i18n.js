import { createI18n } from 'vue-i18n';
import useI18n from '../src/composables/useI18n.js';

function loadLocaleMessages() {
    const locales = import.meta.globEager('../src/locales/*.js');
    const messages = {};

    for (const path in locales) {
        const matched = path.match(/([A-Za-z0-9-_]+)\./i);

        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale] = locales[path].default;
        }
    }

    return messages;
}

const config = useI18n();

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en-US',
    fallbackLocale: 'en-US',
    messages: loadLocaleMessages(),
    numberFormats: config.numberFormats,
    dateTimeFormats: config.dateTimeFormats
});

export default i18n;
