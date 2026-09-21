/* ============================================================
   Bansari Premixo — products.js
   ------------------------------------------------------------
   👉 THIS IS THE ONLY FILE YOU NEED TO EDIT TO ADD PRODUCTS.

   To add a new premix, copy one block { ... } below,
   paste it, and change the values. Keep the comma between blocks.

   Fields:
     name     : English product name
     guj      : Gujarati name (shown as the title in Gujarati mode)
     category : one of the CATEGORIES keys below (used by filters)
     desc     : one short appetising line (English)
     descGu   : (optional) the same line in Gujarati. If left "", the
                English line is shown even in Gujarati mode.
     price    : text shown on the card (e.g. "₹80" or "From ₹80")
     emoji    : quick placeholder icon shown until you add a real photo
     image    : (optional) path to a real photo, e.g. "assets/dhokla.jpg"
                — if set, it replaces the emoji placeholder automatically.
     tag      : (optional) small badge, e.g. "Bestseller" or "New"
     hidden   : (optional) set to true to temporarily hide a product
                from the website without deleting it.
   ============================================================ */

// Category filter labels (English + Gujarati). Add new categories here if needed.
const CATEGORIES = {
  all:       "All / બધા",
  snacks:    "Snacks / નાસ્તા",
  breakfast: "Breakfast / સવારનો નાસ્તો",
  sweets:    "Sweets / મીઠાઈ",
  other:     "Other / અન્ય"
};

const PRODUCTS = [
  {
    name: "Dhokla Mix",
    guj: "ઢોકળા મિક્સ",
    category: "snacks",
    desc: "Soft, spongy, steamed khaman-dhokla in minutes.",
    descGu: "નરમ, પોચા, બાફેલા ખમણ-ઢોકળા મિનિટોમાં.",
    price: "₹80",
    emoji: "🟡",
    image: "assets/dhokla.jpg",            // e.g. "assets/dhokla.jpg"
    tag: "Bestseller"
  },
  {
    name: "Khaman Mix",
    guj: "ખમણ મિક્સ",
    category: "snacks",
    desc: "Fluffy, melt-in-mouth khaman with the perfect tang.",
    descGu: "હલકા, મોંમાં ઓગળી જતા ખમણ સાથે પરફેક્ટ ખટાશ.",
    price: "₹80",
    emoji: "🟨",
    image: "assets/khaman.jpg",
    tag: "",
    hidden: true      // set to false (or remove this line) to show it again
  },
  {
    name: "Handvo Mix",
    guj: "હાંડવો મિક્સ",
    category: "snacks",
    desc: "Savoury baked lentil cake with a crisp golden crust.",
    descGu: "કરકરી સોનેરી પરત સાથે સ્વાદિષ્ટ બેક કરેલ હાંડવો.",
    price: "₹90",
    emoji: "🟧",
    image: "assets/handvo.jpg",
    tag: ""
  },
  {
    name: "Muthiya Mix",
    guj: "મુઠિયા મિક્સ",
    category: "snacks",
    desc: "Steamed or fried spiced dumplings — a Gujarati classic.",
    descGu: "બાફેલા કે તળેલા મસાલેદાર મુઠિયા — ગુજરાતી ક્લાસિક.",
    price: "₹85",
    emoji: "🟤",
    image: "assets/muthiya.jpg",
    tag: ""
  },
  {
    name: "Idli–Dosa Mix",
    guj: "ઈડલી–ઢોસા મિક્સ",
    category: "breakfast",
    desc: "No grinding, no waiting — soft idlis & crispy dosas.",
    descGu: "ન દળવાનું, ન રાહ — નરમ ઈડલી ને કરકરા ઢોસા.",
    price: "₹95",
    emoji: "⚪",
    image: "assets/idlidosa.jpg",
    tag: "New",
    hidden: true      // set to false (or remove this line) to show it again
  },
  {
    name: "Upma Mix",
    guj: "ઉપમા મિક્સ",
    category: "breakfast",
    desc: "Warm, savoury semolina upma ready in one pan.",
    descGu: "એક તપેલીમાં તૈયાર ગરમ, સ્વાદિષ્ટ રવાનો ઉપમા.",
    price: "₹70",
    emoji: "🟠",
    image: "assets/upma.jpg",
    tag: ""
  },
  {
    name: "Gulab Jamun Mix",
    guj: "ગુલાબ જાંબુ મિક્સ",
    category: "sweets",
    desc: "Soft, syrup-soaked gulab jamuns for every celebration.",
    descGu: "દરેક ઉજવણી માટે નરમ, ચાસણીમાં ડૂબેલા ગુલાબ જાંબુ.",
    price: "₹110",
    emoji: "🟫",
    image: "assets/gulabjamun.jpg",
    tag: "Bestseller"
  },
  {
    name: "Basundi Mix",
    guj: "બાસુંદી મિક્સ",
    category: "sweets",
    desc: "Rich, creamy, cardamom-kissed festive dessert.",
    descGu: "ઘટ્ટ, ક્રીમી, એલચીની સુગંધવાળી તહેવારની મીઠાઈ.",
    price: "₹120",
    emoji: "🥛",
    image: "assets/basundi.jpg",
    tag: "",
    hidden: true      // set to false (or remove this line) to show it again
  }
  // 👇 Add your next product below this line (start with a comma above).
];
