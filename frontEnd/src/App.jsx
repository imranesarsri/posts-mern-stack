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

  const handleChangeLanguage = (selectedLang) => {
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

        <div className="dark:bg-Dark-backgroundSec h-screen bg-Light-backgroundSec dark:text-white text-Light-text">
          <h2 className="text-3xl font-bold underline ">
            {t('welcomeToReact')}
          </h2>
          <h2 className="text-5xl font-bold underline mt-2">
            {t('welcome:welcome')}
          </h2>
        </div>
      </UseToggleDarkMode.Provider>
    </Flowbite>
  );
}

export default App;
