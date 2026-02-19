import { Landform } from "./types";

export const landforms: Landform[] = [
  /* ───────────────────────────────────────────────
     1. THE HIMALAYAN MOUNTAINS
     ─────────────────────────────────────────────── */
  {
    slug: "himalayan-mountains",
    name: "The Himalayan Mountains",
    tagline: "The roof of the world — home to the planet's highest peaks",
    description:
      "Stretching over 2,400 km across the northern edge of India, the Himalayas are the youngest and highest mountain range on Earth. They act as a natural barrier, shielding the Indian subcontinent from cold Central Asian winds and influencing the monsoon pattern that sustains life across the region. From snow-capped summits to lush alpine meadows, the Himalayas harbour an extraordinary range of ecosystems.",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    ],
    sections: [
      {
        id: "geography",
        title: "Geography",
        content:
          "The Himalayas comprise three parallel ranges: the Greater Himalayas (Himadri), the Lesser Himalayas (Himachal), and the Outer Himalayas (Shivalik). The Greater Himalayas contain peaks above 6,000 m including Kanchenjunga (8,586 m), India's highest point. Major passes like Nathu La, Rohtang, and Khardung La connect valleys and regions. The range spans Jammu & Kashmir, Himachal Pradesh, Uttarakhand, Sikkim, and Arunachal Pradesh.",
      },
      {
        id: "climate",
        title: "Climate",
        content:
          "The Himalayas display extreme climatic variation depending on altitude. Lower foothills experience subtropical climate with monsoon rains, while the middle ranges have temperate conditions with cold winters and moderate summers. Above the tree line, alpine and arctic conditions prevail with permanent snow cover. Annual rainfall ranges from 1,000 mm in the west to over 4,000 mm in the eastern Himalayas.",
      },
      {
        id: "key-features",
        title: "Key Features",
        content:
          "The Himalayas are the source of major rivers — the Ganga, Yamuna, Brahmaputra, and their tributaries — which sustain over a billion people. The region contains the largest concentration of glaciers outside the polar regions, earning it the name 'Third Pole.' Notable features include the Valley of Flowers (a UNESCO World Heritage Site), Dal Lake in Kashmir, and the Zanskar Range. The Himalayas also hold deep spiritual significance, with sacred sites like Kedarnath, Badrinath, and Hemkund Sahib.",
      },
    ],
    facts: [
      { label: "Length", value: "~2,400 km" },
      { label: "Highest Peak (India)", value: "Kanchenjunga (8,586 m)" },
      {
        label: "States Covered",
        value: "J&K, HP, Uttarakhand, Sikkim, Arunachal Pradesh",
      },
      { label: "Major Rivers", value: "Ganga, Yamuna, Brahmaputra" },
      { label: "Climate Zones", value: "Subtropical to Arctic" },
    ],
    floraIds: ["rhododendron", "deodar-cedar", "blue-pine", "himalayan-orchid"],
    faunaIds: ["snow-leopard", "red-panda", "himalayan-monal", "markhor"],
  },

  /* ───────────────────────────────────────────────
     2. THE NORTHERN PLAINS
     ─────────────────────────────────────────────── */
  {
    slug: "northern-plains",
    name: "The Northern Plains",
    tagline: "India's fertile heartland — the breadbasket of the nation",
    description:
      "The Indo-Gangetic Plain is one of the largest and most fertile alluvial stretches on Earth, formed by the depositional work of the Indus, Ganga, and Brahmaputra river systems. Spanning from Punjab in the west to Assam in the east, these plains support one of the densest human populations and are the agricultural backbone of India.",
    imageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800",
    ],
    sections: [
      {
        id: "geography",
        title: "Geography",
        content:
          "The Northern Plains stretch approximately 2,400 km from east to west and 150–300 km from north to south. They are divided into four sub-regions: the Bhabar (pebble-rich strip near the Himalayas), the Terai (marshy belt), the Bhangar (older alluvial terraces), and the Khadar (new alluvial floodplains). The total area exceeds 700,000 sq km, covering parts of Punjab, Haryana, Uttar Pradesh, Bihar, West Bengal, and Assam.",
      },
      {
        id: "climate",
        title: "Climate",
        content:
          "The climate is predominantly tropical to subtropical with hot summers (up to 45°C), cool winters, and a distinct monsoon season. Annual rainfall varies from 250 mm in the west (Rajasthan border) to over 2,000 mm in the eastern plains. The region experiences extreme seasonal variation, with fog-laden winters and scorching summer heat.",
      },
      {
        id: "key-features",
        title: "Key Features",
        content:
          "The plains are India's most productive agricultural zone, producing wheat, rice, sugarcane, and pulses. The Ganga-Brahmaputra delta (Sundarbans) is the world's largest delta and home to the famous mangrove ecosystem. Major cities like Delhi, Lucknow, Patna, and Kolkata sit on these plains. The region also contains important wetlands like Keoladeo National Park and Haiderpur Wetland.",
      },
    ],
    facts: [
      { label: "Area", value: "~700,000 sq km" },
      { label: "Length", value: "~2,400 km (E–W)" },
      { label: "Major Rivers", value: "Ganga, Yamuna, Brahmaputra, Indus" },
      { label: "Soil Type", value: "Alluvial (Bhangar & Khadar)" },
      { label: "Key Crops", value: "Wheat, Rice, Sugarcane" },
    ],
    floraIds: ["banyan-tree", "peepal-tree", "mango-tree", "teak"],
    faunaIds: [
      "gangetic-dolphin",
      "indian-rhinoceros",
      "bengal-florican",
      "nilgai",
    ],
  },

  /* ───────────────────────────────────────────────
     3. THE PENINSULAR PLATEAU
     ─────────────────────────────────────────────── */
  {
    slug: "peninsular-plateau",
    name: "The Peninsular Plateau",
    tagline: "Ancient bedrock — one of the oldest landmasses on Earth",
    description:
      "The Peninsular Plateau, also known as the Deccan Plateau, is a vast triangular tableland that occupies most of southern India. Composed of ancient igneous and metamorphic rocks, it is one of the oldest and most stable landmasses on the planet, rich in mineral wealth and dotted with distinctive flat-topped hills, gorges, and river valleys.",
    imageUrl:
      "https://images.unsplash.com/photo-1590766940554-634f4e473065?w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
    ],
    sections: [
      {
        id: "geography",
        title: "Geography",
        content:
          "The Peninsular Plateau is broadly divided into the Central Highlands (north of the Narmada River) and the Deccan Plateau (south of the Narmada). It is flanked by the Western Ghats (Sahyadri) on the west and the Eastern Ghats on the east. The Western Ghats, a UNESCO biodiversity hotspot, rise steeply from the coast, while the Eastern Ghats are more fragmented. Major plateaus within include the Malwa Plateau, Chota Nagpur Plateau, and the Karnataka Plateau.",
      },
      {
        id: "climate",
        title: "Climate",
        content:
          "The plateau experiences a semi-arid to tropical climate. The western edge (Western Ghats) receives heavy rainfall (2,000–5,000 mm) creating lush forests, while the rain shadow region to the east is much drier (500–1,000 mm). Temperatures are moderate due to the elevation, with summers reaching 35°C and winters staying around 15–20°C.",
      },
      {
        id: "key-features",
        title: "Key Features",
        content:
          "The plateau is India's mineral treasury — rich in iron ore, manganese, coal, bauxite, and mica. The Western Ghats are one of the world's eight hottest biodiversity hotspots. Major rivers like Godavari, Krishna, and Kaveri flow eastward across the plateau, creating fertile deltas. The Deccan Traps — one of the largest volcanic formations — cover about 500,000 sq km of basaltic lava flows.",
      },
    ],
    facts: [
      { label: "Area", value: "~1.6 million sq km" },
      { label: "Highest Point", value: "Anamudi (2,695 m)" },
      { label: "Mountain Ranges", value: "Western Ghats, Eastern Ghats" },
      { label: "Major Rivers", value: "Godavari, Krishna, Kaveri, Narmada" },
      { label: "Minerals", value: "Iron ore, Coal, Manganese, Bauxite" },
    ],
    floraIds: ["sandalwood", "teak", "bamboo", "rosewood"],
    faunaIds: [
      "indian-elephant",
      "bengal-tiger",
      "nilgiri-tahr",
      "lion-tailed-macaque",
    ],
  },

  /* ───────────────────────────────────────────────
     4. THE THAR DESERT
     ─────────────────────────────────────────────── */
  {
    slug: "thar-desert",
    name: "The Thar Desert",
    tagline:
      "The Great Indian Desert — a landscape of sand, resilience, and vibrant culture",
    description:
      "The Thar Desert, also called the Great Indian Desert, is the world's most densely populated desert and the 17th largest globally. Spanning the western frontier of India, it is a land of golden sand dunes, rocky outcrops, and sparse but remarkably resilient life. Despite harsh conditions, the Thar supports a rich cultural heritage and surprising biodiversity.",
    imageUrl:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800",
      "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=800",
      "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800",
    ],
    sections: [
      {
        id: "geography",
        title: "Geography",
        content:
          "The Thar Desert covers approximately 200,000 sq km across western Rajasthan, southern Haryana, southern Punjab, and northern Gujarat. It is bounded by the Aravalli Range to the east, the Rann of Kutch to the south, and the Indus River plain to the west. The landscape features shifting sand dunes (some rising over 150 m), rocky terrain, salt lakes, and seasonal streams. The Luni River is the only significant river in the region.",
      },
      {
        id: "climate",
        title: "Climate",
        content:
          "The Thar is characterised by extreme temperatures — summers reach 50°C while winter nights can drop below 0°C. Annual rainfall is very low, averaging 100–500 mm, mostly during the brief monsoon season (July–September). Dust storms are common during summer months. Despite these extremes, the desert has distinct micro-habitats around oases, seasonal lakes, and rocky outcrops.",
      },
      {
        id: "key-features",
        title: "Key Features",
        content:
          "The Rann of Kutch — a vast salt marsh on the desert's southern edge — transforms into a shimmering white landscape in the dry season and a shallow wetland during the monsoon, attracting thousands of flamingos. The Desert National Park near Jaisalmer preserves fossils dating back 180 million years. Pushkar Lake, a sacred Brahma temple lake, and the forts of Jaisalmer and Jodhpur are cultural treasures embedded in this desert landscape.",
      },
    ],
    facts: [
      { label: "Area", value: "~200,000 sq km" },
      { label: "States", value: "Rajasthan, Gujarat, Haryana, Punjab" },
      { label: "Temperature Range", value: "-2°C to 50°C" },
      { label: "Annual Rainfall", value: "100–500 mm" },
      { label: "Only River", value: "Luni" },
    ],
    floraIds: ["khejri-tree", "babool", "cactus", "date-palm"],
    faunaIds: [
      "great-indian-bustard",
      "indian-wild-ass",
      "desert-fox",
      "chinkara",
    ],
  },

  /* ───────────────────────────────────────────────
     5. THE COASTAL PLAINS
     ─────────────────────────────────────────────── */
  {
    slug: "coastal-plains",
    name: "The Coastal Plains",
    tagline: "Where land meets sea — 7,500 km of diverse coastline",
    description:
      "India's coastal plains are narrow strips of flat, low-lying land stretching along the Arabian Sea (west) and the Bay of Bengal (east). They are vital for fisheries, trade, tourism, and unique ecosystems like mangroves, lagoons, and backwaters. The two coasts — Western (Konkan, Malabar) and Eastern (Coromandel, Northern Circars) — have distinct characters shaped by their geography and climate.",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800",
      "https://images.unsplash.com/photo-1484291150605-0860ed671425?w=800",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
    ],
    sections: [
      {
        id: "geography",
        title: "Geography",
        content:
          "The Western Coastal Plain runs 1,500 km from Gujarat to Kerala, narrowing to just 10–25 km between the Western Ghats and the sea. It includes the Konkan (Maharashtra–Goa), Kanara (Karnataka), and Malabar (Kerala) coasts. The Eastern Coastal Plain is wider (80–100 km), stretching 2,500 km from Tamil Nadu to West Bengal, including the Coromandel Coast and Northern Circars. Together they form over 7,500 km of coastline.",
      },
      {
        id: "climate",
        title: "Climate",
        content:
          "Coastal regions enjoy a tropical maritime climate with moderate temperatures year-round (24–32°C). The western coast receives heavy orographic rainfall (2,000–4,000 mm) during the southwest monsoon, while the eastern coast gets rain from the northeast monsoon (October–December). Cyclones frequently affect the eastern coast, especially Odisha and Andhra Pradesh.",
      },
      {
        id: "key-features",
        title: "Key Features",
        content:
          "The backwaters of Kerala — a network of 900 km of interconnected canals, rivers, and lagoons — are world-famous. The Sundarbans in the east is the largest mangrove forest on Earth and a UNESCO World Heritage Site. Key ports like Mumbai, Chennai, Visakhapatnam, and Kochi drive India's maritime trade. Chilika Lake (Odisha) is Asia's largest brackish water lagoon and a critical bird habitat.",
      },
    ],
    facts: [
      { label: "Total Coastline", value: "~7,500 km" },
      { label: "Western Coast Width", value: "10–25 km" },
      { label: "Eastern Coast Width", value: "80–100 km" },
      { label: "States/UTs", value: "9 states, 4 union territories" },
      { label: "Key Feature", value: "Kerala Backwaters, Sundarbans" },
    ],
    floraIds: ["coconut-palm", "mangrove", "casuarina", "palm-tree"],
    faunaIds: ["olive-ridley-turtle", "kingfisher", "mudskipper", "flamingo"],
  },

  /* ───────────────────────────────────────────────
     6. THE ISLANDS
     ─────────────────────────────────────────────── */
  {
    slug: "islands",
    name: "The Islands",
    tagline: "Tropical paradise — coral atolls and volcanic archipelagos",
    description:
      "India's island territories — the Andaman & Nicobar Islands in the Bay of Bengal and Lakshadweep in the Arabian Sea — are among the most ecologically pristine regions in the country. With coral reefs, tropical rainforests, and endemic species found nowhere else, these islands are biodiversity jewels and crucial for marine conservation.",
    imageUrl:
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800",
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800",
    ],
    sections: [
      {
        id: "geography",
        title: "Geography",
        content:
          "The Andaman & Nicobar Islands are a chain of 572 islands (only 37 inhabited) stretching 750 km in the Bay of Bengal. They are the exposed peaks of an underwater mountain range. Lakshadweep consists of 36 coral atolls and reef islands in the Arabian Sea, of which only 10 are inhabited. Together, the islands have 2,000+ km of coastline, numerous coral reefs, and volcanic formations (Barren Island has India's only active volcano).",
      },
      {
        id: "climate",
        title: "Climate",
        content:
          "The islands enjoy a tropical maritime climate with high humidity (80%+), moderate temperatures (23–31°C year-round), and heavy rainfall (over 3,000 mm annually). The Andamans receive rain from both the southwest and northeast monsoons, while Lakshadweep is influenced primarily by the southwest monsoon. Cyclonic disturbances can occur between October and December.",
      },
      {
        id: "key-features",
        title: "Key Features",
        content:
          "The Andaman & Nicobar Islands contain some of India's best-preserved tropical evergreen forests and are home to indigenous tribes (Great Andamanese, Jarawa, Sentinelese, Onge) who have lived in isolation for thousands of years. Lakshadweep has the richest coral reef systems in India. Both island groups are critical for marine biodiversity — housing sea turtles, dolphins, dugongs, and over 1,200 species of fish. Radhanagar Beach on Havelock Island has been rated among Asia's best beaches.",
      },
    ],
    facts: [
      { label: "Andaman & Nicobar", value: "572 islands (37 inhabited)" },
      { label: "Lakshadweep", value: "36 atolls (10 inhabited)" },
      { label: "Active Volcano", value: "Barren Island" },
      { label: "Climate", value: "Tropical maritime, 23–31°C" },
      { label: "Coral Reef Area", value: "~2,375 sq km" },
    ],
    floraIds: ["padauk-tree", "tropical-evergreen", "coconut-palm", "mangrove"],
    faunaIds: [
      "dugong",
      "saltwater-crocodile",
      "nicobar-pigeon",
      "leatherback-turtle",
    ],
  },
];

export function getLandformBySlug(slug: string): Landform | undefined {
  return landforms.find((l) => l.slug === slug);
}
