// src/i18nConfig.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        fallbackLng: "en",
        detection: {
            order: [
                'cookie',
                'htmlTag',
                'querystring',
                'localStorage',
                'sessionStorage',
                'navigator',
                'path',
                'subdomain'
            ],
            caches: ['cookie'],
        },
        backend: {
            loadPath: '/locale/{{lng}}/{{ns}}.json',
        },
        ns: ['translation', 'welcome'],
        defaultNS: 'translation',
        react: {
            useSuspense: false,
        },
    });

export default i18n;
