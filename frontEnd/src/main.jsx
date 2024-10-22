import { StrictMode, useEffect, useState, createContext } from 'react';
import { createRoot } from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { Flowbite } from 'flowbite-react';
import i18n from "i18next";
import cookies from 'js-cookie';

// Use Context
export const UseToggleDarkMode = createContext(null);

// Main application component
const Main = () => {
  // State for language
  const langCookie = cookies.get('i18next') || 'en';
  const [lang, setLang] = useState(langCookie);

  // Get current route
  const location = useLocation();
  const path = location.pathname;

  // Language change handler
  const handleChangeLanguage = (selectedLang) => {
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);
    cookies.set('i18next', selectedLang, { expires: 365 }); // Save language preference for 1 year
  };

  // Update document direction based on language
  useEffect(() => {
    window.document.dir = i18n.dir(lang);
  }, [lang]);

  // Values to be provided to the context
  const values = {
    lang,
    handleChangeLanguage,
    translate: i18n.t,
    path,
  };

  return (
    <UseToggleDarkMode.Provider value={values}>
      <Flowbite>
        <App lang={lang} handleChangeLanguage={handleChangeLanguage} />
      </Flowbite>
    </UseToggleDarkMode.Provider>
  );
};

// Render the application
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
