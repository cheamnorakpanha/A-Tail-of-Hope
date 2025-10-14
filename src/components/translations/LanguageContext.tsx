import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import en from "../translations/en/global.json";
import kh from "../translations/kh/global.json";

type Language = "en" | "kh";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof en; // translation object
}

const translations = { en, kh };

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");

  // Apply Koh Santepheap font class to <body> when language is 'kh'
  useEffect(() => {
    const body = document.body;
    if (lang === "kh") {
      body.classList.add("koh-santepheap-regular");
      body.classList.remove("content-regular"); // remove default font if any
    } else {
      body.classList.remove("koh-santepheap-regular");
      body.classList.add("content-regular"); // apply default font for English
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
