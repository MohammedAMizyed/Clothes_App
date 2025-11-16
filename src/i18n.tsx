import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import ar from "../public/locales/ar/translation.json"
import en from "../public/locales/en/translation.json"

i18n.use(initReactI18next).init({
  lng: "ar", // اللغة الافتراضية
  fallbackLng: "en",
  resources: {
    ar: { translation: ar },
    en: { translation: en },
  },
})

export default i18n
