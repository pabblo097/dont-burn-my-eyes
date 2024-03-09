const supportedLang = ['en', 'pl'];

const setHtmlLang = async () => {
   const uiLanguage = await chrome.i18n.getUILanguage();
   const uiLanguageWithoutCountry = uiLanguage.split('-')[0];

   document.documentElement.lang = supportedLang.includes(uiLanguageWithoutCountry)
      ? uiLanguageWithoutCountry
      : 'en';
};

export default setHtmlLang;
