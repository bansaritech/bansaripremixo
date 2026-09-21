/* ============================================================
   Bansari Premixo — i18n.js
   ------------------------------------------------------------
   Simple two-language (English / Gujarati) translation system.

   👉 To edit any wording: find the key below and change the
      "en" (English) or "gu" (Gujarati) text. Nothing else needed.

   How it connects to the page:
     - Any element with  data-i18n="some.key"        → its text
     - Any element with  data-i18n-html="some.key"   → its innerHTML (allows <br>, <strong>)
     - Any element with  data-i18n-attr="placeholder:key; aria-label:key2"
                                                      → sets those attributes
   ============================================================ */

const I18N = {
  en: {
    // Nav
    "nav.products": "Products",
    "nav.about": "About",
    "nav.how": "How It Works",
    "nav.why": "Why Us",
    "nav.contact": "Contact",
    "nav.lang": "ગુજરાતી",              // label shows the OTHER language
    "nav.langAria": "Switch to Gujarati",

    // Hero
    "hero.eyebrow": "Home-like taste, ready in moments",
    "hero.title": "Home-like taste,<br><span class='hl'>ready in moments.</span>",
    "hero.tagline": "Authentic Gujarati &amp; Indian instant premixes — made with love in Gujarat. Just open, mix, and cook. <strong>Mix. Cook. Enjoy.</strong>",
    "hero.cta1": "Explore Products",
    "hero.cta2": "Order Now",
    "hero.trust1": "🌿 No artificial preservatives*",
    "hero.trust2": "⚡ Ready in minutes",
    "hero.trust3": "🏠 Home-style recipes",
    "hero.imgLabel": "Freshly cooked dhokla made from Bansari Premixo instant mix",
    "hero.badge": "Ready in moments ⏱️",

    // Products
    "products.eyebrow": "Our Premixes",
    "products.title": "Our Premix Range",
    "products.lead": "From savoury snacks to melt-in-mouth sweets — pick a mix, cook in minutes. New flavours added regularly.",
    "products.add": "Add to Cart",
    "products.added": "✓ Added",
    "products.empty": "No products in this category yet.",

    // Cart
    "cart.open": "Cart",
    "cart.title": "Your Cart",
    "cart.empty": "Your cart is empty. Add some tasty premixes! 🛒",
    "cart.remove": "Remove",
    "cart.total": "Total",
    "cart.checkout": "Place Order on WhatsApp",
    "cart.clear": "Clear cart",
    "cart.close": "Close cart",
    "cart.items": "items",
    "cart.msgHeading": "Hi Bansari Premixo! I'd like to place an order:",
    "cart.msgTotal": "Total",
    "cart.msgFooter": "Please confirm availability and delivery. Thank you!",

    // Delivery details
    "cart.detailsTitle": "Delivery details",
    "cart.deliverTo": "Deliver to",
    "cart.edit": "Edit",
    "cart.cName": "Name",
    "cart.cPhone": "Phone",
    "cart.cAddress": "Full delivery address",
    "cart.cNamePh": "Your name",
    "cart.cPhonePh": "Your phone number",
    "cart.cAddressPh": "House / flat, area, city, PIN",
    "cart.save": "Save details",
    "cart.detailsNeeded": "Please add your delivery details first.",
    "cart.msgName": "Name",
    "cart.msgPhone": "Phone",
    "cart.msgAddress": "Address",

    // How it works
    "how.eyebrow": "Just three steps",
    "how.title": "How It Works",
    "how.lead": "No skill needed. Restaurant-worthy results in three easy steps.",
    "how.s1t": "Open the Pack",
    "how.s1d": "Tear open your Bansari Premixo pack. Everything's pre-measured.",
    "how.s2t": "Mix",
    "how.s2d": "Add water or curd as per the simple instructions and stir.",
    "how.s3t": "Cook & Enjoy",
    "how.s3d": "Steam, bake, or fry — and enjoy that home-style taste.",

    // About
    "about.eyebrow": "Our Story",
    "about.title": "A family-run taste of home",
    "about.p1": "Bansari Premixo was born in a Gujarati kitchen with a simple belief: everyone deserves authentic, home-style food — even on the busiest day. The name <em>Bansari</em> carries the warmth of Krishna's flute and the comfort of an Indian home.",
    "about.p2": "We blend carefully selected ingredients using time-tested family recipes, so every packet delivers the same fresh, hygienic, home-cooked flavour — whether you're in Ahmedabad or abroad missing the taste of home.",
    "about.stat1": "Home-style recipes",
    "about.stat2": "Premix varieties",
    "about.stat3": "Proudly made in",
    "about.imgLabel": "The family behind Bansari Premixo preparing fresh ingredients",

    // Why us
    "why.eyebrow": "Why Bansari?",
    "why.title": "Why Bansari Premixo",
    "why.c1t": "Authentic Taste",
    "why.c1d": "Real family recipes that taste just like ghar-ka-khana — no compromises.",
    "why.c2t": "No Artificial Preservatives*",
    "why.c2d": "Clean ingredients you can trust for the whole family.",
    "why.c2note": "*See pack for details.",
    "why.c3t": "Quick & Convenient",
    "why.c3d": "Pre-measured and fuss-free. From craving to plate in minutes.",
    "why.c4t": "Made in Gujarat",
    "why.c4d": "Prepared hygienically with care, quality checks, and lots of love.",

    // Contact
    "contact.eyebrow": "Order Now",
    "contact.title": "Order or Get in Touch",
    "contact.lead": "Ready to taste home? Message us on WhatsApp for the fastest order, or send us a note below.",
    "contact.wa": "Order on WhatsApp",
    "contact.addr": "Near ClubO7, Shela, Ahmedabad, Gujarat",
    "contact.fName": "Name",
    "contact.fNamePh": "Your name",
    "contact.fPhone": "Phone",
    "contact.fMsg": "Message",
    "contact.fMsgPh": "Which premixes would you like?",
    "contact.submit": "Send via WhatsApp",
    "contact.errRequired": "Please add your name and phone number.",
    "contact.sending": "Opening WhatsApp… please wait 🙏",

    // Footer
    "footer.tag": "Bansari Premixo — Home-like taste, ready in moments.",
    "footer.fssai": "FSSAI Lic. No:",
    "footer.explore": "Explore",
    "footer.connect": "Connect",
    "footer.visit": "Visit",
    "footer.rights": "All rights reserved. · Made with ♥ in Gujarat.",

    // Floating button
    "wa.float": "Order Now"
  },

  gu: {
    // Nav
    "nav.products": "પ્રોડક્ટ્સ",
    "nav.about": "અમારા વિશે",
    "nav.how": "કેવી રીતે વાપરવું",
    "nav.why": "શા માટે અમે",
    "nav.contact": "સંપર્ક",
    "nav.lang": "English",
    "nav.langAria": "અંગ્રેજીમાં બદલો",

    // Hero
    "hero.eyebrow": "ઘર જેવો સ્વાદ, પળમાં તૈયાર",
    "hero.title": "ઘર જેવો સ્વાદ,<br><span class='hl'>પળમાં તૈયાર.</span>",
    "hero.tagline": "અસલી ગુજરાતી અને ભારતીય ઇન્સ્ટન્ટ પ્રીમિક્સ — ગુજરાતમાં પ્રેમથી બનાવેલ. બસ ખોલો, મિક્સ કરો ને રાંધો. <strong>મિક્સ. કૂક. એન્જોય.</strong>",
    "hero.cta1": "પ્રોડક્ટ્સ જુઓ",
    "hero.cta2": "ઓર્ડર કરો",
    "hero.trust1": "🌿 કૃત્રિમ પ્રિઝર્વેટિવ્સ વગર*",
    "hero.trust2": "⚡ મિનિટોમાં તૈયાર",
    "hero.trust3": "🏠 ઘર જેવી રેસિપી",
    "hero.imgLabel": "બંસરી પ્રીમિક્સોમાંથી બનાવેલ તાજા ઢોકળા",
    "hero.badge": "પળમાં તૈયાર ⏱️",

    // Products
    "products.eyebrow": "અમારા પ્રીમિક્સ",
    "products.title": "અમારી પ્રીમિક્સ રેન્જ",
    "products.lead": "તીખા નાસ્તાથી લઈને મોંમાં ઓગળી જતી મીઠાઈ સુધી — મિક્સ પસંદ કરો, મિનિટોમાં રાંધો. નવા સ્વાદ નિયમિત ઉમેરાય છે.",
    "products.add": "કાર્ટમાં ઉમેરો",
    "products.added": "✓ ઉમેર્યું",
    "products.empty": "આ કેટેગરીમાં હજી કોઈ પ્રોડક્ટ નથી.",

    // Cart
    "cart.open": "કાર્ટ",
    "cart.title": "તમારું કાર્ટ",
    "cart.empty": "તમારું કાર્ટ ખાલી છે. કંઈક સ્વાદિષ્ટ પ્રીમિક્સ ઉમેરો! 🛒",
    "cart.remove": "કાઢી નાખો",
    "cart.total": "કુલ",
    "cart.checkout": "WhatsApp પર ઓર્ડર આપો",
    "cart.clear": "કાર્ટ ખાલી કરો",
    "cart.close": "કાર્ટ બંધ કરો",
    "cart.items": "વસ્તુઓ",
    "cart.msgHeading": "નમસ્તે બંસરી પ્રીમિક્સો! મારે ઓર્ડર આપવો છે:",
    "cart.msgTotal": "કુલ",
    "cart.msgFooter": "કૃપા કરી ઉપલબ્ધતા અને ડિલિવરી કન્ફર્મ કરો. આભાર!",

    // Delivery details
    "cart.detailsTitle": "ડિલિવરી વિગતો",
    "cart.deliverTo": "ડિલિવરી સરનામું",
    "cart.edit": "બદલો",
    "cart.cName": "નામ",
    "cart.cPhone": "ફોન",
    "cart.cAddress": "પૂરું ડિલિવરી સરનામું",
    "cart.cNamePh": "તમારું નામ",
    "cart.cPhonePh": "તમારો ફોન નંબર",
    "cart.cAddressPh": "ઘર / ફ્લેટ, વિસ્તાર, શહેર, પિન",
    "cart.save": "વિગતો સાચવો",
    "cart.detailsNeeded": "કૃપા કરી પહેલા તમારી ડિલિવરી વિગતો ઉમેરો.",
    "cart.msgName": "નામ",
    "cart.msgPhone": "ફોન",
    "cart.msgAddress": "સરનામું",

    // How it works
    "how.eyebrow": "બસ ત્રણ સ્ટેપ",
    "how.title": "કેવી રીતે વાપરવું",
    "how.lead": "કોઈ આવડતની જરૂર નથી. ત્રણ સરળ સ્ટેપમાં રેસ્ટોરન્ટ જેવો સ્વાદ.",
    "how.s1t": "પેકેટ ખોલો",
    "how.s1d": "તમારું બંસરી પ્રીમિક્સો પેકેટ ખોલો. બધું જ માપીને તૈયાર છે.",
    "how.s2t": "મિક્સ કરો",
    "how.s2d": "સરળ સૂચના મુજબ પાણી કે દહીં ઉમેરીને હલાવો.",
    "how.s3t": "રાંધો ને માણો",
    "how.s3d": "બાફો, શેકો કે તળો — અને ઘર જેવો સ્વાદ માણો.",

    // About
    "about.eyebrow": "અમારી વાર્તા",
    "about.title": "ઘર જેવો સ્વાદ, પરિવારની ભાવના",
    "about.p1": "બંસરી પ્રીમિક્સોનો જન્મ એક ગુજરાતી રસોડામાં થયો — એક સાદી માન્યતા સાથે: વ્યસ્ત દિવસે પણ દરેકને અસલી, ઘર જેવો સ્વાદ મળવો જોઈએ. <em>બંસરી</em> નામ કૃષ્ણની બંસરીની હૂંફ અને ભારતીય ઘરની મમતા ધરાવે છે.",
    "about.p2": "અમે કાળજીથી પસંદ કરેલ સામગ્રી અને પરિવારની જૂની રેસિપીથી મિશ્રણ બનાવીએ છીએ, જેથી દરેક પેકેટમાં એ જ તાજો, સ્વચ્છ, ઘર જેવો સ્વાદ મળે — તમે અમદાવાદમાં હો કે વિદેશમાં ઘરનો સ્વાદ યાદ કરતા હો.",
    "about.stat1": "ઘર જેવી રેસિપી",
    "about.stat2": "પ્રીમિક્સ પ્રકાર",
    "about.stat3": "ગર્વથી બનાવેલ",
    "about.imgLabel": "બંસરી પ્રીમિક્સોનો પરિવાર તાજી સામગ્રી તૈયાર કરતો",

    // Why us
    "why.eyebrow": "શા માટે બંસરી?",
    "why.title": "શા માટે બંસરી પ્રીમિક્સો",
    "why.c1t": "અસલી સ્વાદ",
    "why.c1d": "ઘર-કા-ખાના જેવો સ્વાદ આપતી પરિવારની અસલી રેસિપી — કોઈ સમાધાન નહીં.",
    "why.c2t": "કૃત્રિમ પ્રિઝર્વેટિવ્સ વગર*",
    "why.c2d": "આખા પરિવાર માટે વિશ્વાસપાત્ર સ્વચ્છ સામગ્રી.",
    "why.c2note": "*વિગત માટે પેકેટ જુઓ.",
    "why.c3t": "ઝડપી ને સરળ",
    "why.c3d": "માપીને તૈયાર, ઝંઝટ વગર. ક્રેવિંગથી પ્લેટ સુધી મિનિટોમાં.",
    "why.c4t": "ગુજરાતમાં બનેલ",
    "why.c4d": "કાળજી, ગુણવત્તા તપાસ અને પુષ્કળ પ્રેમથી સ્વચ્છ રીતે તૈયાર.",

    // Contact
    "contact.eyebrow": "ઓર્ડર કરો",
    "contact.title": "ઓર્ડર કરો કે સંપર્ક કરો",
    "contact.lead": "ઘરનો સ્વાદ માણવા તૈયાર? ઝડપી ઓર્ડર માટે WhatsApp પર મેસેજ કરો, અથવા નીચે સંદેશ મોકલો.",
    "contact.wa": "WhatsApp પર ઓર્ડર કરો",
    "contact.addr": "ક્લબO7 પાસે, શેલા, અમદાવાદ, ગુજરાત",
    "contact.fName": "નામ",
    "contact.fNamePh": "તમારું નામ",
    "contact.fPhone": "ફોન",
    "contact.fMsg": "સંદેશ",
    "contact.fMsgPh": "તમને કયા પ્રીમિક્સ જોઈએ છે?",
    "contact.submit": "WhatsApp દ્વારા મોકલો",
    "contact.errRequired": "કૃપા કરી તમારું નામ અને ફોન નંબર ઉમેરો.",
    "contact.sending": "WhatsApp ખૂલી રહ્યું છે… થોડી વાર રાહ જુઓ 🙏",

    // Footer
    "footer.tag": "બંસરી પ્રીમિક્સો — ઘર જેવો સ્વાદ, પળમાં તૈયાર.",
    "footer.fssai": "FSSAI લાઇસન્સ નં:",
    "footer.explore": "એક્સપ્લોર",
    "footer.connect": "જોડાઓ",
    "footer.visit": "મુલાકાત",
    "footer.rights": "સર્વ હક્ક સુરક્ષિત. · ગુજરાતમાં ♥ થી બનાવેલ.",

    // Floating button
    "wa.float": "ઓર્ડર કરો"
  }
};

/* ---------- Engine ---------- */
const I18N_STORE_KEY = "bansari-lang";

function getLang() {
  return localStorage.getItem(I18N_STORE_KEY) || "en";
}

function t(key, lang = getLang()) {
  return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
}

function applyI18n(lang = getLang()) {
  document.documentElement.lang = lang;

  // Plain text nodes
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n, lang);
  });
  // Rich text (allows <br>, <strong>, <em>, <span>)
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml, lang);
  });
  // Attributes: "placeholder:key; aria-label:key2"
  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    el.dataset.i18nAttr.split(";").forEach(pair => {
      const [attr, key] = pair.split(":").map(s => s.trim());
      if (attr && key) el.setAttribute(attr, t(key, lang));
    });
  });

  // Let other scripts (products) know so they can re-render
  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

function setLang(lang) {
  localStorage.setItem(I18N_STORE_KEY, lang);
  applyI18n(lang);
}

function toggleLang() {
  setLang(getLang() === "en" ? "gu" : "en");
}
