import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// Import các tệp JSON
import en from "@app/locales/en.json"
import vi from "@app/locales/vi.json"

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    vi: { translation: vi },
  },
  lng: typeof window !== "undefined" ? localStorage.getItem("language") || "en" : "en", // Ngôn ngữ mặc định
  fallbackLng: "en", // Sử dụng ngôn ngữ này nếu không tìm thấy dịch
  interpolation: {
    escapeValue: false, // Không cần escape cho React
  },
})

export default i18n
