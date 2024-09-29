import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { useState, useEffect, createContext } from 'react';
import cookies from 'js-cookie';
import './config/i18nConfig';
import Home from "./pages/Home";
import { Flowbite } from "flowbite-react";
import Main from "./components/layouts/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Error404 from "./pages/Error404";

// Use Context
export const UseToggleDarkMode = createContext(null)


function App() {

  // Start work to Lange
  const { t: translate } = useTranslation();
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
    translate
  }

  const location = useLocation();

  return (
    <Flowbite>
      <UseToggleDarkMode.Provider value={values}>
        <Main>
          {location.pathname !== '/login' && <NavBar />}
          <Routes>
            <Route path="/" element={<Home lang={lang} toggleLang={handleChangeLanguage} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Main>
      </UseToggleDarkMode.Provider>
    </Flowbite>
  );
}

export default App;
