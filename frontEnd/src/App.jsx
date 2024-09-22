import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { useState, useEffect, createContext } from 'react';
import cookies from 'js-cookie';
import './config/i18nConfig';
import Home from "./pages/Home";
import { Flowbite } from "flowbite-react";

// Use Context
export const UseToggleDarkMode = createContext(null)


function App() {

  // Start work to Lange
  const { t } = useTranslation();
  const langCookie = cookies.get('i18next') || 'en';
  const [lang, setLang] = useState(langCookie);

  const handleChangeLanguage = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);
    cookies.set('i18next', selectedLang, { expires: 365 }); // Save language preference for 1 year
  };

  useEffect(() => {
    window.document.dir = i18n.dir(lang); // Update document direction based on language
  }, [lang]);


  // All values use by CONTEXT
  const values = {
    lang,
    handleChangeLanguage,
    t
  }

  return (
    <Flowbite>
      <UseToggleDarkMode.Provider value={values}>
        <Home lang={lang} toggleLang={handleChangeLanguage} />
      </UseToggleDarkMode.Provider>
    </Flowbite>
  );
}

export default App;
