import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from 'react';
import cookies from 'js-cookie';
import './config/i18nConfig';

function App() {
  const { t } = useTranslation();
  const langCookie = cookies.get('i18next') || 'en';
  const [lang, setLang] = useState(langCookie);

  const handleChangeLanguage = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);
    cookies.set('i18next', selectedLang, { expires: 365 }); // Save language preference for 1 year
    cookies.set('imrane', 'sarsri imrane', { expires: 365 }); // Save language preference for 1 year
  };

  useEffect(() => {
    window.document.dir = i18n.dir(lang); // Update document direction based on language
  }, [lang]);

  return (
    <div>
      <select
        name="lang"
        value={lang}
        onChange={handleChangeLanguage}
        className="p-2 border rounded"
      >
        <option value="en">English</option>
        <option value="ar">Arabic</option>
      </select>
      <h2 className="text-3xl font-bold underline mt-2">
        {t('welcomeToReact')}
      </h2>
      <h2 className="text-5xl font-bold underline mt-2">
        {t('welcome:welcome')}
      </h2>
    </div>
  );
}

export default App;
