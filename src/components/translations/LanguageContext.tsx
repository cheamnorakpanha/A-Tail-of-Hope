import { createContext, useContext, useState, ReactNode } from "react"
import en from '../translations/en/global.json'
import kh from '../translations/kh/global.json'

type Language = 'en' | 'kh'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: typeof en  // translation object
}

const translations = { en, kh }

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: en
})

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('en')

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
