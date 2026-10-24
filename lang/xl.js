/* 🌍 Espagnol / italien : dictionnaires chargés à la demande (lang/es.js, lang/it.js).
   Clé = le texte ANGLAIS de la page (t(fr, en) → XL.tr(en)) ; textes fixes (data-i18n) rangés par page.
   Modèles : une clé avec « {} » (valeur calculée) → traduction avec {1}, {2}… ; les morceaux capturés sont traduits s'ils sont connus.
   Ce qui manque reste en anglais (jamais de trou). */
(function(){
  var X = window.XL = {data: {}, s: {}, k: {}, tpl: [], cache: new Map(), lang: null, miss: new Set()};   // miss : textes anglais sans traduction (contrôle)
  var V = '20261026';
  X.def = function(lang, d){ X.data[lang] = d; };
  X.load = function(lang){
    if(X.data[lang]) return Promise.resolve();
    return new Promise(function(ok, ko){ var sc = document.createElement('script'); sc.src = 'lang/'+lang+'.js?v='+V; sc.onload = ok; sc.onerror = ko; document.head.appendChild(sc); });
  };
  var esc = function(s){ return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); };
  X.use = function(lang){
    var d = X.data[lang] || {s: {}, k: {}}; X.lang = lang; X.s = d.s || {}; X.k = d.k || {}; X.cache = new Map();
    X.tpl = Object.keys(X.s).filter(function(k){ return k.indexOf('{}') >= 0; })
      .sort(function(a, b){ return b.length - a.length; })   // le modèle le plus précis d'abord
      .map(function(k){ return [new RegExp('^'+k.split('{}').map(esc).join('([\\s\\S]*?)')+'$'), X.s[k]]; });
  };
  var sub = function(v){ if(v === undefined) return ''; if(X.s[v] !== undefined) return X.s[v];
    var cap = v.charAt(0).toUpperCase() + v.slice(1); if(X.s[cap] !== undefined) return X.s[cap].charAt(0).toLowerCase() + X.s[cap].slice(1); return v; };
  X.tr = function(en){
    if(typeof en !== 'string') return en;
    var v = X.s[en]; if(v !== undefined) return v;
    if(X.cache.has(en)) return X.cache.get(en);
    var out = en;
    for(var i = 0; i < X.tpl.length; i++){ var m = X.tpl[i][0].exec(en); if(m){ out = X.tpl[i][1].replace(/\{(\d+)\}/g, function(_, n){ return sub(m[+n]); }); break; } }
    if(out === en && /[a-z]{3}/i.test(en.replace(/<[^>]*>/g, ''))) X.miss.add(en);
    X.cache.set(en, out); return out;
  };
  X.key = function(page, k){ return (X.k[page] || {})[k]; };
  X.LANGS = [['fr', '🇫🇷 FR'], ['en', '🇬🇧 EN'], ['es', '🇪🇸 ES'], ['it', '🇮🇹 IT']];
  X.locale = function(l){ return {fr: 'fr-FR', en: 'en-GB', es: 'es-ES', it: 'it-IT'}[l] || 'fr-FR'; };
  // liens vers les autres pages du site (menu, textes) : ?lang=… suit la langue choisie (FR = adresse nue)
  // → changer de page garde la langue, même sans mémoire du navigateur (fichiers locaux, navigation privée)
  X.links = function(lang){
    document.querySelectorAll('a[href]').forEach(function(a){
      var h = a.getAttribute('href'), m = /^((?:[\w.-]+\.html)|\.\/?|)(\?[^#]*)?(#.*)?$/.exec(h);
      if(!m || /^(https?:|mailto:|\/\/)/.test(h) || (!m[1] && !m[2] && m[3])) return;   // externe, ou simple ancre (#…) de la même page
      var q = new URLSearchParams((m[2] || '').slice(1)); if(lang === 'fr') q.delete('lang'); else q.set('lang', lang);
      var qs = q.toString(); a.setAttribute('href', (m[1] || './') + (qs ? '?' + qs : '') + (m[3] || ''));
    });
  };
  X.fromUrl = function(){ var m = /[?&]lang=(fr|en|es|it)\b/i.exec(location.search); return m ? m[1].toLowerCase() : null; };
})();
