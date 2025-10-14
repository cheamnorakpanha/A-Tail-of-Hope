import { createContext, useContext, useState, ReactNode, useLayoutEffect } from "react";
import en from "../translations/en/global.json";
import kh from "../translations/kh/global.json";

type Language = "en" | "kh";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof en;
}

const translations = { en, kh };

// Read language before React renders (synchronously)
const getInitialLanguage = (): Language => {
  if (typeof window !== "undefined") {
    const savedLang = localStorage.getItem("appLanguage") as Language | null;
    if (savedLang === "kh" || savedLang === "en") return savedLang;
  }
  return "en";
};

// Set font *immediately* before React mounts
const applyFont = (lang: Language) => {
  const body = document.body;
  if (lang === "kh") {
    body.classList.add("koh-santepheap-regular");
    body.classList.remove("content-regular");
  } else {
    body.classList.remove("koh-santepheap-regular");
    body.classList.add("content-regular");
  }
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const initialLang = getInitialLanguage();
    if (typeof window !== "undefined") applyFont(initialLang);  // Apply font before anything else (synchronously)
    return initialLang;
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("appLanguage", newLang);
    applyFont(newLang);
  };

  // Keep font synced just in case
  useLayoutEffect(() => {
    applyFont(lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
