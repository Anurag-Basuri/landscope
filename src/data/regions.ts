import { RegionGroup } from "./types";

export const regionGroups: RegionGroup[] = [
  {
    id: "himalayan-mountains",
    landformSlug: "himalayan-mountains",
    label: "Himalayan Mountains",
    color: "#8b5cf6",
    bright: "#a78bfa",
    dim: "#8b5cf620",
    states: [
      "Jammu & Kashmir",
      "Ladakh",
      "Himachal Pradesh",
      "Uttarakhand",
      "Sikkim",
      "Arunachal Pradesh",
    ],
    subregions: [
      {
        id: "western-himalaya",
        label: "Western Himalaya",
        description:
          "Snow-bound ranges with high passes, deep valleys, and trans-Himalayan plateaus.",
        states: ["Jammu & Kashmir", "Ladakh", "Himachal Pradesh"],
        highlights: [
          "Karakoram and Zanskar ranges",
          "High altitude cold deserts",
          "Key passes and pilgrimage routes",
        ],
        color: "#8b5cf6",
      },
      {
        id: "central-himalaya",
        label: "Central Himalaya",
        description:
          "Glacial valleys, alpine meadows, and the headwaters of the Ganga system.",
        states: ["Uttarakhand"],
        highlights: [
          "Valley of Flowers and Nanda Devi",
          "Dense temperate forests",
          "Glaciers and sacred rivers",
        ],
        color: "#a78bfa",
      },
      {
        id: "eastern-himalaya",
        label: "Eastern Himalaya",
        description:
          "Steep, rain-fed slopes with dense biodiversity and vibrant cultural corridors.",
        states: ["Sikkim", "Arunachal Pradesh"],
        highlights: [
          "Khangchendzonga landscapes",
          "Orchid-rich forests",
          "Highest rainfall belts",
        ],
        color: "#c4b5fd",
      },
    ],
  },
  {
    id: "northern-plains",
    landformSlug: "northern-plains",
    label: "Northern Plains",
    color: "#10b981",
    bright: "#34d399",
    dim: "#10b98120",
    states: [
      "Punjab",
      "Haryana",
      "Delhi",
      "Chandigarh",
      "Uttar Pradesh",
      "Bihar",
      "West Bengal",
      "Assam",
      "Meghalaya",
      "Tripura",
      "Manipur",
      "Mizoram",
      "Nagaland",
    ],
    subregions: [
      {
        id: "punjab-haryana-plains",
        label: "Punjab-Haryana Plains",
        description:
          "Alluvial plains shaped by the Indus tributaries and intensive irrigation.",
        states: ["Punjab", "Haryana", "Delhi", "Chandigarh"],
        highlights: [
          "Canal-irrigated agriculture",
          "Wheat and rice belt",
          "High population density",
        ],
        color: "#10b981",
      },
      {
        id: "ganga-plains",
        label: "Ganga Plains",
        description:
          "Broad river basins with fertile soils and historic settlement belts.",
        states: ["Uttar Pradesh", "Bihar", "West Bengal"],
        highlights: [
          "Major Ganga tributaries",
          "Floodplain agriculture",
          "Cultural heritage cities",
        ],
        color: "#34d399",
      },
      {
        id: "brahmaputra-valley",
        label: "Brahmaputra Valley",
        description:
          "Wide braided river systems with wetlands, grasslands, and tea estates.",
        states: [
          "Assam",
          "Meghalaya",
          "Tripura",
          "Manipur",
          "Mizoram",
          "Nagaland",
        ],
        highlights: [
          "River island landscapes",
          "Monsoon-driven flood cycles",
          "Biodiversity-rich wetlands",
        ],
        color: "#6ee7b7",
      },
    ],
  },
  {
    id: "thar-desert",
    landformSlug: "thar-desert",
    label: "Thar Desert",
    color: "#f59e0b",
    bright: "#fbbf24",
    dim: "#f59e0b20",
    states: ["Rajasthan"],
    subregions: [
      {
        id: "marusthali",
        label: "Marusthali Core",
        description:
          "The driest dune fields with shifting sands and sparse vegetation.",
        states: ["Rajasthan"],
        highlights: [
          "Active sand dunes",
          "Extreme arid climate",
          "Nomadic pastoral routes",
        ],
        color: "#f59e0b",
      },
      {
        id: "semi-arid-fringe",
        label: "Semi-arid Fringe",
        description:
          "Transitional zone with scrubland, rain-fed farming, and settlements.",
        states: ["Rajasthan"],
        highlights: [
          "Kharif millet belts",
          "Saline depressions",
          "Wind-shaped landforms",
        ],
        color: "#fbbf24",
      },
      {
        id: "salt-lake-belt",
        label: "Salt Lake Belt",
        description:
          "Seasonal playas and salt pans that shape desert hydrology.",
        states: ["Rajasthan"],
        highlights: [
          "Sambhar and Didwana lakes",
          "Salt extraction landscapes",
          "Seasonal wetland habitat",
        ],
        color: "#fde68a",
      },
    ],
  },
  {
    id: "peninsular-plateau",
    landformSlug: "peninsular-plateau",
    label: "Peninsular Plateau",
    color: "#f97316",
    bright: "#fb923c",
    dim: "#f9731620",
    states: [
      "Madhya Pradesh",
      "Chhattisgarh",
      "Jharkhand",
      "Maharashtra",
      "Telangana",
      "Karnataka",
    ],
    subregions: [
      {
        id: "central-highlands",
        label: "Central Highlands",
        description:
          "Ancient plateaus and river basins with forests and mineral belts.",
        states: ["Madhya Pradesh", "Chhattisgarh"],
        highlights: [
          "Vindhya and Satpura ranges",
          "Mixed deciduous forests",
          "River gorges and dams",
        ],
        color: "#f97316",
      },
      {
        id: "chota-nagpur",
        label: "Chota Nagpur Plateau",
        description:
          "Mineral-rich uplands with rolling hills and industrial corridors.",
        states: ["Jharkhand"],
        highlights: [
          "Coal and iron ore belts",
          "Waterfall landscapes",
          "Tribal cultural regions",
        ],
        color: "#fb923c",
      },
      {
        id: "deccan-interior",
        label: "Deccan Interior",
        description: "Basaltic plateaus, black soils, and semi-arid basins.",
        states: ["Maharashtra", "Telangana", "Karnataka"],
        highlights: [
          "Black cotton soil",
          "Monsoon-fed rivers",
          "Rock-cut heritage sites",
        ],
        color: "#fdba74",
      },
    ],
  },
  {
    id: "coastal-plains",
    landformSlug: "coastal-plains",
    label: "Coastal Plains",
    color: "#0ea5e9",
    bright: "#38bdf8",
    dim: "#0ea5e920",
    states: [
      "Gujarat",
      "Dadra and Nagar Haveli and Daman and Diu",
      "Goa",
      "Kerala",
      "Tamil Nadu",
      "Puducherry",
      "Andhra Pradesh",
      "Odisha",
    ],
    subregions: [
      {
        id: "western-coast",
        label: "Western Coast",
        description: "Narrow, humid coastal strip backed by the Western Ghats.",
        states: [
          "Gujarat",
          "Dadra and Nagar Haveli and Daman and Diu",
          "Goa",
          "Kerala",
        ],
        highlights: [
          "Konkan and Malabar coasts",
          "Estuaries and backwaters",
          "High rainfall zones",
        ],
        color: "#0ea5e9",
      },
      {
        id: "eastern-coast",
        label: "Eastern Coast",
        description: "Wide deltaic plains shaped by large peninsular rivers.",
        states: ["Andhra Pradesh", "Odisha", "Tamil Nadu", "Puducherry"],
        highlights: [
          "Godavari and Krishna deltas",
          "Cyclone-prone shoreline",
          "Rice and aquaculture belts",
        ],
        color: "#38bdf8",
      },
      {
        id: "coastal-wetlands",
        label: "Coastal Wetlands",
        description: "Mangroves, lagoons, and fragile shoreline ecosystems.",
        states: ["Odisha", "Tamil Nadu", "Kerala"],
        highlights: [
          "Chilika and Pulicat lagoons",
          "Mangrove buffers",
          "Migratory bird habitat",
        ],
        color: "#7dd3fc",
      },
    ],
  },
  {
    id: "islands",
    landformSlug: "islands",
    label: "Islands",
    color: "#14b8a6",
    bright: "#2dd4bf",
    dim: "#14b8a620",
    states: ["Andaman & Nicobar Islands", "Andaman & Nicobar", "Lakshadweep"],
    subregions: [
      {
        id: "andaman-nicobar",
        label: "Andaman & Nicobar",
        description:
          "Volcanic island chains with dense rainforests and coral reefs.",
        states: ["Andaman & Nicobar Islands", "Andaman & Nicobar"],
        highlights: [
          "Tropical rainforests",
          "Coral reef systems",
          "Endemic island wildlife",
        ],
        color: "#14b8a6",
      },
      {
        id: "lakshadweep",
        label: "Lakshadweep",
        description:
          "Low-lying coral atolls with lagoon ecosystems and fragile shorelines.",
        states: ["Lakshadweep"],
        highlights: [
          "Atolls and lagoons",
          "Seagrass and reef fisheries",
          "Cyclone exposure",
        ],
        color: "#2dd4bf",
      },
    ],
  },
];

export function getRegionGroupByLandform(
  slug: string,
): RegionGroup | undefined {
  return regionGroups.find((group) => group.landformSlug === slug);
}
