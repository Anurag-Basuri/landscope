import { Wildlife } from "./types";

export const wildlife: Wildlife[] = [
  /* ═══════════════════════════════════════════
     HIMALAYAN MOUNTAINS — FLORA
     ═══════════════════════════════════════════ */
  {
    slug: "rhododendron",
    name: "Rhododendron",
    scientificName: "Rhododendron arboreum",
    type: "flora",
    category: "Tree",
    imageUrl:
      "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=600",
    description:
      "The national flower of Nepal and the state tree of Uttarakhand, Rhododendron is a spectacular flowering tree found in the Himalayan forests between 1,500–3,600 m altitude. Its crimson blossoms carpet the hillsides from March to May, creating one of the most iconic sights of the Himalayas.",
    habitat:
      "Temperate and sub-alpine forests of the Himalayas (1,500–3,600 m)",
    landformSlugs: ["himalayan-mountains"],
  },
  {
    slug: "deodar-cedar",
    name: "Deodar Cedar",
    scientificName: "Cedrus deodara",
    type: "flora",
    category: "Tree",
    imageUrl:
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=600",
    description:
      "The Deodar Cedar, meaning 'timber of the gods' in Sanskrit, is a majestic conifer native to the western Himalayas. Growing up to 60 m tall, its drooping branches and fragrant wood have made it sacred across Indian culture. It is the state tree of Himachal Pradesh.",
    habitat: "Western Himalayan forests between 1,500–3,200 m altitude",
    landformSlugs: ["himalayan-mountains"],
  },
  {
    slug: "blue-pine",
    name: "Blue Pine",
    scientificName: "Pinus wallichiana",
    type: "flora",
    category: "Tree",
    imageUrl:
      "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=600",
    description:
      "Blue Pine (Bhutan Pine) is a tall coniferous tree with distinctive blue-green needles and long hanging cones. It thrives in the temperate Himalayas and is important for timber and resin production.",
    habitat: "Temperate Himalayan forests, 1,800–4,000 m",
    landformSlugs: ["himalayan-mountains"],
  },
  {
    slug: "himalayan-orchid",
    name: "Himalayan Orchid",
    scientificName: "Vanda coerulea",
    type: "flora",
    category: "Flower",
    imageUrl:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600",
    description:
      "The Blue Vanda orchid, found in the eastern Himalayas, is one of India's rarest and most beautiful flowers. Its striking blue petals make it highly prized. The species is protected under CITES due to over-collection.",
    habitat:
      "Moist deciduous and semi-evergreen forests, NE India, 800–1,700 m",
    conservationStatus: "Endangered",
    landformSlugs: ["himalayan-mountains"],
  },

  /* HIMALAYAN MOUNTAINS — FAUNA */
  {
    slug: "snow-leopard",
    name: "Snow Leopard",
    scientificName: "Panthera uncia",
    type: "fauna",
    category: "Mammal",
    imageUrl:
      "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=600",
    description:
      "The 'Ghost of the Mountains,' the snow leopard is one of the world's most elusive big cats. Perfectly adapted to the cold, rugged terrain of the high Himalayas, it has thick fur, wide paws for walking on snow, and a long tail for balance. India hosts approximately 700 snow leopards across Ladakh, Spiti, and Sikkim.",
    habitat: "Alpine and subalpine zones above 3,000 m",
    conservationStatus: "Vulnerable",
    landformSlugs: ["himalayan-mountains"],
  },
  {
    slug: "red-panda",
    name: "Red Panda",
    scientificName: "Ailurus fulgens",
    type: "fauna",
    category: "Mammal",
    imageUrl:
      "https://images.unsplash.com/photo-1590691566903-692bf5ca7493?w=600",
    description:
      "The red panda, with its rust-colored fur and bushy ringed tail, inhabits the temperate forests of the eastern Himalayas. It is arboreal, spending most of its time in trees feeding on bamboo, berries, and insects. India's population is concentrated in Sikkim, Arunachal Pradesh, and West Bengal.",
    habitat: "Temperate broadleaf forests with bamboo, 2,200–4,800 m",
    conservationStatus: "Endangered",
    landformSlugs: ["himalayan-mountains"],
  },
  {
    slug: "himalayan-monal",
    name: "Himalayan Monal",
    scientificName: "Lophophorus impejanus",
    type: "fauna",
    category: "Bird",
    imageUrl:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600",
    description:
      "The Himalayan Monal is a stunning pheasant with iridescent plumage flashing green, purple, blue, and copper. It is the national bird of Nepal and the state bird of Uttarakhand. Found in coniferous and mixed forests, it digs through snow to find roots, tubers, and insects.",
    habitat: "Himalayan coniferous and oak forests, 2,100–4,500 m",
    landformSlugs: ["himalayan-mountains"],
  },
  {
    slug: "markhor",
    name: "Markhor",
    scientificName: "Capra falconeri",
    type: "fauna",
    category: "Mammal",
    imageUrl:
      "https://images.unsplash.com/photo-1518882515711-f614d0e57795?w=600",
    description:
      "The markhor, with its magnificent spiralling horns, is the largest wild goat species. Found in the western Himalayas (Pir Panjal range in J&K), it inhabits steep, rocky terrain. Its name means 'snake eater' in Persian, though it actually feeds on grass, leaves, and twigs.",
    habitat: "Rocky mountainous regions, 600–3,600 m",
    conservationStatus: "Near Threatened",
    landformSlugs: ["himalayan-mountains"],
  },

  /* ═══════════════════════════════════════════
     NORTHERN PLAINS — FLORA
     ═══════════════════════════════════════════ */
  {
    slug: "banyan-tree",
    name: "Banyan Tree",
    scientificName: "Ficus benghalensis",
    type: "flora",
    category: "Tree",
    imageUrl:
      "https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?w=600",
    description:
      "India's national tree, the Banyan is one of the world's largest trees by canopy area. Its aerial roots grow into thick woody trunks, allowing a single tree to spread over several acres. The Great Banyan in Kolkata's botanical garden covers over 14,500 sq m.",
    habitat: "Tropical and subtropical plains, lowland forests",
    landformSlugs: ["northern-plains", "peninsular-plateau"],
  },
  {
    slug: "peepal-tree",
    name: "Peepal Tree",
    scientificName: "Ficus religiosa",
    type: "flora",
    category: "Tree",
    imageUrl:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600",
    description:
      "Sacred across Hinduism, Buddhism, and Jainism, the Peepal tree is unique for releasing oxygen even at night. Its heart-shaped leaves tremble with the slightest breeze. It is under this species that Siddhartha Gautama attained enlightenment.",
    habitat: "Tropical and subtropical plains, up to 1,500 m",
    landformSlugs: ["northern-plains", "peninsular-plateau"],
  },
  {
    slug: "mango-tree",
    name: "Mango Tree",
    scientificName: "Mangifera indica",
    type: "flora",
    category: "Tree",
    imageUrl: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=600",
    description:
      "India is the world's largest producer of mangoes, and the mango tree has been cultivated for over 4,000 years. Over 1,500 varieties exist in India including Alphonso, Dasheri, and Langra. The tree provides fruit, shade, and timber.",
    habitat: "Tropical and subtropical lowlands, alluvial plains",
    landformSlugs: ["northern-plains"],
  },
  {
    slug: "teak",
    name: "Teak",
    scientificName: "Tectona grandis",
    type: "flora",
    category: "Tree",
    imageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600",
    description:
      "Teak is one of the world's most valuable hardwoods, prized for its durability and resistance to decay. Native to India, teak forests dominated the moist deciduous zones of central and southern India. The wood is extensively used in shipbuilding, furniture, and construction.",
    habitat: "Moist deciduous forests, tropical lowlands",
    landformSlugs: ["northern-plains", "peninsular-plateau"],
  },

  /* NORTHERN PLAINS — FAUNA */
  {
    slug: "gangetic-dolphin",
    name: "Gangetic River Dolphin",
    scientificName: "Platanista gangetica",
    type: "fauna",
    category: "Mammal",
    imageUrl:
      "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=600",
    description:
      "India's national aquatic animal, the Gangetic dolphin is a freshwater species that is essentially blind, navigating by echolocation. Found in the Ganga-Brahmaputra river system, its population has declined due to pollution, dams, and habitat loss. Fewer than 2,000 remain in the wild.",
    habitat: "Deep river pools of the Ganga-Brahmaputra system",
    conservationStatus: "Endangered",
    landformSlugs: ["northern-plains"],
  },
  {
    slug: "indian-rhinoceros",
    name: "Indian One-Horned Rhinoceros",
    scientificName: "Rhinoceros unicornis",
    type: "fauna",
    category: "Mammal",
    imageUrl:
      "https://images.unsplash.com/photo-1535338454528-1b22a4d9fdb0?w=600",
    description:
      "The greater one-horned rhinoceros is the largest of Asia's rhino species. Once widespread across the Indo-Gangetic Plain, it now survives mainly in Kaziranga National Park (Assam) and Dudhwa National Park (UP). Conservation efforts have increased its population from ~200 in 1900 to ~3,500 today.",
    habitat:
      "Alluvial floodplains, grasslands, and swamps of the northern plains",
    conservationStatus: "Vulnerable",
    landformSlugs: ["northern-plains"],
  },
  {
    slug: "bengal-florican",
    name: "Bengal Florican",
    scientificName: "Houbaropsis bengalensis",
    type: "fauna",
    category: "Bird",
    imageUrl:
      "https://images.unsplash.com/photo-1480044965905-02098d419e96?w=600",
    description:
      "One of the world's rarest bustards, the Bengal Florican is found in the grasslands of the Terai region. Males perform spectacular leaping displays during breeding season. Fewer than 500 remain globally, making it critically endangered.",
    habitat: "Alluvial grasslands and open scrubland of the Terai",
    conservationStatus: "Critically Endangered",
    landformSlugs: ["northern-plains"],
  },
  {
    slug: "nilgai",
    name: "Nilgai",
    scientificName: "Boselaphus tragocamelus",
    type: "fauna",
    category: "Mammal",
    imageUrl:
      "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600",
    description:
      "Asia's largest antelope, the nilgai (blue bull) is commonly seen across the northern plains and peninsular India. Males have a distinctive blue-grey coat while females are brown. They are often found near agricultural fields and scrublands.",
    habitat: "Plains, scrublands, and deciduous forests",
    landformSlugs: ["northern-plains", "peninsular-plateau"],
  },

  /* ═══════════════════════════════════════════
     PENINSULAR PLATEAU — FLORA
     ═══════════════════════════════════════════ */
  {
    slug: "sandalwood",
    name: "Sandalwood",
    scientificName: "Santalum album",
    type: "flora",
    category: "Tree",
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600",
    description:
      "Indian Sandalwood is one of the most expensive woods in the world, prized for its fragrant heartwood and essential oil. Native to the southern Deccan Plateau (Karnataka, Tamil Nadu, Kerala), it is used in perfumery, traditional medicine, and religious rituals. Smuggling has severely reduced wild populations.",
    habitat: "Dry deciduous forests of the Deccan Plateau, 600–900 m",
    conservationStatus: "Vulnerable",
    landformSlugs: ["peninsular-plateau"],
  },
  {
    slug: "bamboo",
    name: "Bamboo",
    scientificName: "Bambusa spp.",
    type: "flora",
    category: "Grass",
    imageUrl: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600",
    description:
      "India is the world's second-largest producer of bamboo. These giant grasses can grow up to 30 m tall and play a crucial role in the economy of tribal communities. The Western Ghats and northeastern regions are particularly rich in bamboo species.",
    habitat: "Moist deciduous forests, Western Ghats, northeastern hills",
    landformSlugs: ["peninsular-plateau"],
  },
  {
    slug: "rosewood",
    name: "Indian Rosewood",
    scientificName: "Dalbergia latifolia",
    type: "flora",
    category: "Tree",
    imageUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600",
    description:
      "Indian Rosewood is a premium hardwood found in the Western Ghats and southern plateau. Its dark, richly grained wood is used for high-end furniture, musical instruments, and carving. It is a slow-growing species that takes 50+ years to mature.",
    habitat: "Moist and dry deciduous forests of the Western Ghats",
    conservationStatus: "Vulnerable",
    landformSlugs: ["peninsular-plateau"],
  },

  /* PENINSULAR PLATEAU — FAUNA */
  {
    slug: "indian-elephant",
    name: "Indian Elephant",
    scientificName: "Elephas maximus indicus",
    type: "fauna",
    category: "Mammal",
    imageUrl: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=600",
    description:
      "The Indian elephant, smaller than its African cousin, is culturally and ecologically vital. It inhabits the forests of the Western Ghats, eastern India, and the northeast. India has the world's largest population of Asian elephants (~27,000). Elephants are revered as Ganesha in Hindu culture.",
    habitat: "Tropical evergreen, semi-evergreen, and deciduous forests",
    conservationStatus: "Endangered",
    landformSlugs: ["peninsular-plateau"],
  },
  {
    slug: "bengal-tiger",
    name: "Bengal Tiger",
    scientificName: "Panthera tigris tigris",
    type: "fauna",
    category: "Mammal",
    imageUrl: "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?w=600",
    description:
      "India's national animal, the Bengal tiger is the most numerous tiger subspecies. India hosts over 3,600 tigers — the largest population globally. Project Tiger, launched in 1973, established 54 tiger reserves. Key habitats include Ranthambore, Bandipur, and Sundarbans.",
    habitat: "Deciduous forests, mangroves, grasslands, and tropical forests",
    conservationStatus: "Endangered",
    landformSlugs: ["peninsular-plateau", "northern-plains"],
  },
  {
    slug: "nilgiri-tahr",
    name: "Nilgiri Tahr",
    scientificName: "Nilgiritragus hylocrius",
    type: "fauna",
    category: "Mammal",
    imageUrl:
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600",
    description:
      "The Nilgiri Tahr is a stocky wild goat endemic to the higher elevations of the Western Ghats. Found only in south India (Kerala, Tamil Nadu, Karnataka), it inhabits montane grasslands above 1,200 m. Eravikulam National Park protects the largest population (~800 individuals).",
    habitat: "Montane grasslands and rocky cliffs of the Western Ghats",
    conservationStatus: "Endangered",
    landformSlugs: ["peninsular-plateau"],
  },
  {
    slug: "lion-tailed-macaque",
    name: "Lion-Tailed Macaque",
    scientificName: "Macaca silenus",
    type: "fauna",
    category: "Mammal",
    imageUrl:
      "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=600",
    description:
      "One of the world's most endangered primates, the lion-tailed macaque is endemic to the Western Ghats. Its distinctive silver mane and dark fur make it unmistakable. Only about 4,000 remain in fragmented forest patches across Kerala, Karnataka, and Tamil Nadu.",
    habitat: "Tropical evergreen forests of the Western Ghats",
    conservationStatus: "Endangered",
    landformSlugs: ["peninsular-plateau"],
  },

  /* ═══════════════════════════════════════════
     THAR DESERT — FLORA
     ═══════════════════════════════════════════ */
  {
    slug: "khejri-tree",
    name: "Khejri Tree",
    scientificName: "Prosopis cineraria",
    type: "flora",
    category: "Tree",
    imageUrl:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600",
    description:
      "The Khejri is the state tree of Rajasthan and the most important tree of the Thar Desert. It fixes nitrogen in the soil, its leaves provide fodder, and its pods (sangri) are a local delicacy. The tree is sacred — the Bishnoi community famously sacrificed their lives to protect Khejri trees in 1730.",
    habitat: "Arid and semi-arid sandy plains of the Thar Desert",
    landformSlugs: ["thar-desert"],
  },
  {
    slug: "babool",
    name: "Babool",
    scientificName: "Vachellia nilotica",
    type: "flora",
    category: "Tree",
    imageUrl:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600",
    description:
      "Babool (Indian Gum Arabic Tree) is a thorny, drought-resistant tree widespread in the Thar Desert. Its gum, bark, and pods have medicinal uses. The wood is hard and durable, used for fuel, fencing, and rural construction.",
    habitat: "Arid plains, riverbanks, and saline soils",
    landformSlugs: ["thar-desert"],
  },
  {
    slug: "cactus",
    name: "Prickly Pear Cactus",
    scientificName: "Opuntia ficus-indica",
    type: "flora",
    category: "Succulent",
    imageUrl:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600",
    description:
      "Though originally from the Americas, the prickly pear cactus has naturalized widely in the Thar Desert. Its flat, paddle-shaped pads store water, and its fruits are edible. It serves as natural fencing and prevents soil erosion in arid regions.",
    habitat: "Sandy and rocky arid terrains",
    landformSlugs: ["thar-desert"],
  },
  {
    slug: "date-palm",
    name: "Date Palm",
    scientificName: "Phoenix dactylifera",
    type: "flora",
    category: "Tree",
    imageUrl:
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600",
    description:
      "Date palms thrive around oases and irrigated areas of the Thar Desert. Their sweet fruits are a staple food, and the trees provide shade in an otherwise barren landscape. Kutch and Jaisalmer districts have significant date palm cultivation.",
    habitat: "Oases, irrigated areas, and semi-arid regions",
    landformSlugs: ["thar-desert"],
  },

  /* THAR DESERT — FAUNA */
  {
    slug: "great-indian-bustard",
    name: "Great Indian Bustard",
    scientificName: "Ardeotis nigriceps",
    type: "fauna",
    category: "Bird",
    imageUrl:
      "https://images.unsplash.com/photo-1480044965905-02098d419e96?w=600",
    description:
      "One of the heaviest flying birds in the world, the Great Indian Bustard was once a candidate for India's national bird. Now critically endangered with fewer than 150 remaining, it is found mostly in the Desert National Park near Jaisalmer. Collision with power lines is its chief modern threat.",
    habitat: "Arid grasslands and scrublands of western Rajasthan",
    conservationStatus: "Critically Endangered",
    landformSlugs: ["thar-desert"],
  },
  {
    slug: "indian-wild-ass",
    name: "Indian Wild Ass",
    scientificName: "Equus hemionus khur",
    type: "fauna",
    category: "Mammal",
    imageUrl: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600",
    description:
      "Also known as the Khur, the Indian Wild Ass is found exclusively in the Little Rann of Kutch (Gujarat). It can run at speeds up to 70 km/h. Once near extinction (~400 in the 1960s), conservation has brought its numbers to over 6,000.",
    habitat: "Saline deserts, grasslands, and shrublands of the Rann of Kutch",
    conservationStatus: "Near Threatened",
    landformSlugs: ["thar-desert"],
  },
  {
    slug: "desert-fox",
    name: "Indian Desert Fox",
    scientificName: "Vulpes vulpes pusilla",
    type: "fauna",
    category: "Mammal",
    imageUrl:
      "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600",
    description:
      "The Indian Desert Fox is a small, agile predator with large ears adapted for heat dissipation in the desert. It feeds on rodents, insects, and small reptiles. Mostly nocturnal, it can be spotted at dusk near sand dunes in Jaisalmer and Jodhpur districts.",
    habitat: "Sand dunes, scrublands, and rocky terrain of the Thar Desert",
    landformSlugs: ["thar-desert"],
  },
  {
    slug: "chinkara",
    name: "Chinkara (Indian Gazelle)",
    scientificName: "Gazella bennettii",
    type: "fauna",
    category: "Mammal",
    imageUrl:
      "https://images.unsplash.com/photo-1484406566174-437a054e2f07?w=600",
    description:
      "The chinkara is a graceful, slender gazelle that thrives in arid environments. It can survive without water for long periods, obtaining moisture from plants and dew. It is the state animal of Rajasthan and is protected under the Bishnoi community's conservation traditions.",
    habitat: "Arid plains, light forests, and sand dunes",
    landformSlugs: ["thar-desert"],
  },

  /* ═══════════════════════════════════════════
     COASTAL PLAINS — FLORA
     ═══════════════════════════════════════════ */
  {
    slug: "coconut-palm",
    name: "Coconut Palm",
    scientificName: "Cocos nucifera",
    type: "flora",
    category: "Tree",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
    description:
      "Called the 'Tree of Life,' the coconut palm is ubiquitous along India's coasts. Kerala is the largest coconut-producing state. Every part of the tree is used — fruit for food and oil, husk for coir, leaves for thatch, and trunk for construction.",
    habitat: "Sandy coastal soils, tropical lowlands",
    landformSlugs: ["coastal-plains", "islands"],
  },
  {
    slug: "mangrove",
    name: "Mangrove",
    scientificName: "Rhizophora spp.",
    type: "flora",
    category: "Tree",
    imageUrl:
      "https://images.unsplash.com/photo-1518882515711-f614d0e57795?w=600",
    description:
      "Mangroves are salt-tolerant trees that form dense coastal forests in tidal zones. The Sundarbans (West Bengal) is the world's largest mangrove forest. Mangroves protect coastlines from erosion and storms, serve as fish nurseries, and sequester carbon at rates 3–5× higher than terrestrial forests.",
    habitat: "Tidal mudflats, estuaries, and coastal lagoons",
    landformSlugs: ["coastal-plains", "islands"],
  },
  {
    slug: "casuarina",
    name: "Casuarina",
    scientificName: "Casuarina equisetifolia",
    type: "flora",
    category: "Tree",
    imageUrl:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600",
    description:
      "Casuarina trees are fast-growing coastal species planted extensively along India's eastern coast for wind-breaking and sand dune stabilisation. Their needle-like foliage and deep roots make them ideal for preventing coastal erosion.",
    habitat: "Sandy coastal plains, dunes, and shorelines",
    landformSlugs: ["coastal-plains"],
  },
  {
    slug: "palm-tree",
    name: "Palmyra Palm",
    scientificName: "Borassus flabellifer",
    type: "flora",
    category: "Tree",
    imageUrl:
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600",
    description:
      "The Palmyra Palm or Toddy Palm is iconic along the Coromandel Coast (Tamil Nadu). It provides palm sugar (jaggery), toddy (a fermented drink), fibre, and construction material. It is Tamil Nadu's state tree.",
    habitat: "Eastern coastal plains, semi-arid tropical lowlands",
    landformSlugs: ["coastal-plains"],
  },

  /* COASTAL PLAINS — FAUNA */
  {
    slug: "olive-ridley-turtle",
    name: "Olive Ridley Sea Turtle",
    scientificName: "Lepidochelys olivacea",
    type: "fauna",
    category: "Reptile",
    imageUrl:
      "https://images.unsplash.com/photo-1518467166681-9e0e0b4b8c48?w=600",
    description:
      "Every year, hundreds of thousands of Olive Ridley turtles arrive at Gahirmatha and Rushikulya beaches in Odisha for mass nesting (Arribada). It is the world's largest aggregation of any sea turtle species. Conservation efforts have protected nesting beaches from fishing and light pollution.",
    habitat: "Tropical ocean waters; nests on sandy beaches",
    conservationStatus: "Vulnerable",
    landformSlugs: ["coastal-plains"],
  },
  {
    slug: "kingfisher",
    name: "White-Throated Kingfisher",
    scientificName: "Halcyon smyrnensis",
    type: "fauna",
    category: "Bird",
    imageUrl:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600",
    description:
      "One of India's most recognisable birds, the White-Throated Kingfisher has a brilliant turquoise-blue back and chocolate-brown head. Unlike many kingfishers, it often hunts far from water, catching insects, lizards, and frogs in coastal scrublands.",
    habitat: "Coastal wetlands, mangroves, rivers, and agricultural fields",
    landformSlugs: ["coastal-plains", "northern-plains"],
  },
  {
    slug: "mudskipper",
    name: "Mudskipper",
    scientificName: "Periophthalmus spp.",
    type: "fauna",
    category: "Fish",
    imageUrl:
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=600",
    description:
      "Mudskippers are remarkable fish that spend significant time out of water, 'walking' on mudflats using their pectoral fins. Found in mangrove and tidal areas along both Indian coasts, they can breathe through their skin and survive in burrows during low tide.",
    habitat: "Mangrove mudflats, tidal pools, and estuaries",
    landformSlugs: ["coastal-plains"],
  },
  {
    slug: "flamingo",
    name: "Greater Flamingo",
    scientificName: "Phoenicopterus roseus",
    type: "fauna",
    category: "Bird",
    imageUrl:
      "https://images.unsplash.com/photo-1497206365907-f5e630693df0?w=600",
    description:
      "The Greater Flamingo visits India's western coast in thousands during winter. The Rann of Kutch is a key breeding site, while Thane Creek Flamingo Sanctuary near Mumbai hosts up to 120,000 flamingos annually. Their pink coloration comes from carotenoids in the crustaceans they eat.",
    habitat: "Coastal lagoons, salt pans, mudflats, and brackish lakes",
    landformSlugs: ["coastal-plains", "thar-desert"],
  },

  /* ═══════════════════════════════════════════
     ISLANDS — FLORA
     ═══════════════════════════════════════════ */
  {
    slug: "padauk-tree",
    name: "Andaman Padauk",
    scientificName: "Pterocarpus dalbergioides",
    type: "flora",
    category: "Tree",
    imageUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600",
    description:
      "The Andaman Padauk is an endemic tree of the Andaman Islands, producing highly valued reddish timber. It grows up to 30 m tall in the island's tropical evergreen forests. Once heavily logged, it is now protected under conservation regulations.",
    habitat: "Tropical evergreen forests of the Andaman Islands",
    landformSlugs: ["islands"],
  },
  {
    slug: "tropical-evergreen",
    name: "Tropical Evergreen Forest",
    scientificName: "Mixed spp.",
    type: "flora",
    category: "Forest Ecosystem",
    imageUrl:
      "https://images.unsplash.com/photo-1511497584788-876760111969?w=600",
    description:
      "The Andaman & Nicobar Islands host dense tropical evergreen forests that cover over 86% of the islands' land area. These forests contain over 2,200 plant species, 200 of which are endemic. The canopy is 40–50 m tall with multiple layers of vegetation.",
    habitat: "Andaman & Nicobar Islands, sea level to 700 m",
    landformSlugs: ["islands"],
  },

  /* ISLANDS — FAUNA */
  {
    slug: "dugong",
    name: "Dugong",
    scientificName: "Dugong dugon",
    type: "fauna",
    category: "Mammal",
    imageUrl:
      "https://images.unsplash.com/photo-1518882515711-f614d0e57795?w=600",
    description:
      "The dugong (sea cow) is a gentle marine herbivore that grazes on seagrass beds around the Andaman & Nicobar Islands and the Gulf of Mannar. India has only about 250 dugongs left, primarily in the Andamans. It is India's only marine herbivorous mammal.",
    habitat: "Shallow coastal waters with seagrass beds",
    conservationStatus: "Vulnerable",
    landformSlugs: ["islands"],
  },
  {
    slug: "saltwater-crocodile",
    name: "Saltwater Crocodile",
    scientificName: "Crocodylus porosus",
    type: "fauna",
    category: "Reptile",
    imageUrl: "https://images.unsplash.com/photo-1551189014-fe516aed0e9e?w=600",
    description:
      "The world's largest living reptile, the saltwater crocodile can grow over 6 m long. The Andaman & Nicobar Islands and the Sundarbans host significant populations. Despite their fearsome reputation, they are vital apex predators maintaining ecosystem balance.",
    habitat: "Mangrove swamps, estuaries, and coastal waters",
    landformSlugs: ["islands", "coastal-plains"],
  },
  {
    slug: "nicobar-pigeon",
    name: "Nicobar Pigeon",
    scientificName: "Caloenas nicobarica",
    type: "fauna",
    category: "Bird",
    imageUrl:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600",
    description:
      "The Nicobar Pigeon, with its shimmering metallic green, copper, and blue plumage, is among the most beautiful pigeons in the world. Found on small, wooded islands of the Nicobar group, it is the closest living relative of the extinct Dodo.",
    habitat: "Uninhabited or undisturbed small islands with dense forest",
    conservationStatus: "Near Threatened",
    landformSlugs: ["islands"],
  },
  {
    slug: "leatherback-turtle",
    name: "Leatherback Sea Turtle",
    scientificName: "Dermochelys coriacea",
    type: "fauna",
    category: "Reptile",
    imageUrl:
      "https://images.unsplash.com/photo-1518467166681-9e0e0b4b8c48?w=600",
    description:
      "The leatherback is the world's largest turtle (up to 700 kg) and the most migratory. The Nicobar Islands are one of its few nesting sites in India. Unlike other sea turtles, it has a flexible, leather-like shell. It can dive over 1,000 m deep.",
    habitat: "Open ocean; nests on sandy beaches of the Nicobar Islands",
    conservationStatus: "Vulnerable",
    landformSlugs: ["islands"],
  },
];

export function getWildlifeBySlug(slug: string): Wildlife | undefined {
  return wildlife.find((w) => w.slug === slug);
}

export function getWildlifeByLandform(landformSlug: string): Wildlife[] {
  return wildlife.filter((w) => w.landformSlugs.includes(landformSlug));
}

export function getFloraByLandform(landformSlug: string): Wildlife[] {
  return wildlife.filter(
    (w) => w.type === "flora" && w.landformSlugs.includes(landformSlug),
  );
}

export function getFaunaByLandform(landformSlug: string): Wildlife[] {
  return wildlife.filter(
    (w) => w.type === "fauna" && w.landformSlugs.includes(landformSlug),
  );
}
