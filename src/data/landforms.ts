import { Landform } from "./types";

export const landforms: Landform[] = [
  /* ═══════════════════════════════════════════
     1. THE HIMALAYAN MOUNTAINS
     ═══════════════════════════════════════════ */
  {
    slug: "himalayan-mountains",
    name: "The Himalayan Mountains",
    tagline:
      "The roof of the world — home to the planet's highest peaks and sacred rivers",
    description:
      "Stretching over 2,400 km across the northern edge of India, the Himalayas are the youngest and highest mountain range on Earth. Formed by the collision of the Indian and Eurasian tectonic plates roughly 50 million years ago, they continue to rise by about 1 cm per year. The Himalayas act as a colossal natural barrier, shielding the Indian subcontinent from cold Central Asian winds and intercepting moisture-laden monsoon clouds — without them, much of India would be a desert. From snow-capped summits above 8,000 m to lush alpine meadows, deep gorges, and glacial lakes, the Himalayas harbour an extraordinary range of ecosystems and are home to over 10,000 plant species and hundreds of animal species.",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800",
      "https://images.unsplash.com/photo-1580141392591-82e451d95bdc?w=800",
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800",
    ],
    sections: [
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
          "The Himalayas display extreme climatic variation compressed into vertical zones. The foothills (up to 1,000 m) experience subtropical heat with monsoon rains, temperatures reaching 30–40°C in summer. Between 1,000–3,000 m, the climate turns temperate with cool summers (15–25°C) and cold winters that bring snowfall. The alpine zone (3,000–5,000 m) has harsh conditions — temperatures drop to -20°C in winter, with 6–8 months of snow cover. Above 5,000 m lies the perpetual snow zone with arctic conditions and glaciers. Annual rainfall varies dramatically: the eastern Himalayas (Cherrapunji, Meghalaya) receive over 11,000 mm — among the wettest places on Earth — while the rain-shadow regions of Ladakh and Spiti get barely 100 mm. The southwest monsoon (June–September) brings 70–80% of annual rainfall to the southern slopes.",
        imageUrl:
          "https://images.unsplash.com/photo-1580141392591-82e451d95bdc?w=800",
      },
      {
        id: "rivers-glaciers",
        title: "Rivers & Glaciers",
        content:
          "The Himalayas are the source of Asia's mightiest river systems, sustaining over 1.5 billion people downstream. The Ganga originates from the Gangotri Glacier at 3,892 m, while the Yamuna starts at the Yamunotri Glacier. The Brahmaputra begins in Tibet as the Tsangpo, enters India through Arunachal Pradesh, and forms the world's largest river island — Majuli — in Assam. The Indus, one of the world's longest rivers at 3,180 km, flows through Ladakh before entering Pakistan. The region contains approximately 15,000 glaciers, holding the largest concentration of ice outside the polar regions — earning the Himalayas the title 'Third Pole.' The Siachen Glacier (76 km) is the world's second-longest non-polar glacier. These glaciers are critical freshwater reserves, but climate change is causing them to retreat at alarming rates — studies show 40% mass loss over recent decades.",
        imageUrl:
          "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800",
      },
      {
        id: "culture",
        title: "Culture & Heritage",
        content:
          "The Himalayas hold immense spiritual significance across Hinduism, Buddhism, Jainism, and Sikhism. Sacred sites include Kedarnath and Badrinath (part of the Char Dham pilgrimage), Amarnath Cave (with its naturally forming ice Shiva lingam), Hemkund Sahib (the highest Gurudwara at 4,632 m), and numerous Buddhist monasteries across Ladakh, Spiti, and Sikkim — including Hemis, Key, and Rumtek. The region is home to diverse ethnic communities: Ladakhis, Garhwalis, Kumaonis, Lepchas, Bhutias, and Monpas, each with distinct languages, festivals, and traditions. The Valley of Flowers in Uttarakhand, a UNESCO World Heritage Site, was described by mountaineer Frank Smythe in 1931 as 'the most beautiful valley in the world.' Nanda Devi Biosphere Reserve and Khangchendzonga National Park are also UNESCO sites.",
      },
      {
        id: "conservation",
        title: "Conservation Challenges",
        content:
          "The Himalayas face several critical environmental threats. Climate change is causing glacial retreat, shifting vegetation zones upward, and altering river flow patterns — threatening water security for billions. Deforestation for timber, agriculture, and urbanisation has degraded about 30% of Himalayan forests since the 1970s. The Chipko Movement, born in Uttarakhand in 1973, was one of India's first major environmental movements, where villagers hugged trees to prevent logging. Hydropower projects, while providing clean energy, fragment river ecosystems and trigger landslides in seismically active zones — the 2013 Uttarakhand floods and 2021 Chamoli disaster highlighted these risks. Tourism, while economically vital, creates waste and infrastructure pressure — Everest Base Camp and Rohtang Pass have both faced pollution crises. Protected areas include Jim Corbett National Park (India's first, est. 1936), Great Himalayan National Park, and Nanda Devi National Park.",
      },
    ],
    facts: [
      { label: "Length", value: "~2,400 km" },
      { label: "Highest Peak (India)", value: "Kanchenjunga (8,586 m)" },
      {
        label: "States Covered",
        value: "J&K, Ladakh, HP, Uttarakhand, Sikkim, Arunachal",
      },
      { label: "Major Rivers", value: "Ganga, Yamuna, Brahmaputra, Indus" },
      { label: "Glaciers", value: "~15,000 (Siachen is 76 km long)" },
      { label: "Climate Zones", value: "Subtropical to Arctic" },
      {
        label: "UNESCO Sites",
        value: "Valley of Flowers, Nanda Devi, Khangchendzonga",
      },
      { label: "Tectonic Activity", value: "Rising ~1 cm/year" },
    ],
    vegetation: {
      id: "vegetation",
      title: "Vegetation & Forests",
      content:
        "The Himalayas display a spectacular vertical stratification of vegetation — one of the clearest examples on Earth. The tropical and subtropical belt (up to 1,500 m) features sal (Shorea robusta), teak, and dense bamboo thickets. Between 1,500–3,000 m, temperate broadleaf and coniferous forests flourish — oak (banj, moru, kharsu), deodar cedar (Cedrus deodara, the state tree of Himachal Pradesh), blue pine, spruce, and fir create dense canopies. Rhododendron forests (over 80 species in India) paint whole mountainsides red, pink, and white during spring — Sikkim alone has 36 species. Above the tree line (3,500–4,500 m), alpine meadows called 'bugyals' burst with wildflowers — primulas, potentillas, anemones, and the legendary blue poppy (Meconopsis). The eastern Himalayas are particularly rich in orchids, with over 900 species recorded — making it one of the world's orchid hotspots. The Valley of Flowers in Uttarakhand hosts over 600 flowering plant species in a single valley. Higher still, sparse scrub, lichens, and mosses cling to rocks before giving way to permanent snowfields.",
      imageUrl:
        "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800",
    },
    agriculture: {
      id: "agriculture",
      title: "Agriculture & Livelihoods",
      content:
        "Himalayan agriculture is a masterclass in adapting to extreme terrain. Terraced farming — stepped fields carved into steep hillsides over centuries — is the defining practice, with rice paddies ascending to 2,000 m in the eastern Himalayas and wheat/barley dominant in the west. Key crops vary by altitude: rice, maize, and millets in the lower zones; wheat, barley, and potatoes in the middle; and buckwheat and amaranth at higher elevations. The region is India's horticulture powerhouse — Himachal Pradesh and Kashmir produce over 75% of India's apple crop, along with world-class walnuts, cherries, apricots, and plums. Darjeeling tea (West Bengal) and Kangra tea (Himachal Pradesh) are globally renowned — Darjeeling tea has a GI tag and sells for up to $1,800/kg for premium lots. Saffron cultivation in Kashmir's Pampore region produces the finest kesar (saffron) in the world, worth over ₹3 lakh/kg. At higher altitudes, yak herding provides dairy, wool, and transport — the yak is culturally and economically central to Ladakhi and Sikkimese communities. Medicinal herb collection (jadi-buti) for Ayurvedic and Tibetan medicine is a traditional livelihood, though overharvesting threatens species like kutki and atis.",
      imageUrl:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
    },
    floraIds: ["rhododendron", "deodar-cedar", "blue-pine", "himalayan-orchid"],
    faunaIds: ["snow-leopard", "red-panda", "himalayan-monal", "markhor"],
  },

  /* ═══════════════════════════════════════════
     2. THE NORTHERN PLAINS
     ═══════════════════════════════════════════ */
  {
    slug: "northern-plains",
    name: "The Northern Plains",
    tagline:
      "India's fertile heartland — the breadbasket of 1.4 billion people",
    description:
      "The Indo-Gangetic Plain is one of the largest and most fertile alluvial stretches on Earth, formed over millions of years by the depositional work of three mighty river systems — the Indus, Ganga, and Brahmaputra. Spanning roughly 2,400 km from the Punjab delta in the west to the Brahmaputra valley in the east, and 150–300 km from north to south, these plains support one of the densest human populations on the planet (over 500 million people) and produce the majority of India's food grains. The deep alluvial soil — in some places over 2,000 m thick — is among the most fertile in the world, replenished annually by river floods. This is where ancient Indian civilisation flourished, where empires rose and fell, and where modern India feeds itself.",
    imageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800",
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800",
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
    ],
    sections: [
      {
        id: "geography",
        title: "Geography & Soil",
        content:
          "The Northern Plains stretch approximately 2,400 km from the Sutlej-Indus system in the west to the Brahmaputra in the east, covering over 700,000 sq km across Punjab, Haryana, Delhi, Uttar Pradesh, Bihar, West Bengal, and Assam. The terrain is remarkably flat — gradient as low as 1 m per 5 km in places — making it ideal for agriculture and irrigation. The plains are divided into four distinct sub-regions based on soil age and composition: the Bhabar (pebble-rich strip at the Himalayan foothills where streams disappear underground), the Terai (marshy, forested belt where underground water resurfaces), the Bhangar (older alluvial terraces elevated above flood level, containing lime nodules called 'kankar'), and the Khadar (new, fine-grained alluvium deposited in floodplains, extremely fertile and renewed annually). The Ganga-Brahmaputra delta in the east — the Sundarbans — is the world's largest delta, covering 40,000 sq km.",
        imageUrl:
          "https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800",
      },
      {
        id: "climate",
        title: "Climate & Seasons",
        content:
          "The Northern Plains experience a continental tropical to subtropical climate with extreme seasonal variation — four distinct seasons shape life and agriculture. Summers (March–June) are scorching, with temperatures reaching 45–48°C in Rajasthan border areas and the Loo (hot, dry wind) sweeping across the western plains. The monsoon (July–September) brings 75–90% of annual rainfall — ranging from 250 mm in the arid west (Rajasthan border) to over 2,500 mm in the eastern plains of Assam. Post-monsoon (October–November) brings clear skies, retreating monsoon, and cyclonic rains in Bengal. Winters (December–February) are cold, with dense fog blanketing the plains for weeks — temperatures drop to 2–5°C in Punjab and UP, and frost is common. The plains' flat topography means cold Arctic air from Central Asia penetrates deep into the region, causing winter cold waves that affect millions.",
        imageUrl:
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
      },
      {
        id: "rivers",
        title: "River Systems",
        content:
          "Three of Asia's mightiest river systems define the Northern Plains. The Ganga system — India's most sacred river — flows 2,525 km from Gangotri to the Bay of Bengal, with major tributaries including the Yamuna, Gomti, Ghaghara, Gandak, and Son. The combined Ganga basin covers 860,000 sq km and supports 400+ million people. The Brahmaputra, one of the world's largest rivers by discharge, flows 2,900 km through Tibet, Arunachal Pradesh, and Assam before joining the Ganga in Bangladesh. It forms Majuli (352 sq km), the world's largest river island, and its valley holds the highest tea-growing regions of Assam. The Indus system, flowing through Punjab ('land of five rivers' — Jhelum, Chenab, Ravi, Beas, Sutlej), was the cradle of the Indus Valley Civilisation. These rivers create vast floodplains that, while devastating during floods, deposit nutrient-rich silt that renews agricultural fertility.",
      },
      {
        id: "culture",
        title: "Culture & History",
        content:
          "The Northern Plains are the cradle of Indian civilisation and culture. The Indus Valley Civilisation (3300–1300 BCE) — with cities like Harappa and Mohenjo-daro — flourished here. Varanasi, one of the world's oldest continuously inhabited cities (3,000+ years), sits on the Ganga's banks. The plains witnessed the rise of Buddhism and Jainism — Sarnath (where Buddha gave his first sermon), Bodh Gaya, Nalanda (ancient university), and Rajgir are all here. The Mughal Empire (1526–1857) left architectural marvels: the Taj Mahal in Agra, Red Fort in Delhi, Fatehpur Sikri, and the Golden Temple in Amritsar. The region's cultural diversity is staggering — Hindi, Urdu, Punjabi, Bengali, Assamese, Maithili, and Bhojpuri are spoken across the plains. Festivals like Kumbh Mela (the world's largest gathering, 120+ million people in 2019) and Durga Puja (Bengal) bring the plains alive.",
      },
    ],
    facts: [
      { label: "Area", value: "~700,000 sq km" },
      { label: "Length", value: "~2,400 km (E–W)" },
      { label: "Population", value: "500+ million people" },
      { label: "Major Rivers", value: "Ganga, Yamuna, Brahmaputra, Indus" },
      { label: "Soil Depth", value: "Up to 2,000 m (alluvial)" },
      { label: "Key Crops", value: "Wheat, Rice, Sugarcane, Jute" },
      { label: "Largest Delta", value: "Sundarbans (40,000 sq km)" },
      { label: "Ancient Sites", value: "Varanasi, Nalanda, Sarnath, Harappa" },
    ],
    vegetation: {
      id: "vegetation",
      title: "Vegetation & Forests",
      content:
        "Centuries of intensive cultivation have transformed the Northern Plains from dense tropical deciduous forests into India's most heavily agrarian landscape — less than 5% of the original forest cover remains. However, pockets of significant vegetation survive. The Terai belt retains moist deciduous forest and some of Asia's finest tall grassland ecosystems — Dudhwa National Park and Kaziranga still feature grasslands reaching 6–8 m in height, critical habitat for the Indian rhinoceros and Bengal tiger. The Sundarbans in the east — covering 10,000 sq km in India — is the world's largest mangrove forest, dominated by sundari (Heritiera fomes) trees that gave the region its name. Riverine forests along the Ganga feature khair (Acacia catechu), shisham (Dalbergia sissoo), and arjun (Terminalia arjuna). Village commons still support banyan, peepal (both sacred in Hinduism), neem, mango, and tamarind trees. Plantation forests of eucalyptus, poplar, and teak have been established for timber. The Keoladeo National Park in Bharatpur preserves a unique wetland forest hosting 350+ bird species.",
      imageUrl:
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800",
    },
    agriculture: {
      id: "agriculture",
      title: "Agriculture & Food Production",
      content:
        "The Northern Plains are India's undisputed agricultural powerhouse — producing over 60% of India's food grains on some of the world's most fertile soil. The alluvial deposits, renewed annually by river floods, create soil so rich that the region supports two to three harvests per year. Wheat dominates the rabi (winter) season — Punjab and Haryana alone produce 50% of India's wheat surplus, earning Punjab the title 'Granary of India.' Rice is the primary kharif (summer) crop across Bihar, Bengal, and eastern UP. Uttar Pradesh is the world's largest sugarcane-producing region; Bihar leads in litchi production. The Green Revolution of the 1960s–70s, pioneered by M.S. Swaminathan with Nobel laureate Norman Borlaug, transformed Indian agriculture here — introducing high-yield dwarf wheat varieties (like Sonalika and Kalyan Sona), chemical fertilizers, and extensive canal irrigation from the Bhakra-Nangal Dam. Other key crops include mustard (Rajasthan-Haryana belt), jute ('golden fibre' of Bengal), pulses, potatoes (UP is India's #1 producer), and vegetables. Dairy farming is massive — Operation Flood made India the world's largest milk producer (210 million tonnes/year), with UP leading nationally.",
      imageUrl:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800",
    },
    floraIds: ["banyan-tree", "peepal-tree", "mango-tree", "teak"],
    faunaIds: [
      "gangetic-dolphin",
      "indian-rhinoceros",
      "bengal-florican",
      "nilgai",
    ],
  },

  /* ═══════════════════════════════════════════
     3. THE PENINSULAR PLATEAU
     ═══════════════════════════════════════════ */
  {
    slug: "peninsular-plateau",
    name: "The Peninsular Plateau",
    tagline:
      "Ancient bedrock — one of the oldest and most mineral-rich landmasses on Earth",
    description:
      "The Peninsular Plateau, also known as the Deccan Plateau, is a vast triangular tableland occupying most of southern India — roughly 1.6 million sq km. Composed of some of the oldest rocks on Earth (Precambrian igneous and metamorphic rocks dating back 3.6 billion years), it is one of the most geologically stable landmasses on the planet. The Deccan Traps — one of the largest volcanic formations on Earth — cover about 500,000 sq km with basaltic lava flows up to 2,000 m thick, formed by volcanic eruptions 66 million years ago that may have contributed to the extinction of dinosaurs. This ancient plateau is India's mineral treasury, a biodiversity hotspot, and home to some of the most dramatic landscapes in the subcontinent.",
    imageUrl:
      "https://images.unsplash.com/photo-1590766940554-634f4e473065?w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1518173946687-a1e33bbc4a5e?w=800",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
    ],
    sections: [
      {
        id: "geography",
        title: "Geography & Geology",
        content:
          "The Peninsular Plateau is broadly divided into the Central Highlands (north of the Narmada River, including the Malwa Plateau, Bundelkhand, and Chota Nagpur Plateau) and the Deccan Plateau (south of the Narmada). It is flanked by two major mountain ranges: the Western Ghats (Sahyadri, running 1,600 km along the western coast, average height 1,200 m) and the Eastern Ghats (fragmented, running along the eastern coast). The Western Ghats rise steeply from the narrow coastal strip, creating a dramatic rain-shadow effect. The plateau tilts gently from west to east — which is why most peninsula rivers (Godavari, Krishna, Kaveri, Mahanadi) flow eastward into the Bay of Bengal. Anamudi (2,695 m) in the Western Ghats is the highest point south of the Himalayas. The Chota Nagpur Plateau in Jharkhand is India's mineral heartland, with massive iron ore, coal, and mica deposits.",
        imageUrl:
          "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800",
      },
      {
        id: "climate",
        title: "Climate & Rainfall",
        content:
          "The plateau's climate is shaped by its elevation, proximity to coasts, and the dramatic rain-shadow effect of the Western Ghats. The windward (western) slopes receive heavy orographic rainfall — 2,000–5,000 mm annually — creating lush tropical forests. The leeward (eastern) side and interior Deccan are much drier, receiving 500–1,000 mm, leading to semi-arid conditions. Temperatures are moderated by elevation — summers range from 30–38°C on the plateau (compared to 45°C in the plains), while winters are mild (15–22°C). Mahabaleshwar in the Western Ghats receives over 6,000 mm of rain, while Solapur just 200 km east gets barely 600 mm. The plateau experiences three seasons: hot dry summer (March–May), monsoon (June–September), and cool dry winter (November–February). Cyclones occasionally affect the eastern regions, particularly Andhra Pradesh and Odisha.",
        imageUrl:
          "https://images.unsplash.com/photo-1518173946687-a1e33bbc4a5e?w=800",
      },
      {
        id: "rivers-waterfalls",
        title: "Rivers & Waterfalls",
        content:
          "The Peninsular Plateau is drained by some of India's most important rivers. The Godavari ('Dakshina Ganga', 1,465 km) is the longest peninsular river, flowing through Maharashtra, Telangana, and Andhra Pradesh. The Krishna (1,400 km) and its tributaries Bhima and Tungabhadra drain Karnataka and Andhra Pradesh. The Kaveri (765 km, considered sacred) flows through Karnataka and Tamil Nadu, creating the fertile Thanjavur delta — the 'Rice Bowl of Tamil Nadu.' The Narmada and Tapi are notable exceptions — they flow westward into the Arabian Sea through rift valleys. The plateau's rivers create spectacular waterfalls where they cascade over steep escarpments: Jog Falls (253 m, India's second-highest plunge waterfall) on the Sharavathi River, Dudhsagar Falls (310 m) on the Goa-Karnataka border, and Athirappilly Falls in Kerala. Most peninsular rivers are monsoon-fed and seasonal, unlike the perennial Himalayan rivers.",
      },
      {
        id: "minerals",
        title: "Mineral Wealth",
        content:
          "The ancient Precambrian rocks of the Peninsular Plateau make it India's mineral storehouse. The Chota Nagpur Plateau (Jharkhand-Odisha) contains over 25% of India's coal reserves, concentrated in the Jharia and Raniganj coalfields. Odisha holds 95% of India's chromite reserves, 70% of iron ore, and significant bauxite deposits. Karnataka's Bellary-Hospet belt is a major iron ore region. The Kolar Gold Fields in Karnataka were among the deepest mines in the world (operating for over a century before closure in 2001). Maharashtra and Gujarat sit on the Deccan Traps — the deep basaltic lava has weathered into fertile black cotton soil (regur), ideal for cotton cultivation. The plateau also yields manganese (Maharashtra, MP), mica (Jharkhand, Bihar — India produced 60% of the world's mica in the early 2000s), limestone, and diamond (Panna mines in MP, and historically the Golconda mines produced the Hope Diamond and Koh-i-Noor).",
      },
    ],
    facts: [
      { label: "Area", value: "~1.6 million sq km" },
      { label: "Highest Point", value: "Anamudi (2,695 m)" },
      { label: "Rock Age", value: "Up to 3.6 billion years" },
      { label: "Western Ghats Length", value: "1,600 km" },
      { label: "Major Rivers", value: "Godavari, Krishna, Kaveri, Narmada" },
      { label: "Deccan Traps Area", value: "~500,000 sq km of basalt" },
      { label: "Biodiversity Hotspot", value: "Western Ghats (top 8 global)" },
      { label: "Key Minerals", value: "Iron ore, Coal, Manganese, Mica" },
    ],
    vegetation: {
      id: "vegetation",
      title: "Vegetation & Forests",
      content:
        "The Peninsular Plateau hosts India's richest and most varied forest types. The Western Ghats — one of the world's 8 'hottest' biodiversity hotspots — support tropical evergreen and semi-evergreen forests on their windward slopes, with towering trees reaching 40–50 m and a dense understory of ferns, orchids, and epiphytes. These forests contain over 7,400 species of flowering plants, 1,814 of which are found nowhere else on Earth. The rain-shadow side features moist and dry deciduous forests dominated by teak (India's most commercially important timber tree), sal, sandalwood (Mysore sandalwood is the world's finest), rosewood, and bamboo (India has 136 bamboo species, many from this region). The Deccan interior supports thorny scrubland and dry deciduous forests with acacia, zizyphus, and euphorbia. The Nilgiri Hills feature the unique shola-grassland ecosystem — patches of stunted montane evergreen forest in sheltered valleys, interspersed with rolling grasslands at 2,000+ m elevation. Rare endemic species like the Nilgiri neelakurinji (Strobilanthes kunthiana) flower en masse only once every 12 years, carpeting entire hillsides in blue-purple.",
      imageUrl:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
    },
    agriculture: {
      id: "agriculture",
      title: "Agriculture & Plantations",
      content:
        "The Peninsular Plateau's agricultural landscape is spectacularly diverse, shaped by five distinct soil types, varying rainfall, and elevation. The Deccan's black cotton soil (regur) — formed from weathered basalt — is among the world's best for cotton, retaining moisture through dry periods; Maharashtra and Gujarat are India's top cotton producers. Red soils of Karnataka, Tamil Nadu, and Andhra Pradesh support millets (ragi — finger millet, the protein-rich 'supergrain' now gaining global attention — and jowar), groundnuts, and pulses. The Western Ghats' windward slopes are India's plantation crop paradise: Coorg and Chikmagalur in Karnataka produce 70% of India's coffee (India ranks 6th globally); the Nilgiris and Munnar in Kerala produce premium tea; Wayanad in Kerala is India's largest pepper-producing region; and cardamom ('Queen of Spices') grows in Kerala and Karnataka. Kerala also dominates rubber production (90% of India's share). The plateau's mineral-rich soil supports sugarcane in Maharashtra (India's #2 producer), turmeric in Andhra Pradesh (India produces 80% of world supply), and arecanut in Karnataka. Irrigation relies heavily on tanks (traditional reservoirs — there are over 39,000 in Tamil Nadu alone), supplemented by large dams like Krishnaraja Sagar, Nagarjuna Sagar, and Hirakud.",
      imageUrl:
        "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800",
    },
    floraIds: ["sandalwood", "teak", "bamboo", "rosewood"],
    faunaIds: [
      "indian-elephant",
      "bengal-tiger",
      "nilgiri-tahr",
      "lion-tailed-macaque",
    ],
  },

  /* ═══════════════════════════════════════════
     4. THE THAR DESERT
     ═══════════════════════════════════════════ */
  {
    slug: "thar-desert",
    name: "The Thar Desert",
    tagline:
      "The Great Indian Desert — sand, resilience, and vibrant culture in the world's most populated desert",
    description:
      "The Thar Desert, also called the Great Indian Desert, is the world's most densely populated desert and the 17th largest globally — covering approximately 200,000 sq km across western Rajasthan, southern Haryana, southern Punjab, and northern Gujarat. Despite receiving barely 100–500 mm of rain annually, and temperatures ranging from -2°C to 50°C, this is no barren wasteland. The Thar is a living desert — home to 23 million people, a vibrant cultural heritage of music, dance, and architecture (the golden city of Jaisalmer, the blue city of Jodhpur), and a surprising diversity of life that has evolved remarkable adaptations to survive extreme aridity. The Rann of Kutch — a vast salt marsh at its southern edge — transforms seasonally from a shimmering white expanse to a flamingo paradise.",
    imageUrl:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800",
      "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=800",
      "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800",
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800",
      "https://images.unsplash.com/photo-1518882515711-f614d0e57795?w=800",
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800",
    ],
    sections: [
      {
        id: "geography",
        title: "Geography & Landforms",
        content:
          "The Thar covers approximately 200,000 sq km — roughly 10% of India's total area. It is bounded by the Aravalli Range to the east (India's oldest mountain range at 1.5 billion years), the Rann of Kutch to the south, the fertile Indus plain to the west (Pakistan border), and the Punjab plains to the north. The landscape is a mosaic of shifting sand dunes (some rising over 150 m), rocky plains (reg), gravel plains (hamada), salt flats, and seasonal lakes (playas). The sand dunes are classified as barchans (crescent-shaped), transverse, parabolic, and longitudinal dunes. The Great Rann of Kutch (7,505 sq km) and Little Rann of Kutch (5,180 sq km) are vast salt marshes — during the monsoon they become shallow wetlands, and in the dry season they transform into stark white salt flats that stretch to the horizon. The Luni is the only significant river, flowing 495 km before disappearing into the Rann of Kutch.",
        imageUrl:
          "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800",
      },
      {
        id: "climate",
        title: "Climate & Extremes",
        content:
          "The Thar is characterised by some of India's most extreme weather. Summer temperatures regularly exceed 50°C (Phalodi in Rajasthan recorded India's all-time high of 51°C in 2016), while winter nights can plunge below -2°C — a daily temperature swing of up to 30°C is common. The Aravalli Range, running parallel to the desert's eastern edge, blocks moisture-laden monsoon clouds from reaching the interior, creating the rain-shadow effect responsible for the desert. Annual rainfall averages 100–500 mm, decreasing from east to west — Jodhpur gets about 360 mm, while areas near the Pakistan border receive less than 100 mm. Despite this aridity, the monsoon's brief visit (July–September) triggers a dramatic transformation — barren brown landscapes turn green within days, seasonal lakes fill, and migratory birds arrive. Dust storms and sandstorms (called andhi) are common in May–June, reducing visibility to near zero.",
        imageUrl:
          "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800",
      },
      {
        id: "culture",
        title: "Culture & Heritage",
        content:
          "The Thar's harsh environment has forged one of India's most vibrant and resilient cultures. The Rajput kingdoms built incredible desert architecture: Jaisalmer Fort (a UNESCO World Heritage Site, one of the world's largest fully preserved fortified cities — 3,000 people still live inside its 12th-century walls), Mehrangarh Fort in Jodhpur (rising 125 m above the 'Blue City'), and the Thar's iconic havelis (ornate sandstone mansions in Jaisalmer and Shekhawati with exquisite frescoes). The desert is the cradle of Rajasthani folk music — the haunting melodies of Manganiar and Langa musicians have been performed globally. The Pushkar Camel Fair (November) attracts 200,000 visitors and 50,000 camels. The Rann Utsav at the white Rann of Kutch is one of India's most spectacular cultural festivals. Traditional water harvesting systems — step wells (bavri/baoli), johads (earthen check dams), and tankas (underground cisterns) — represent centuries of ingenious engineering to survive in arid conditions.",
      },
      {
        id: "wildlife-ecology",
        title: "Desert Ecology",
        content:
          "Despite its harsh climate, the Thar supports remarkable biodiversity. The Desert National Park near Jaisalmer (3,162 sq km) preserves this unique ecosystem and contains fossils of dinosaurs and ancient trees dating back 180 million years. The park is one of the last refuges of the critically endangered Great Indian Bustard (Ardeotis nigriceps) — once numbering in thousands, fewer than 150 survive today. The desert supports 141 bird species, 43 mammal species, 44 reptile species, and about 700 plant species. The Indian gazelle (chinkara) gracefully navigates the dunes, the desert fox hunts rodents at dusk, and the spiny-tailed lizard (uromastyx) is endemic to the region. After monsoon rains, the seasonal lakes attract tens of thousands of demoiselle cranes, Lesser flamingos at the Rann, and other migratory waterbirds. The Indian wild ass (khur), found only in the Little Rann of Kutch, is another unique species with fewer than 6,000 individuals.",
      },
    ],
    facts: [
      { label: "Area", value: "~200,000 sq km" },
      { label: "Population", value: "~23 million" },
      { label: "States", value: "Rajasthan, Gujarat, Haryana, Punjab" },
      { label: "Temperature Range", value: "-2°C to 51°C" },
      { label: "Annual Rainfall", value: "100–500 mm" },
      { label: "Only River", value: "Luni (495 km)" },
      { label: "Great Indian Bustard", value: "Fewer than 150 left" },
      { label: "Rann of Kutch", value: "12,685 sq km of salt flats" },
    ],
    vegetation: {
      id: "vegetation",
      title: "Vegetation & Desert Ecology",
      content:
        "The Thar supports xerophytic (drought-adapted) vegetation with remarkable survival strategies evolved over millennia. The Khejri tree (Prosopis cineraria) is the most iconic — declared Rajasthan's state tree, it is revered in the Bishnoi community (who have protected trees since 1730 CE, when 363 Bishnois sacrificed their lives to save Khejri trees near Jodhpur). Its roots can reach groundwater 30 m deep, and it provides shade, fodder, fuel, and nutritious pods (sangri). Babool (Acacia nilotica), rohida (Tecomella undulata — the state flower's tree), and neem are scattered across the landscape. Cacti and thorny bushes like ker (Capparis decidua, whose berries are a prized delicacy), phog (Calligonum polygonoides), and arida (Calotropis) dominate the ground cover. After monsoon rains, the desert transforms spectacularly — annual grasses like sewan (Lasiurus sindicus) sprout within days, creating temporary grasslands crucial for livestock grazing. The Aravalli hills' eastern slopes receive more rainfall and support denser scrub and dry deciduous forests. Around oases and near the Luni River, date palms and ber (Indian jujube, a vitamin C-rich fruit) provide sustenance. Despite the harsh conditions, the Thar supports about 700 vascular plant species — higher diversity than most deserts worldwide.",
      imageUrl:
        "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800",
    },
    agriculture: {
      id: "agriculture",
      title: "Agriculture & Desert Farming",
      content:
        "Agriculture in the Thar Desert is a testament to human ingenuity and resilience. With rainfall averaging just 100–500 mm, farming is predominantly rainfed and monsoon-dependent. Bajra (pearl millet) is the primary food crop — drought-resistant, nutritious, and thriving in sandy soils — it feeds millions across western Rajasthan. Other important crops include guar (cluster bean) — India produces 80% of the world's guar gum (used in food, fracking, and cosmetics), worth ₹5,000+ crore annually, mostly from Rajasthan's Barmer and Jaisalmer districts. Jowar (sorghum), moth bean, moong (green gram), and sesame are grown in kharif season. The Indira Gandhi Canal (formerly Rajasthan Canal), India's longest canal at 649 km, has been transformative — carrying water from the Sutlej-Beas rivers in Punjab into the heart of the Thar, it has turned 17,000 sq km of desert into farmland since 1958, enabling wheat, cotton, mustard, and even rice cultivation in previously barren areas. Many farmers still rely on traditional water harvesting — tankas (underground cisterns) collect every drop of monsoon rain, and khadin farming (ancient flood-water harvesting behind earthen bunds) has been practised for 500+ years. Cumin (Rajasthan produces 90% of India's cumin) and coriander are major spice crops. Animal husbandry is integral — the Tharparkar cow breed gives high-quality milk in arid conditions, Marwari sheep produce premium wool, and the camel remains essential for transport.",
      imageUrl:
        "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=800",
    },
    floraIds: ["khejri-tree", "babool", "cactus", "date-palm"],
    faunaIds: [
      "great-indian-bustard",
      "indian-wild-ass",
      "desert-fox",
      "chinkara",
    ],
  },

  /* ═══════════════════════════════════════════
     5. THE COASTAL PLAINS
     ═══════════════════════════════════════════ */
  {
    slug: "coastal-plains",
    name: "The Coastal Plains",
    tagline:
      "Where land meets sea — 7,516 km of diverse coastline, backwaters, and mangroves",
    description:
      "India's coastal plains are narrow strips of flat, low-lying land stretching along the Arabian Sea (western coast) and the Bay of Bengal (eastern coast). Together they form one of the world's most diverse and economically vital coastal zones — 7,516 km of coastline touching 9 states and 4 union territories, supporting 250+ million people. The two coasts have distinct characters: the Western Coast (Konkan, Malabar) is narrow (10–25 km), rocky, and receives drenching monsoon rains, while the Eastern Coast (Coromandel, Northern Circars) is broader (80–100 km), flat, and formed by river deltas. From the iconic backwaters of Kerala to the Sundarbans' mangrove labyrinth, from ancient port cities to world-class beaches, India's coastline is a kaleidoscope of ecosystems, cultures, and livelihoods.",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800",
      "https://images.unsplash.com/photo-1484291150605-0860ed671425?w=800",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800",
      "https://images.unsplash.com/photo-1468413253725-0d5181091126?w=800",
    ],
    sections: [
      {
        id: "geography",
        title: "Geography & Coastline",
        content:
          "India's 7,516 km coastline is divided into two distinct plains. The Western Coastal Plain runs 1,500 km from the Rann of Kutch (Gujarat) to Kanyakumari (Tamil Nadu), narrowing to just 10–25 km between the Western Ghats and the Arabian Sea. It includes the Gujarat Coast, the Konkan Coast (Maharashtra and Goa — famous for beaches and seafood), the Karnataka Coast (Canara), and the Malabar Coast (Kerala — known for its backwaters, spice trade, and coconut groves). The Eastern Coastal Plain is wider (80–100 km) and gentler, stretching 2,500 km from Kanyakumari to the mouth of the Ganga. It includes the Coromandel Coast (Tamil Nadu and Andhra Pradesh — with the Kaveri, Krishna, and Godavari deltas creating India's most fertile rice lands), the Northern Circars (Odisha), and the Ganga-Brahmaputra delta (Sundarbans in West Bengal). Key geographical features include Kerala's backwaters (900 km of interconnected canals, rivers, and lagoons), Chilika Lake (Asia's largest brackish water lagoon at 1,165 sq km), and the Sundarbans (world's largest mangrove extent in India: 4,264 sq km).",
        imageUrl:
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
      },
      {
        id: "climate",
        title: "Climate & Weather",
        content:
          "Coastal regions enjoy a tropical maritime climate with moderate temperatures year-round (24–32°C) and high humidity (70–90%). The western coast receives heavy orographic rainfall (2,000–4,000 mm) during the southwest monsoon (June–September) — the monsoon spectacularly hits the Kerala coast first around June 1, marking the 'onset of monsoon' that the entire nation watches. Cherrapunji and Mawsynram in the northeastern hills (near the coast) are among the wettest places on Earth. The eastern coast gets its major rainfall from the northeast monsoon (October–December), with tropical cyclones frequently affecting Odisha, Andhra Pradesh, and Tamil Nadu — the 1999 Odisha super cyclone (wind speeds of 260 km/h) was one of the deadliest natural disasters in Indian history. The Konkan coast receives 3,000–4,000 mm annually, supporting lush vegetation, while the rain-shadow Coromandel coast gets only 600–1,000 mm. Sea breezes moderate temperatures year-round, keeping coastal cities 5–10°C cooler than inland counterparts.",
        imageUrl:
          "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800",
      },
      {
        id: "marine-ecology",
        title: "Marine & Coastal Ecology",
        content:
          "India's coastline supports extraordinary marine and coastal biodiversity. Coral reefs are found in the Gulf of Kutch, Gulf of Mannar, Lakshadweep, and Andaman & Nicobar — India has about 2,375 sq km of coral reef area hosting 2,000+ marine species. Mangrove forests, critical for coastal protection and carbon sequestration, exist in the Sundarbans (world's largest), Bhitarkanika (Odisha — home to the world's largest nesting colony of olive ridley sea turtles at Gahirmatha beach, where 500,000+ turtles arrive annually), Pichavaram (Tamil Nadu), and the Gulf of Kutch. Chilika Lake hosts over 160 fish species and 225 bird species — including millions of migratory birds from Siberia and Central Asia. The Gulf of Mannar Biosphere Reserve contains 3,600+ species including endangered dugongs, seahorses, and whale sharks. Fishing communities (7 million+ fishers) harvest from one of the world's richest marine fisheries — India is the world's 3rd largest fish producer. Coastal wetlands, estuaries, and lagoons serve as critical nurseries for commercially important fish and prawn species.",
      },
      {
        id: "ports-trade",
        title: "Ports & Maritime Trade",
        content:
          "India's coastline has a 5,000-year maritime trade history — Lothal in Gujarat was one of the world's first port cities (2400 BCE). Today, 12 major ports and 200+ minor ports handle 95% of India's trade by volume. Mumbai (Jawaharlal Nehru Port Trust, India's largest container port) processes 4.5+ million TEUs annually. Other major ports include Kandla and Mundra in Gujarat (India's largest private port by cargo), Chennai, Visakhapatnam, Kolkata/Haldia, Paradip, Mormugao (Goa), and Kochi (which has an international container trans-shipment terminal). The Konkan Railway (1998), running 741 km through 2,000 bridges and 91 tunnels along the western coast, is one of India's greatest engineering feats. Historic port cities like Kochi (where Vasco da Gama landed in 1498, launching the spice trade), Mamallapuram (Pallava maritime trade hub), and Visakhapatnam have played pivotal roles in Indian Ocean commerce.",
      },
    ],
    facts: [
      { label: "Total Coastline", value: "7,516 km" },
      { label: "Western Coast Width", value: "10–25 km" },
      { label: "Eastern Coast Width", value: "80–100 km" },
      { label: "Coastal Population", value: "250+ million" },
      { label: "States/UTs", value: "9 states, 4 union territories" },
      { label: "Major Lagoon", value: "Chilika (1,165 sq km)" },
      { label: "Mangrove (India)", value: "4,975 sq km total" },
      { label: "Major Ports", value: "12 major, 200+ minor" },
    ],
    vegetation: {
      id: "vegetation",
      title: "Vegetation & Coastal Forests",
      content:
        "India's coastal plains support a rich mosaic of vegetation shaped by proximity to the sea, rainfall, salinity, and soil. Coconut palms dominate the western coast, particularly in Kerala (with 9 million+ coconut trees) and Karnataka, creating iconic tropical landscapes — 'Land of Coconut Trees' is Kerala's traditional name. Mangrove forests — salt-tolerant trees with distinctive stilt roots — are ecologically critical. The Sundarbans (dominated by sundari/Heritiera fomes, which gave the forest its name) is the world's largest contiguous mangrove, containing 64 plant species adapted to salt water. Bhitarkanika in Odisha has the world's second-largest mangrove ecosystem with 62 mangrove species. Casuarina plantations line sandy beaches along the eastern coast, serving as windbreaks, stabilising dunes, and providing fuel — planted extensively after cyclone damage to create 'bio-shields.' The western coast's heavy rainfall supports tropical evergreen vegetation in the Konkan and Malabar regions — dense forests of teak, rosewood, and cashew trees. Kerala's backwaters feature distinctive wetland plants, water hyacinths, lotus, and pandanus. Coastal sand dunes support specialised vegetation including Ipomoea (beach morning glory), Spinifex grasses, and the endangered coastal Pandanus. The Pichavaram Mangrove Forest in Tamil Nadu is the world's second-largest mangrove forest.",
      imageUrl:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800",
    },
    agriculture: {
      id: "agriculture",
      title: "Agriculture & Fisheries",
      content:
        "Coastal agriculture combines intensive crop cultivation with India's massive fishing industry. Rice dominates on both coasts — the Godavari and Krishna deltas (Andhra Pradesh) and the Kaveri delta (Thanjavur, Tamil Nadu — called 'The Rice Bowl of Tamil Nadu') are among India's most productive paddy regions, with 2–3 crops per year. In Kerala, the Kuttanad region grows rice below sea level — one of the few places in the world where rice cultivation occurs in a below-sea-level polder system. Coconut is the defining crop — India is the world's third-largest coconut producer (over 14.8 billion nuts/year), with Kerala, Karnataka, and Tamil Nadu leading. Kerala is India's largest cashew-processing hub. The Konkan coast (Maharashtra-Goa) produces the prized Alphonso mango (hapus), exported worldwide. Black pepper ('King of Spices'), cardamom, rubber, and arecanut thrive in Kerala's tropical climate. Marine fisheries are India's largest — the sector employs 7+ million people, producing 4.2 million tonnes from marine and 9.6 million tonnes from inland fisheries annually. India is the world's largest shrimp exporter, with Andhra Pradesh leading in aquaculture. Salt production from seawater evaporation pans is significant — Gujarat's Rann of Kutch produces 76% of India's salt (India is the world's third-largest salt producer).",
      imageUrl:
        "https://images.unsplash.com/photo-1484291150605-0860ed671425?w=800",
    },
    floraIds: ["coconut-palm", "mangrove", "casuarina", "palm-tree"],
    faunaIds: ["olive-ridley-turtle", "kingfisher", "mudskipper", "flamingo"],
  },

  /* ═══════════════════════════════════════════
     6. THE ISLANDS
     ═══════════════════════════════════════════ */
  {
    slug: "islands",
    name: "The Islands",
    tagline:
      "Tropical paradise — coral atolls, volcanic peaks, and the most pristine ecosystems in India",
    description:
      "India's island territories — the Andaman & Nicobar Islands in the Bay of Bengal and Lakshadweep in the Arabian Sea — are among the most ecologically pristine and biologically unique regions in the country. The Andaman & Nicobar chain consists of 572 islands (only 37 permanently inhabited) stretching 750 km — they are the exposed peaks of a submerged mountain range connecting Myanmar to Indonesia. Lakshadweep comprises 36 coral atolls and reef islands (10 inhabited), India's smallest union territory by area but with the richest coral reef systems in the country. Together, these islands harbour tropical rainforests, pristine coral reefs, endemic species found nowhere else on Earth, indigenous communities who have lived in isolation for 60,000+ years, and India's only active volcano. They are biodiversity jewels critical for global marine conservation.",
    imageUrl:
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200",
    galleryImages: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800",
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800",
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800",
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800",
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=800",
    ],
    sections: [
      {
        id: "geography",
        title: "Geography & Geology",
        content:
          "The Andaman & Nicobar Islands are a chain of 572 islands stretching 750 km in the Bay of Bengal, from Myanmar in the north to Sumatra in the south. They are the exposed peaks of a submerged mountain range (an extension of the Arakan Yoma range of Myanmar), formed by tectonic activity at the Burma-India plate boundary. The islands are divided into two groups: the Andaman Islands (324 islands, 6,408 sq km) in the north and the Nicobar Islands (24 islands, 1,841 sq km) in the south, separated by the 150 km-wide Ten Degree Channel. Barren Island (in the Andamans) is India's only active volcano — it has erupted multiple times since 1991, most recently in 2017. The 2004 Indian Ocean tsunami devastated the Nicobar Islands, killing 3,500+ and permanently altering coastlines. Lakshadweep consists of 36 atolls, reefs, and islands in the Arabian Sea, 200–440 km off the Kerala coast — total land area is just 32 sq km, but the lagoon area covers 4,200 sq km with some of India's clearest waters (visibility up to 50 m).",
        imageUrl:
          "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800",
      },
      {
        id: "climate",
        title: "Climate & Weather",
        content:
          "Both island groups enjoy a tropical maritime climate with remarkably stable temperatures year-round (23–31°C), high humidity (80%+), and heavy rainfall. The Andamans receive over 3,000 mm of rain annually from both the southwest and northeast monsoons — there is no distinct dry season, with rain distributed across 8–10 months. Lakshadweep receives 1,600 mm, primarily during the southwest monsoon (May–September). The surrounding seas maintain temperatures of 26–29°C — warm enough to support extensive coral reef growth. Cyclonic disturbances can occur between October and December, but the islands' equatorial position means they rarely face the full fury of Bay of Bengal cyclones (unlike the mainland eastern coast). The 2004 tsunami, triggered by a magnitude 9.1 earthquake off Sumatra, was the most devastating natural event in the islands' history — sea waves up to 15 m high struck the Nicobar Islands.",
      },
      {
        id: "biodiversity",
        title: "Biodiversity & Endemism",
        content:
          "The islands' isolation has produced extraordinary endemism — species found nowhere else on Earth. The Andaman & Nicobar Islands host over 2,200 vascular plant species (200+ endemic), 55 mammal species (32 endemic), 270 bird species (99 endemic subspecies), 83 reptile species, and over 1,200 fish species on their coral reefs. Flagship endemic species include the Narcondam Hornbill (found only on the tiny 6.8 sq km Narcondam Island), Nicobar Pigeon (the closest living relative of the extinct dodo), Andaman Day Gecko, and Nicobar Long-tailed Macaque. Marine biodiversity is equally spectacular — the coral reefs support 179 species of hard coral, 500+ species of reef fish, 4 species of sea turtle (green, hawksbill, leatherback, olive ridley), dugongs (sea cows — India's entire dugong population of about 200 is found here), and 10 species of dolphins and whales. Lakshadweep's reefs are equally rich, with 104 coral species and 600 fish species in crystal-clear lagoons. The islands' beaches are among the most important nesting sites for leatherback turtles in the Indian Ocean.",
        imageUrl:
          "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800",
      },
      {
        id: "indigenous",
        title: "Indigenous Communities",
        content:
          "The Andaman & Nicobar Islands are home to some of the world's last remaining uncontacted and voluntarily isolated peoples. The Sentinelese inhabit North Sentinel Island and have rejected all outside contact for an estimated 60,000 years — they are among the most isolated peoples on Earth, and the Indian government enforces a strict no-contact policy (a 5 km exclusion zone). The Jarawa people (~500) of South and Middle Andaman emerged from isolation in 1998 and remain vulnerable. The Great Andamanese (originally 5,000+ across 10 tribes, now just ~50 individuals) and the Onge (~100 on Little Andaman) have suffered devastating population decline since British colonisation. The Nicobar Islands are home to the Shompen (~200, semi-nomadic hunter-gatherers in Great Nicobar's interior) and the Nicobarese (30,000+, the most assimilated group). These tribes represent some of the earliest human migrations out of Africa and carry genetic lineages found nowhere else. India's Tribal Affairs Ministry and the Andaman Trunk Road controversy have brought global attention to indigenous rights in these islands.",
      },
    ],
    facts: [
      { label: "Andaman & Nicobar", value: "572 islands (37 inhabited)" },
      {
        label: "Lakshadweep",
        value: "36 atolls (10 inhabited), 32 sq km land",
      },
      { label: "Active Volcano", value: "Barren Island (erupted 2017)" },
      { label: "Coastline", value: "2,000+ km combined" },
      { label: "Coral Reef Area", value: "~2,375 sq km" },
      { label: "Endemic Bird Species", value: "99 subspecies" },
      { label: "Dugong Population", value: "~200 (India's only)" },
      {
        label: "Sentinelese",
        value: "One of Earth's last uncontacted peoples",
      },
    ],
    vegetation: {
      id: "vegetation",
      title: "Vegetation & Rainforests",
      content:
        "India's island territories possess some of the most pristine and unique vegetation in the country — over 86% of the Andaman & Nicobar Islands are under forest cover (vs. 24% national average), protected by their remoteness and strict regulations. The Andamans are covered in tropical evergreen and semi-evergreen rainforests with towering dipterocarp trees forming a 40–50 m canopy — below them, a dense layer of climbers, epiphytes, ferns, and orchids creates a cathedral-like atmosphere. The islands host over 2,200 vascular plant species, including 200+ endemics. The Andaman Padauk (Pterocarpus dalbergioides) is a prized endemic hardwood with a distinctive red grain — once heavily logged by the British, it is now protected. Gurjan (Dipterocarpus) and marble wood are other valuable endemic timbers. Mangrove forests fringe the coastlines, with the Andaman creeks containing 35 mangrove species. Lakshadweep's coral atolls support coconut palms (covering 2,600+ hectares — almost 90% of agricultural land), breadfruit, pandanus, and sea grasses that are vital for dugong survival. The Nicobar Islands harbour tropical wet evergreen forests with giant ferns and cane palms unique to the region — including the Nicobar breadfruit and Andaman bullet wood found only in these archipelagos.",
      imageUrl:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    },
    agriculture: {
      id: "agriculture",
      title: "Agriculture & Island Economy",
      content:
        "Island agriculture is shaped by limited land, remoteness, and the need to protect fragile ecosystems. Coconut is the dominant crop across both island groups — Lakshadweep's entire economy revolves around coconut products: copra (dried coconut kernel), coconut oil (including premium virgin coconut oil), coir (fibre), and neera (sweet toddy). The Andaman & Nicobar Islands grow rice in cleared valley bottoms (5,000+ hectares), alongside plantation crops like arecanut, rubber (1,500 hectares), and oil palm. The tropical climate supports high-value spice cultivation — black pepper, clove, cinnamon, and nutmeg are grown in the Andamans, contributing to India's spice exports. Fruits include banana, papaya, pineapple, and exotic species like mangosteen, rambutan, and durian introduced during the Japanese occupation in WWII. Marine fisheries are the mainstay — Lakshadweep is famous for skipjack tuna (both fresh and dried), landed using traditional pole-and-line methods that are among the world's most sustainable fishing practices. The Andaman Sea yields grouper, reef fish, lobster, and sea cucumber. Total fish production from both island groups exceeds 40,000 tonnes annually. The Indian government limits commercial fishing in island waters to protect coral reef ecosystems and indigenous communities' traditional fishing rights.",
      imageUrl:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800",
    },
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
