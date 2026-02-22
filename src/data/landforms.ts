import { Landform } from "./types";

export const landforms: Landform[] = [
  {
    slug: "himalayan-mountains",
    name: "The Himalayan Mountains",
    tagline:
      "The roof of the world — home to the planet's highest peaks and sacred rivers",
    summary:
      "Stretching over 2,400 km across the northern edge of India, the Himalayas are the youngest and highest mountain range on Earth. They rise by about 1 cm per year and shape monsoons, rivers, and biodiversity across the subcontinent.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800",
      "https://images.unsplash.com/photo-1580141392591-82e451d95bdc?w=800",
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800",
    ],
    stats: [
      { label: "Length", value: "~2,400 km" },
      { label: "Highest Peak", value: "Kanchenjunga (8,586 m)" },
      { label: "Glaciers", value: "~15,000" },
      { label: "Climate Zones", value: "Subtropical to Arctic" },
      {
        label: "Major Rivers",
        value: "Ganga, Yamuna, Brahmaputra, Indus",
      },
      { label: "Tectonic Rise", value: "~1 cm per year" },
    ],
    highlights: [
      {
        title: "Third Pole",
        description:
          "Largest concentration of ice outside the polar regions, feeding Asia's rivers.",
        accent: "#8b5cf6",
      },
      {
        title: "Vertical Worlds",
        description:
          "Rapid elevation shifts create distinct climate and habitat bands.",
        accent: "#a78bfa",
      },
      {
        title: "Sacred Landscapes",
        description:
          "Pilgrimage routes, monasteries, and UNESCO heritage sites.",
        accent: "#c4b5fd",
      },
    ],
    story: [
      {
        id: "geography",
        title: "Geography & Geology",
        content:
          "The Himalayas comprise three parallel ranges running northwest to southeast. The Greater Himalayas (Himadri) form the innermost and highest range, with an average elevation of 6,000 m — containing peaks like Kanchenjunga (8,586 m, India's highest), Nanda Devi (7,816 m), and Kamet (7,756 m). The Lesser Himalayas (Himachal) lie south, averaging 3,700–4,500 m, featuring popular hill stations like Shimla, Mussoorie, and Darjeeling. The Outer Himalayas (Shivalik) are the youngest and lowest range (600–1,500 m), composed of unconsolidated sediments. Between these ranges lie fertile valleys — the Kashmir Valley, Kangra Valley, and Kathmandu Valley. Major passes like Nathu La (4,310 m), Rohtang (3,978 m), Khardung La (5,359 m, one of the world's highest motorable passes), and Zoji La connect regions. The range spans Jammu & Kashmir, Ladakh, Himachal Pradesh, Uttarakhand, Sikkim, and Arunachal Pradesh.",
        imageUrl:
          "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800",
      },
      {
        id: "climate",
        title: "Climate & Weather",
        content:
          "The Himalayas display extreme climatic variation compressed into vertical zones. The foothills (up to 1,000 m) experience subtropical heat with monsoon rains, temperatures reaching 30–40C in summer. Between 1,000–3,000 m, the climate turns temperate with cool summers (15–25C) and cold winters that bring snowfall. The alpine zone (3,000–5,000 m) has harsh conditions — temperatures drop to -20C in winter, with 6–8 months of snow cover. Above 5,000 m lies the perpetual snow zone with arctic conditions and glaciers. Annual rainfall varies dramatically: the eastern Himalayas receive over 11,000 mm, while the rain-shadow regions of Ladakh and Spiti get barely 100 mm. The southwest monsoon (June–September) brings 70–80% of annual rainfall to the southern slopes.",
        imageUrl:
          "https://images.unsplash.com/photo-1580141392591-82e451d95bdc?w=800",
      },
      {
        id: "rivers-glaciers",
        title: "Rivers & Glaciers",
        content:
          "The Himalayas are the source of Asia's mightiest river systems, sustaining over 1.5 billion people downstream. The Ganga originates from the Gangotri Glacier at 3,892 m, while the Yamuna starts at the Yamunotri Glacier. The Brahmaputra begins in Tibet as the Tsangpo, enters India through Arunachal Pradesh, and forms the world's largest river island — Majuli — in Assam. The Indus, one of the world's longest rivers at 3,180 km, flows through Ladakh before entering Pakistan. The region contains approximately 15,000 glaciers, holding the largest concentration of ice outside the polar regions. The Siachen Glacier (76 km) is the world's second-longest non-polar glacier. These glaciers are critical freshwater reserves, but climate change is causing them to retreat at alarming rates — studies show 40% mass loss over recent decades.",
        imageUrl:
          "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800",
      },
      {
        id: "culture",
        title: "Culture & Heritage",
        content:
          'The Himalayas hold immense spiritual significance across Hinduism, Buddhism, Jainism, and Sikhism. Sacred sites include Kedarnath and Badrinath (part of the Char Dham pilgrimage), Amarnath Cave, Hemkund Sahib, and numerous Buddhist monasteries across Ladakh, Spiti, and Sikkim — including Hemis, Key, and Rumtek. The region is home to diverse ethnic communities: Ladakhis, Garhwalis, Kumaonis, Lepchas, Bhutias, and Monpas, each with distinct languages, festivals, and traditions. The Valley of Flowers in Uttarakhand, a UNESCO World Heritage Site, was described in 1931 as "the most beautiful valley in the world." Nanda Devi Biosphere Reserve and Khangchendzonga National Park are also UNESCO sites.',
      },
      {
        id: "conservation",
        title: "Conservation Challenges",
        content:
          "The Himalayas face critical environmental threats. Climate change is causing glacial retreat, shifting vegetation zones upward, and altering river flow patterns — threatening water security for billions. Deforestation for timber, agriculture, and urbanisation has degraded about 30% of Himalayan forests since the 1970s. Hydropower projects fragment river ecosystems and trigger landslides in seismically active zones — the 2013 Uttarakhand floods and 2021 Chamoli disaster highlighted these risks. Tourism creates waste and infrastructure pressure. Protected areas include Jim Corbett National Park, Great Himalayan National Park, and Nanda Devi National Park.",
      },
    ],
    ecology: {
      id: "vegetation",
      title: "Vegetation & Forests",
      content:
        "The Himalayas display a spectacular vertical stratification of vegetation. The tropical and subtropical belt (up to 1,500 m) features sal, teak, and dense bamboo. Between 1,500–3,000 m, temperate broadleaf and coniferous forests flourish — oak, deodar cedar, blue pine, spruce, and fir create dense canopies. Rhododendron forests paint whole mountainsides during spring. Above the tree line (3,500–4,500 m), alpine meadows called bugyals burst with wildflowers. The eastern Himalayas are particularly rich in orchids, with over 900 species recorded. Higher still, sparse scrub, lichens, and mosses cling to rocks before giving way to permanent snowfields.",
      imageUrl:
        "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800",
    },
    agriculture: {
      id: "agriculture",
      title: "Agriculture & Livelihoods",
      content:
        "Himalayan agriculture is a masterclass in adapting to extreme terrain. Terraced farming is the defining practice, with rice paddies ascending to 2,000 m in the eastern Himalayas and wheat and barley dominant in the west. Key crops vary by altitude: rice, maize, and millets in the lower zones; wheat, barley, and potatoes in the middle; and buckwheat and amaranth at higher elevations. The region is India's horticulture powerhouse — Himachal Pradesh and Kashmir produce over 75% of India's apple crop. Darjeeling tea and Kangra tea are globally renowned. At higher altitudes, yak herding provides dairy, wool, and transport.",
      imageUrl:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
    },
    regionGroupId: "himalayan-mountains",
    floraIds: ["rhododendron", "deodar-cedar", "blue-pine", "himalayan-orchid"],
    faunaIds: ["snow-leopard", "red-panda", "himalayan-monal", "markhor"],
  },
  {
    slug: "northern-plains",
    name: "The Northern Plains",
    tagline:
      "India's fertile heartland — the breadbasket of 1.4 billion people",
    summary:
      "The Indo-Gangetic Plain is one of the largest and most fertile alluvial stretches on Earth, formed by the Indus, Ganga, and Brahmaputra systems. These plains support one of the densest human populations and produce the majority of India's food grains.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800",
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800",
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
    ],
    stats: [
      { label: "Area", value: "~700,000 sq km" },
      { label: "Length", value: "~2,400 km" },
      { label: "Population", value: "500+ million" },
      { label: "Soil Depth", value: "Up to 2,000 m" },
      { label: "Major Rivers", value: "Ganga, Yamuna, Brahmaputra, Indus" },
      { label: "Key Crops", value: "Wheat, rice, sugarcane, jute" },
    ],
    highlights: [
      {
        title: "Alluvial Engine",
        description:
          "Deep, renewable soils deliver multiple harvests each year.",
        accent: "#10b981",
      },
      {
        title: "River Networks",
        description:
          "Three major river systems sustain dense settlements and cities.",
        accent: "#34d399",
      },
      {
        title: "Cultural Cradle",
        description:
          "Historic capitals, pilgrimage corridors, and trade routes.",
        accent: "#6ee7b7",
      },
    ],
    story: [
      {
        id: "geography",
        title: "Geography & Soil",
        content:
          "The Northern Plains stretch approximately 2,400 km from the Sutlej-Indus system in the west to the Brahmaputra in the east, covering over 700,000 sq km across Punjab, Haryana, Delhi, Uttar Pradesh, Bihar, West Bengal, and Assam. The terrain is remarkably flat — gradient as low as 1 m per 5 km in places — making it ideal for agriculture and irrigation. The plains are divided into four distinct sub-regions based on soil age and composition: the Bhabar, Terai, Bhangar, and Khadar. The Ganga-Brahmaputra delta in the east — the Sundarbans — is the world's largest delta, covering 40,000 sq km.",
        imageUrl:
          "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800",
      },
      {
        id: "climate",
        title: "Climate & Seasons",
        content:
          "The Northern Plains experience a continental tropical to subtropical climate with extreme seasonal variation — four distinct seasons shape life and agriculture. Summers (March–June) are scorching, with temperatures reaching 45–48C in Rajasthan border areas and the Loo sweeping across the western plains. The monsoon (July–September) brings 75–90% of annual rainfall — ranging from 250 mm in the arid west to over 2,500 mm in the eastern plains. Winters are cold, with dense fog blanketing the plains for weeks.",
        imageUrl:
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
      },
      {
        id: "rivers",
        title: "River Systems",
        content:
          "Three of Asia's mightiest river systems define the Northern Plains. The Ganga system flows 2,525 km to the Bay of Bengal. The Brahmaputra flows 2,900 km through Tibet, Arunachal Pradesh, and Assam before joining the Ganga in Bangladesh. The Indus system, flowing through Punjab, was the cradle of the Indus Valley Civilisation. These rivers create vast floodplains that deposit nutrient-rich silt and renew agricultural fertility.",
      },
      {
        id: "culture",
        title: "Culture & History",
        content:
          "The Northern Plains are the cradle of Indian civilisation. The Indus Valley Civilisation flourished here. Varanasi is one of the world's oldest continuously inhabited cities. The plains witnessed the rise of Buddhism and Jainism, and the Mughal Empire left architectural marvels like the Taj Mahal and Red Fort. The region's cultural diversity includes Hindi, Urdu, Punjabi, Bengali, Assamese, Maithili, and Bhojpuri speakers.",
      },
    ],
    ecology: {
      id: "vegetation",
      title: "Vegetation & Forests",
      content:
        "Centuries of intensive cultivation have transformed the Northern Plains from dense tropical deciduous forests into India's most heavily agrarian landscape — less than 5% of the original forest cover remains. The Terai belt retains moist deciduous forest and tall grassland ecosystems — Dudhwa National Park and Kaziranga still feature grasslands critical habitat for the Indian rhinoceros and Bengal tiger. The Sundarbans in the east is the world's largest mangrove forest in India. Riverine forests along the Ganga feature khair, shisham, and arjun.",
      imageUrl:
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800",
    },
    agriculture: {
      id: "agriculture",
      title: "Agriculture & Food Production",
      content:
        "The Northern Plains are India's agricultural powerhouse — producing over 60% of India's food grains. Wheat dominates the rabi season, while rice is the primary kharif crop. Uttar Pradesh is the world's largest sugarcane-producing region; Bihar leads in litchi production. The Green Revolution transformed Indian agriculture here, introducing high-yield varieties, fertilizers, and canal irrigation.",
      imageUrl:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800",
    },
    regionGroupId: "northern-plains",
    floraIds: ["banyan-tree", "peepal-tree", "mango-tree", "teak"],
    faunaIds: [
      "gangetic-dolphin",
      "indian-rhinoceros",
      "bengal-florican",
      "nilgai",
    ],
  },
  {
    slug: "peninsular-plateau",
    name: "The Peninsular Plateau",
    tagline:
      "Ancient bedrock — one of the oldest and most mineral-rich landmasses on Earth",
    summary:
      "The Peninsular Plateau (Deccan Plateau) is a vast triangular tableland of Precambrian rocks. It is geologically stable, mineral rich, and home to dramatic escarpments, waterfalls, and biodiversity hotspots.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1590766940554-634f4e473065?w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1518173946687-a1e33bbc4a5e?w=800",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    ],
    stats: [
      { label: "Area", value: "~1.6 million sq km" },
      { label: "Rock Age", value: "Up to 3.6 billion years" },
      { label: "Highest Point", value: "Anamudi (2,695 m)" },
      { label: "Deccan Traps", value: "~500,000 sq km" },
      { label: "Major Rivers", value: "Godavari, Krishna, Kaveri, Narmada" },
      { label: "Key Minerals", value: "Iron ore, coal, manganese, mica" },
    ],
    highlights: [
      {
        title: "Ancient Shield",
        description: "Some of the oldest rocks on Earth underpin the plateau.",
        accent: "#f97316",
      },
      {
        title: "Mineral Heartland",
        description: "Coal, iron ore, and bauxite deposits fuel industry.",
        accent: "#fb923c",
      },
      {
        title: "Western Ghats",
        description:
          "A biodiversity hotspot with dramatic rain-shadow effects.",
        accent: "#fdba74",
      },
    ],
    story: [
      {
        id: "geography",
        title: "Geography & Geology",
        content:
          "The Peninsular Plateau is broadly divided into the Central Highlands (north of the Narmada River, including the Malwa Plateau, Bundelkhand, and Chota Nagpur Plateau) and the Deccan Plateau (south of the Narmada). It is flanked by two major mountain ranges: the Western Ghats and the Eastern Ghats. The plateau tilts gently from west to east — which is why most peninsula rivers flow eastward into the Bay of Bengal. Anamudi in the Western Ghats is the highest point south of the Himalayas. The Chota Nagpur Plateau is India's mineral heartland.",
        imageUrl:
          "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800",
      },
      {
        id: "climate",
        title: "Climate & Rainfall",
        content:
          "The plateau's climate is shaped by its elevation, proximity to coasts, and the rain-shadow effect of the Western Ghats. The windward slopes receive heavy orographic rainfall — 2,000–5,000 mm annually — creating lush tropical forests. The leeward side and interior Deccan are much drier, receiving 500–1,000 mm. Temperatures are moderated by elevation.",
        imageUrl:
          "https://images.unsplash.com/photo-1518173946687-a1e33bbc4a5e?w=800",
      },
      {
        id: "rivers-waterfalls",
        title: "Rivers & Waterfalls",
        content:
          "The Peninsular Plateau is drained by rivers such as the Godavari, Krishna, and Kaveri. The Narmada and Tapi flow westward through rift valleys. The plateau's rivers create spectacular waterfalls including Jog Falls, Dudhsagar Falls, and Athirappilly Falls. Most peninsular rivers are monsoon-fed and seasonal.",
      },
      {
        id: "minerals",
        title: "Mineral Wealth",
        content:
          "The ancient Precambrian rocks of the Peninsular Plateau make it India's mineral storehouse. The Chota Nagpur Plateau contains over 25% of India's coal reserves. Odisha holds 95% of India's chromite reserves and 70% of iron ore. The plateau yields manganese, mica, limestone, and diamonds.",
      },
    ],
    ecology: {
      id: "vegetation",
      title: "Vegetation & Forests",
      content:
        "The Peninsular Plateau hosts India's richest forest types. The Western Ghats support tropical evergreen forests with towering trees and dense understory. The rain-shadow side features moist and dry deciduous forests dominated by teak, sal, sandalwood, rosewood, and bamboo. The Deccan interior supports thorny scrubland, while the Nilgiri Hills feature the unique shola-grassland ecosystem.",
      imageUrl:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
    },
    agriculture: {
      id: "agriculture",
      title: "Agriculture & Plantations",
      content:
        "The Peninsular Plateau's agricultural landscape is shaped by varied soils and rainfall. The Deccan's black cotton soil is ideal for cotton; red soils support millets, groundnuts, and pulses. The Western Ghats host coffee, tea, pepper, and cardamom plantations. Irrigation relies on traditional tanks and large dams.",
      imageUrl:
        "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800",
    },
    regionGroupId: "peninsular-plateau",
    floraIds: ["sandalwood", "teak", "bamboo", "rosewood"],
    faunaIds: [
      "indian-elephant",
      "bengal-tiger",
      "nilgiri-tahr",
      "lion-tailed-macaque",
    ],
  },
  {
    slug: "thar-desert",
    name: "The Thar Desert",
    tagline:
      "The Great Indian Desert — sand, resilience, and vibrant culture in the world's most populated desert",
    summary:
      "The Thar Desert covers roughly 200,000 sq km, concentrated in western Rajasthan with desert fringes extending outward. Despite extreme aridity, it is a living desert with vibrant cultures and desert-adapted biodiversity.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800",
      "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=800",
      "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800",
      "https://images.unsplash.com/photo-1518882515711-f614d0e57795?w=800",
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800",
    ],
    stats: [
      { label: "Area", value: "~200,000 sq km" },
      { label: "Population", value: "~23 million" },
      { label: "Annual Rainfall", value: "100–500 mm" },
      { label: "Temperature Range", value: "-2C to 51C" },
      { label: "Only River", value: "Luni (495 km)" },
      { label: "Salt Flats", value: "Rann of Kutch" },
    ],
    highlights: [
      {
        title: "Living Desert",
        description:
          "The world's most densely populated desert with resilient cultures.",
        accent: "#f59e0b",
      },
      {
        title: "Desert Biodiversity",
        description:
          "Home to the Great Indian Bustard and desert-adapted species.",
        accent: "#fbbf24",
      },
      {
        title: "Water Wisdom",
        description:
          "Traditional harvesting systems sustain desert communities.",
        accent: "#fde68a",
      },
    ],
    story: [
      {
        id: "geography",
        title: "Geography & Landforms",
        content:
          "The Thar covers approximately 200,000 sq km — roughly 10% of India's total area. It is bounded by the Aravalli Range to the east, the Rann of Kutch to the south, the fertile Indus plain to the west, and the Punjab plains to the north. The landscape is a mosaic of shifting sand dunes, rocky plains, gravel plains, salt flats, and seasonal lakes. The Great and Little Rann of Kutch are vast salt marshes that transform into wetlands during the monsoon.",
        imageUrl:
          "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800",
      },
      {
        id: "climate",
        title: "Climate & Extremes",
        content:
          "The Thar is characterised by some of India's most extreme weather. Summer temperatures regularly exceed 50C, while winter nights can plunge below -2C. The Aravalli Range blocks monsoon clouds, creating the rain-shadow effect responsible for aridity. Annual rainfall averages 100–500 mm, and dust storms are common in May–June.",
        imageUrl:
          "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800",
      },
      {
        id: "culture",
        title: "Culture & Heritage",
        content:
          "The Thar's harsh environment has forged one of India's most vibrant cultures. The Rajput kingdoms built desert architecture like Jaisalmer Fort and Mehrangarh Fort. The desert is the cradle of Rajasthani folk music, and festivals like Pushkar Camel Fair and Rann Utsav draw global visitors. Traditional water harvesting systems — step wells, johads, and tankas — represent centuries of ingenious engineering.",
      },
      {
        id: "wildlife-ecology",
        title: "Desert Ecology",
        content:
          "Despite its harsh climate, the Thar supports remarkable biodiversity. Desert National Park preserves this unique ecosystem and is one of the last refuges of the critically endangered Great Indian Bustard. The desert supports 141 bird species, 43 mammal species, 44 reptile species, and about 700 plant species.",
      },
    ],
    ecology: {
      id: "vegetation",
      title: "Vegetation & Desert Ecology",
      content:
        "The Thar supports xerophytic vegetation with remarkable survival strategies. The Khejri tree is the most iconic — revered for its deep roots and drought resilience. Babool, rohida, neem, cacti, and thorny shrubs dominate the ground cover. After monsoon rains, annual grasses sprout quickly, creating temporary grasslands. Despite harsh conditions, the Thar supports about 700 vascular plant species.",
      imageUrl:
        "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800",
    },
    agriculture: {
      id: "agriculture",
      title: "Agriculture & Desert Farming",
      content:
        "Agriculture in the Thar is predominantly rainfed and monsoon-dependent. Bajra is the primary food crop, alongside guar, jowar, moth bean, and sesame. The Indira Gandhi Canal has transformed parts of the desert into farmland. Traditional water harvesting — tankas and khadin farming — remains vital. Animal husbandry is integral, with camels, sheep, and cattle supporting livelihoods.",
      imageUrl:
        "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=800",
    },
    regionGroupId: "thar-desert",
    floraIds: ["khejri-tree", "babool", "cactus", "date-palm"],
    faunaIds: [
      "great-indian-bustard",
      "indian-wild-ass",
      "desert-fox",
      "chinkara",
    ],
  },
  {
    slug: "coastal-plains",
    name: "The Coastal Plains",
    tagline:
      "Where land meets sea — 7,516 km of diverse coastline, backwaters, and mangroves",
    summary:
      "India's coastal plains are narrow strips of flat land along the Arabian Sea and the Bay of Bengal. The western coast is narrow and rain-soaked, while the eastern coast is wide, deltaic, and cyclone-prone.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800",
      "https://images.unsplash.com/photo-1484291150605-0860ed671425?w=800",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800",
      "https://images.unsplash.com/photo-1468413253725-0d5181091126?w=800",
    ],
    stats: [
      { label: "Total Coastline", value: "7,516 km" },
      { label: "Western Coast Width", value: "10–25 km" },
      { label: "Eastern Coast Width", value: "80–100 km" },
      { label: "Coastal Population", value: "250+ million" },
      { label: "Major Ports", value: "12 major, 200+ minor" },
      { label: "Mangroves", value: "4,975 sq km" },
    ],
    highlights: [
      {
        title: "Two Coasts",
        description: "Narrow, rain-soaked west and broad, deltaic east.",
        accent: "#0ea5e9",
      },
      {
        title: "Marine Biodiversity",
        description: "Coral reefs, mangroves, lagoons, and nesting beaches.",
        accent: "#38bdf8",
      },
      {
        title: "Trade Gateway",
        description:
          "Historic ports that handle 95% of India's trade by volume.",
        accent: "#7dd3fc",
      },
    ],
    story: [
      {
        id: "geography",
        title: "Geography & Coastline",
        content:
          "India's 7,516 km coastline is divided into two distinct plains. The Western Coastal Plain runs 1,500 km from the Rann of Kutch to Kanyakumari, narrowing to just 10–25 km between the Western Ghats and the Arabian Sea. The Eastern Coastal Plain is wider (80–100 km) and gentler, stretching 2,500 km from Kanyakumari to the mouth of the Ganga. Key features include Kerala's backwaters, Chilika Lake, and the Sundarbans.",
        imageUrl:
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
      },
      {
        id: "climate",
        title: "Climate & Weather",
        content:
          "Coastal regions enjoy a tropical maritime climate with moderate temperatures year-round and high humidity. The western coast receives heavy orographic rainfall during the southwest monsoon. The eastern coast gets major rainfall from the northeast monsoon and is prone to tropical cyclones, especially Odisha, Andhra Pradesh, and Tamil Nadu.",
        imageUrl:
          "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800",
      },
      {
        id: "marine-ecology",
        title: "Marine & Coastal Ecology",
        content:
          "India's coastline supports extraordinary marine and coastal biodiversity. Coral reefs exist in the Gulf of Kutch, Gulf of Mannar, Lakshadweep, and Andaman & Nicobar. Mangrove forests are critical for coastal protection and carbon sequestration. Chilika Lake hosts 160 fish species and over 225 bird species. The Gulf of Mannar Biosphere Reserve contains 3,600+ species including endangered dugongs.",
      },
      {
        id: "ports-trade",
        title: "Ports & Maritime Trade",
        content:
          "India's coastline has a 5,000-year maritime trade history. Today, 12 major ports and 200+ minor ports handle 95% of India's trade by volume. Mumbai and Mundra are among the most significant container ports. Historic port cities like Kochi and Mamallapuram have played pivotal roles in Indian Ocean commerce.",
      },
    ],
    ecology: {
      id: "vegetation",
      title: "Vegetation & Coastal Forests",
      content:
        "India's coastal plains support a rich mosaic of vegetation shaped by rainfall, salinity, and soil. Coconut palms dominate the western coast. Mangrove forests are ecologically critical, with the Sundarbans forming the world's largest contiguous mangrove extent in India. Casuarina plantations line sandy beaches along the eastern coast, serving as windbreaks and dune stabilizers.",
      imageUrl:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800",
    },
    agriculture: {
      id: "agriculture",
      title: "Agriculture & Fisheries",
      content:
        "Coastal agriculture combines intensive crop cultivation with massive fisheries. Rice dominates on both coasts — the Godavari, Krishna, and Kaveri deltas are among India's most productive. Coconut is a defining crop, and marine fisheries employ 7+ million people. India is the world's largest shrimp exporter, with Andhra Pradesh leading in aquaculture.",
      imageUrl:
        "https://images.unsplash.com/photo-1484291150605-0860ed671425?w=800",
    },
    regionGroupId: "coastal-plains",
    floraIds: ["coconut-palm", "mangrove", "casuarina", "palm-tree"],
    faunaIds: ["olive-ridley-turtle", "kingfisher", "mudskipper", "flamingo"],
  },
  {
    slug: "islands",
    name: "The Islands",
    tagline:
      "Tropical paradise — coral atolls, volcanic peaks, and the most pristine ecosystems in India",
    summary:
      "India's island territories — Andaman & Nicobar in the Bay of Bengal and Lakshadweep in the Arabian Sea — are biodiversity jewels with rainforests, coral reefs, endemic species, and indigenous communities.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800",
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800",
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800",
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800",
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=800",
    ],
    stats: [
      { label: "Andaman & Nicobar", value: "572 islands (37 inhabited)" },
      { label: "Lakshadweep", value: "36 atolls (10 inhabited)" },
      { label: "Active Volcano", value: "Barren Island" },
      { label: "Coral Reef Area", value: "~2,375 sq km" },
      { label: "Endemic Birds", value: "99 subspecies" },
      { label: "Dugongs", value: "~200 (India's only)" },
    ],
    highlights: [
      {
        title: "Island Biodiversity",
        description: "Endemic species, coral reefs, and nesting beaches.",
        accent: "#14b8a6",
      },
      {
        title: "Volcanic Origins",
        description:
          "Submerged mountain chains and India's only active volcano.",
        accent: "#2dd4bf",
      },
      {
        title: "Living Heritage",
        description: "Indigenous communities with ancient cultural lineages.",
        accent: "#5eead4",
      },
    ],
    story: [
      {
        id: "geography",
        title: "Geography & Geology",
        content:
          "The Andaman & Nicobar Islands are a chain of 572 islands stretching 750 km in the Bay of Bengal. They are the exposed peaks of a submerged mountain range formed by tectonic activity at the Burma-India plate boundary. The islands are divided into the Andaman Islands and the Nicobar Islands, separated by the Ten Degree Channel. Barren Island is India's only active volcano. Lakshadweep consists of 36 atolls and reef islands in the Arabian Sea, 200–440 km off the Kerala coast.",
        imageUrl:
          "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800",
      },
      {
        id: "climate",
        title: "Climate & Weather",
        content:
          "Both island groups enjoy a tropical maritime climate with stable temperatures year-round, high humidity, and heavy rainfall. The Andamans receive over 3,000 mm annually from both monsoons. Lakshadweep receives 1,600 mm, primarily during the southwest monsoon. Cyclonic disturbances can occur between October and December.",
      },
      {
        id: "biodiversity",
        title: "Biodiversity & Endemism",
        content:
          "The islands' isolation has produced extraordinary endemism. The Andaman & Nicobar Islands host over 2,200 plant species, 55 mammal species, and 270 bird species. Marine biodiversity includes corals, reef fish, sea turtles, dugongs, and dolphins. Lakshadweep's reefs are equally rich, with 104 coral species and 600 fish species.",
        imageUrl:
          "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800",
      },
      {
        id: "indigenous",
        title: "Indigenous Communities",
        content:
          "The Andaman & Nicobar Islands are home to some of the world's last remaining isolated peoples, including the Sentinelese. Other indigenous communities include the Jarawa, Great Andamanese, Onge, Shompen, and Nicobarese. These tribes represent some of the earliest human migrations out of Africa and carry genetic lineages found nowhere else.",
      },
    ],
    ecology: {
      id: "vegetation",
      title: "Vegetation & Rainforests",
      content:
        "India's island territories possess some of the most pristine vegetation in the country — over 86% of the Andaman & Nicobar Islands are under forest cover. The Andamans are covered in tropical evergreen rainforests with towering dipterocarp trees and dense understory. Mangrove forests fringe the coastlines, while Lakshadweep's coral atolls support coconut palms, pandanus, and sea grasses vital for dugong survival.",
      imageUrl:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    },
    agriculture: {
      id: "agriculture",
      title: "Agriculture & Island Economy",
      content:
        "Island agriculture is shaped by limited land and fragile ecosystems. Coconut is dominant across both island groups. The Andaman & Nicobar Islands grow rice in valley bottoms, alongside plantation crops like arecanut, rubber, and oil palm. Marine fisheries are the mainstay — Lakshadweep is famous for skipjack tuna, landed using traditional pole-and-line methods.",
      imageUrl:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800",
    },
    regionGroupId: "islands",
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
