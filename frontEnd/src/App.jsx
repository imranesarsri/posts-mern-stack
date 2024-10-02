import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { useState, useEffect, createContext } from 'react';
import cookies from 'js-cookie';
import './config/i18nConfig';
import Home from "./pages/Home";
import { Flowbite } from "flowbite-react";
import Main from "./components/layouts/Main";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Error404 from "./pages/Error404";
import Post from "./pages/posts/Post";
import CreatePosts from "./pages/posts/CreatePosts";
import ContainerBady from "./components/layouts/ContainerBady";
import Footer from "./components/common/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";

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


  const location = useLocation();

  // All values use by CONTEXT
  const values = {
    lang,
    handleChangeLanguage,
    translate,
    location
  }



  return (
    <Flowbite>
      <UseToggleDarkMode.Provider value={values}>
        <Main>
          {(location.pathname !== '/login' && location.pathname !== '/register') && <NavBar />}
          <ContainerBady>
            <Routes>
              <Route path="/" element={<Home lang={lang} toggleLang={handleChangeLanguage} />} />
              <Route path="/posts" element={<Post />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/posts/create" element={<CreatePosts />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </ContainerBady>
          {(location.pathname !== '/login' && location.pathname !== '/register') && <Footer />}
        </Main>
      </UseToggleDarkMode.Provider>
    </Flowbite>
  );
}

export default App;
