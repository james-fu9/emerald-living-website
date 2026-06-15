(function () {
  var storageKey = 'emeraldLifeLanguage';
  var htmlLang = { en: 'en', zhHans: 'zh-Hans', zhHant: 'zh-Hant' };

  function normalize(value) {
    var supported = ['en', 'zhHans', 'zhHant'];
    if (supported.indexOf(value) !== -1) {
      return value;
    }

    var language = String(value || '').toLowerCase();
    if (language.indexOf('zh-hant') === 0 || language.indexOf('zh-tw') === 0 || language.indexOf('zh-hk') === 0 || language.indexOf('zh-mo') === 0) {
      return 'zhHant';
    }
    if (language.indexOf('zh-hans') === 0 || language.indexOf('zh-cn') === 0 || language.indexOf('zh-sg') === 0 || language === 'zh') {
      return 'zhHans';
    }
    return 'en';
  }

  try {
    var lang = normalize(localStorage.getItem(storageKey) || navigator.language || 'en');
    document.documentElement.lang = htmlLang[lang];
    document.documentElement.setAttribute('data-lang', lang);
  } catch (error) {}
})();
