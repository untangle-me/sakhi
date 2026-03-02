/* ══════════════════════════════════════════════
   SAKHI COLLECTIVE — Product Data
   All images sourced from Unsplash (free to use)
   ══════════════════════════════════════════════ */

const PRODUCTS = [
  {
    id: 1,
    name: "Kundan Bridal Bangle Set",
    cat: "Bangles",
    occ: "Wedding",
    badge: "Bridal",
    img: "{css,js,images}/KundanBridalBangleSet2.jpg?w=300&q=85&fit=crop",
    imgs: [
      "{css,js,images}/KundanBridalBangleSet1.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/festival2.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/bangles3.jpg?w=300&q=85&fit=crop"
    ],
    desc: "Exquisite gold-plated kundan bangles with intricate stone setting, handcrafted by master artisans. These bridal-grade bangles are a celebration of traditional Indian craftsmanship, perfect for weddings and grand ceremonies.",
    inc: ["Set of 4 Bangles", "Velvet Gift Box", "Certificate of Authenticity"],
    rating: 4.9, rev: 124
  },
  {
    id: 2,
    name: "Jhumka Drop Earrings",
    cat: "Earrings",
    occ: "Festival",
    badge: "Trending",
    img: "{css,js,images}/JhumkaDropEarrings1.jpg?w=300&q=85&fit=crop",
    imgs: [
      "{css,js,images}/college1.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/JhumkaAndChoker.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/TempleGoldEarRings.jpg?w=300&q=85&fit=crop"
    ],
    desc: "Statement gold jhumka earrings with layered pearl drops and meenakari detailing. These effortlessly elevate festive looks — perfect with sarees, lehengas, and salwar suits at Diwali, Eid, or Navratri.",
    inc: ["Pair of Earrings", "Jewelry Pouch"],
    rating: 4.7, rev: 89
  },
  {
    id: 3,
    name: "Gold Layered Chain Set",
    cat: "Jewelry",
    occ: "Wedding",
    badge: "Bestseller",
    img: "{css,js,images}/casual3.jpg?w=300&q=85&fit=crop",
    imgs: [
      "{css,js,images}/GoldLayeredChainSet2.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/party2.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/casual2.jpg?w=300&q=85&fit=crop"
    ],
    desc: "A three-layered gold-finish chain necklace featuring pearl and crystal accents. Timeless bridal elegance that pairs beautifully with any lehenga, saree, or anarkali for your most special moments.",
    inc: ["3-Layer Necklace", "Matching Earrings", "Gift Box"],
    rating: 4.8, rev: 203
  },
  {
    id: 4,
    name: "Pearl Floral Hair Pins",
    cat: "Hair Accessories",
    occ: "Wedding",
    badge: "New",
    img: "{css,js,images}/PearlFloralHairPins1.jpg?w=300&q=85&fit=crop",
    imgs: [
      "{css,js,images}/PearlFloralHairPins1.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/clips.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/PearlStoneCuffBracelet1.jpg?w=300&q=85&fit=crop"
    ],
    desc: "Vintage-inspired floral hair pins crafted with freshwater pearls and antique gold finish. Perfect for bridal bun styling, sangeet nights, and reception looks that demand effortless elegance.",
    inc: ["Set of 5 Hair Pins", "Organza Pouch"],
    rating: 4.5, rev: 67
  },
  {
    id: 5,
    name: "Bridal Gold Anklets",
    cat: "Anklets",
    occ: "Wedding",
    badge: "Bridal",
    img: "{css,js,images}/BridalGoldAnklets.jpg?w=300&q=85&fit=crop",
    imgs: [
      "{css,js,images}/BridalGoldAnklets.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/DelicatePearlAnklets.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/wedding2.jpg?w=300&q=85&fit=crop"
    ],
    desc: "Intricately carved gold-plated anklets featuring kundan inlay and delicate ghungroo bells. The perfect finishing touch to any bridal look — designed to last and loved for generations.",
    inc: ["Pair of Anklets", "Gift Box"],
    rating: 4.9, rev: 178
  },
  {
    id: 6,
    name: "CZ Cocktail Statement Ring",
    cat: "Rings",
    occ: "Party",
    badge: "Glamour",
    img: "{css,js,images}/CZCocktailStatementRing.jpg?w=300&q=85&fit=crop",
    imgs: [
      "{css,js,images}/CZCocktailStatementRing.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/wedding2.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/CasualBohoStackRings.jpg?w=300&q=85&fit=crop"
    ],
    desc: "A bold cocktail ring featuring a stunning CZ centre stone surrounded by pavé detailing. South Indian temple-inspired design reimagined for modern evenings — makes every outfit feel luxurious and party-ready.",
    inc: ["Single Ring", "Jewelry Box"],
    rating: 4.6, rev: 145
  },
  {
    id: 7,
    name: "Velvet Bow Hair Band",
    cat: "Hair Accessories",
    occ: "College",
    badge: null,
    img: "{css,js,images}/VelvetBowedHairBand1.jpg?w=300&q=85&fit=crop",
    imgs: [
      "{css,js,images}/VelvetBowedHairBand1.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/VelvetBowedHairBand2.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/hair-clip.jpg?w=300&q=85&fit=crop"
    ],
    desc: "Luxuriously padded silk velvet bow headband with a fashion-forward silhouette. Effortlessly pairs with casual kurtas, western co-ords, or indo-western looks for college, brunch, and everyday elegance.",
    inc: ["1 Hair Band"],
    rating: 4.3, rev: 201
  },
  {
    id: 8,
    name: "Pearl Stone Cuff Bracelet",
    cat: "Bracelets",
    occ: "Party",
    badge: "Statement",
    img: "{css,js,images}/PearlStoneCuffBracelet1.jpg?w=300&q=85&fit=crop",
    imgs: [
      "{css,js,images}/PearlStoneCuffBracelet1.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/CasualBohoStackRings.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/DelicatePearlAnklets.jpg?w=300&q=85&fit=crop"
    ],
    desc: "An antique gold cuff bracelet set with freshwater pearls and iridescent stone clusters. A bold wrist statement that elevates everything from festive kurtas to party gowns.",
    inc: ["1 Cuff Bracelet", "Velvet Pouch"],
    rating: 4.7, rev: 112
  },
  {
    id: 9,
    name: "Sabyasachi-Style Bridal Set",
    cat: "Matching Sets",
    occ: "Wedding",
    badge: "Exclusive",
    img: "{css,js,images}/SabyasachiStyleBridalSet.jpg?w=300&q=85&fit=crop",
    imgs: [
      "{css,js,images}/SabyasachiStyleBridalSet.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/PartyGlamChokerSet.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/CasualBohoStackRings.jpg?w=300&q=85&fit=crop"
    ],
    desc: "An opulent hand-finished bridal set featuring a choker, long necklace, maang tikka, and matching jhumka earrings — inspired by heirloom Indian jewelry. For brides who want to command every room they walk into.",
    inc: ["Choker Necklace", "Long Necklace", "Maang Tikka", "Jhumka Earrings", "Luxury Gift Box"],
    rating: 5.0, rev: 38
  },
  {
    id: 10,
    name: "Oxidized Ethnic Set",
    cat: "Matching Sets",
    occ: "Festival",
    badge: "Popular",
    img: "{css,js,images}/OxidizedEthnicSet.jpg?w=300&q=85&fit=crop",
    imgs: [
      "{css,js,images}/OxidizedEthnicSet.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/wedding2.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/CZCocktailStatementRing.jpg?w=300&q=85&fit=crop"
    ],
    desc: "A bold oxidized silver set featuring ethnic peacock motifs with turquoise and coral inlay. Expressive and powerful — perfect for Navratri, Diwali, Onam, or any occasion where you want to make a statement.",
    inc: ["Necklace", "Earrings", "Adjustable Ring"],
    rating: 4.6, rev: 156
  },
  {
    id: 11,
    name: "Temple Gold Earrings",
    cat: "Earrings",
    occ: "Festival",
    badge: null,
    img: "{css,js,images}/TempleGoldEarRings.jpg?w=300&q=85&fit=crop",
    imgs: [
      "{css,js,images}/TempleGoldEarRings.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/wedding2.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/party2.jpg?w=300&q=85&fit=crop"
    ],
    desc: "South Indian temple-inspired gold earrings featuring a Lakshmi motif with ruby-red stone detailing and pearl drops. Timeless heirloom design reimagined for modern celebrations — wear for weddings, festivals, or pooja.",
    inc: ["Pair of Earrings", "Jewelry Pouch"],
    rating: 4.8, rev: 93
  },
  {
    id: 12,
    name: "Navratri Silk Bangle Set",
    cat: "Bangles",
    occ: "Festival",
    badge: "Limited",
    img: "{css,js,images}/NavrathriSilkBangleSet.jpg?w=300&q=85&fit=crop",
    imgs: [
      "{css,js,images}/NavrathriSilkBangleSet.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/bangles6.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/bangles4.jpg?w=300&q=85&fit=crop"
    ],
    desc: "Nine vibrant silk thread bangles — one for each Navratri colour — intricately handmade with bead and mirror embellishments. A must-have for Garba, Dandiya nights, and the full nine days of festivity.",
    inc: ["9 Pairs of Bangles", "Organizer Box", "Color Chart"],
    rating: 4.8, rev: 234
  },
  {
    id: 13,
    name: "Minimalist Office Stud Set",
    cat: "Earrings",
    occ: "Office",
    badge: null,
    img: "{css,js,images}/MinimalistOfficeStudSet.jpg?w=300&q=85&fit=crop",
    imgs: [
      "{css,js,images}/MinimalistOfficeStudSet.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/college1.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/college4.jpg?w=300&q=85&fit=crop"
    ],
    desc: "Understated pearl and gold stud earrings designed for the modern working woman. Lightweight, sophisticated, and versatile — transitions seamlessly from morning meetings to evening dinners.",
    inc: ["Pair of Studs", "Stud Backs", "Mini Box"],
    rating: 4.5, rev: 88
  },
  {
    id: 14,
    name: "Casual Boho Stack Rings",
    cat: "Rings",
    occ: "Casual",
    badge: null,
    img: "{css,js,images}/CasualBohoStackRings.jpg?w=300&q=85&fit=crop",
    imgs: [
      "{css,js,images}/CasualBohoStackRings.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/CZCocktailStatementRing.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/wedding2.jpg?w=300&q=85&fit=crop"
    ],
    desc: "A set of five stackable rings in oxidized gold and silver tones — mix, match, and layer for your unique boho or fusion look. Perfect for college, cafe dates, and everyday casual wear.",
    inc: ["Set of 5 Rings", "Ring Organizer"],
    rating: 4.4, rev: 167
  },
  {
    id: 15,
    name: "Party Glam Choker Set",
    cat: "Matching Sets",
    occ: "Party",
    badge: "Trending",
    img: "{css,js,images}/PartyGlamChokerSet.jpg?w=300&q=85&fit=crop",
    imgs: [
      "{css,js,images}/PartyGlamChokerSet.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/wedding2.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/DelicatePearlAnklets.jpg?w=300&q=85&fit=crop"
    ],
    desc: "A show-stopping party set featuring a crystal-studded choker, drop earrings, and an adjustable bracelet. Designed for the woman who arrives at every party and makes everyone turn to look.",
    inc: ["Crystal Choker", "Drop Earrings", "Bracelet"],
    rating: 4.7, rev: 119
  },
  {
    id: 16,
    name: "Delicate Pearl Anklets",
    cat: "Anklets",
    occ: "Casual",
    badge: null,
    img: "{css,js,images}/DelicatePearlAnklets.jpg?w=300&q=85&fit=crop",
    imgs: [
      "{css,js,images}/DelicatePearlAnklets.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/BridalGoldAnklets.jpg?w=300&q=85&fit=crop",
      "{css,js,images}/CasualBohoStackRings.jpg?w=300&q=85&fit=crop"
    ],
    desc: "Delicate gold-finish anklets featuring tiny pearl clusters and adjustable chain length. Light enough for daily wear, pretty enough to be noticed — the kind of anklet you'll forget you're wearing until someone compliments it.",
    inc: ["Pair of Anklets", "Pouch"],
    rating: 4.5, rev: 143
  }
];

// Category data for the masonry grid
const CATEGORIES = [
  { name: "Bangles",          img: "{css,js,images}/festival1.jpg?w=300&q=80&fit=crop", count: "24 pieces" },
  { name: "Earrings",         img: "{css,js,images}/party2.jpg?w=300&q=80&fit=crop", count: "38 pieces" },
  { name: "Jewelry",          img: "{css,js,images}/PartyGlamChokerSet.jpg?w=300&q=80&fit=crop", count: "19 pieces" },
  { name: "Hair Accessories", img: "{css,js,images}/hair-clip.jpg?w=300&q=80&fit=crop", count: "22 pieces" },
  { name: "Anklets",          img: "{css,js,images}/BridalGoldAnklets.jpg?w=300&q=80&fit=crop", count: "15 pieces" },
  { name: "Rings",            img: "{css,js,images}/CZCocktailStatementRing.jpg?w=300&q=80&fit=crop", count: "28 pieces" },
  { name: "Bracelets",        img: "{css,js,images}/PearlStoneCuffBracelet1.jpg?w=300&q=80&fit=crop", count: "16 pieces" },
  { name: "Matching Sets",    img: "{css,js,images}/SabyasachiStyleBridalSet.jpg?w=300&q=80&fit=crop", count: "12 sets" }
];

// Instagram grid images (lifestyle / product shots)
const INSTA_IMGS = [
  { src: "{css,js,images}/SabyasachiStyleBridalSet.jpg?w=500&q=80&fit=crop", alt: "Bridal jewelry" },
  { src: "{css,js,images}/festival1.jpg?w=500&q=80&fit=crop", alt: "Bangles" },
  { src: "{css,js,images}/PartyGlamChokerSet.jpg?w=500&q=80&fit=crop", alt: "Necklace" },
  { src: "{css,js,images}/party2.jpg?w=500&q=80&fit=crop", alt: "Earrings" },
  { src: "{css,js,images}/BridalGoldAnklets.jpg?w=500&q=80&fit=crop", alt: "Anklets" },
  { src: "{css,js,images}/PearlStoneCuffBracelet1.jpg?w=500&q=80&fit=crop", alt: "Bracelets" }
];
