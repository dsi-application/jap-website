import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en/translation.json';
import frTranslation from './locales/fr/translation.json';
import  arTranslation from './locales/ar/translation.json'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)



  i18n.use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
  .init({
    lng: 'fr', // default language
<<<<<<< HEAD
    fallbackLng: 'fr', // fallback language if the detected language is not available
=======
    fallbackLng: 'en', // fallback language if the detected language is not available
>>>>>>> 242d3928271ea073db40cae637a44fc7f2a1e8fd
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
      ar:{translation: arTranslation}
    },
  });
  export default i18n;