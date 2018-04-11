dataSetVersion = "2018-02-22"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Hyperdimension Neptunia", key: "hdn" },
      { name: "Hyperdimension Neptunia Mk2", key: "mk2" },
      { name: "Hyperdimension Neptunia Victory", key: "v" },
      { name: "Megadimension Neputnia VII", key: "vii" },
      { name: "Hyperdimension Neptunia: Producing Perfection", key: "pp" },
      { name: "Hyperdevotion Noire: Goddess Black Heart", key: "gbh" },
      { name: "Hyperdimension Neptunia U: Action Unleashed", key: "au" },
      { name: "MegaTagmension Blanc + Neptune VS Zombies", key: "zomb" },
      { name: "Superdimension Neptune vs Sega Hard Girls", key: "sega" },
      { name: "Cyberdimension Neptunia: 4 Goddesses Online", key: "fgo" },
      { name: "Nep-Nep Connect: Chaos Chanpuru", key: "nnc" },
      { name: "Hyperdimension Neptunia Re;birth 1", key: "rb1" },
      { name: "Hyperdimension Neptunia Re;birth 2: Sisters Generation", key: "rb2" },
      { name: "Hyperdimension Neptunia Re;birth 3: V Generation", key: "rb3" },
      { name: "Megadimension Neptunia VIIR", key: "viir" },
    ]
  },
  {
    name: "Filter by Character Type",
    key: "type",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [
      { name: "CPU", key: "cpu" },
      { name: "Maker", key: "mkr" },
      { name: "Monster", key: "msr" },
    ]
  },
  {
    name: "Remove alternate forms",
    key: "form",
    tooltip: "Check this to remove alternate form counterparts to characters."
  },
  {
    name: "Remove different dimension duplicates",
    key: "dim",
    tooltip: "Check this to remove alternate dimension counterparts to characters."
  },
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "5pb. (Lyrica)",
    img: "5pb._Lyrica.png",
    opts: {},
  },
  {
    name: "Abaddon",
    img: "Abaddon.png",
    opts: {},
  },
  {
    name: "Abnes",
    img: "Abnes.png",
    opts: {},
  },
  {
    name: "Affimojas",
    img: "Affimojas.png",
    opts: {},
  },
  {
    name: "Anonydeath",
    img: "Anonydeath.png",
    opts: {},
  },
  {
    name: "Arfoire",
    img: "Arfoire.png",
    opts: {},
  },
  {
    name: "Azna=Leb",
    img: "Azna=Leb.png",
    opts: {},
  },
  {
    name: "Bamo",
    img: "Bamo.png",
    opts: {},
  },
  {
    name: "Blanc",
    img: "Blanc.png",
    opts: {},
  },
  {
    name: "Broccoli",
    img: "Broccoli.png",
    opts: {},
  },
  {
    name: "Cave",
    img: "Cave.png",
    opts: {},
  },
  {
    name: "CFW Brave",
    img: "CFW_Brave.png",
    opts: {},
  },
  {
    name: "CFW Judge",
    img: "CFW_Judge.png",
    opts: {},
  },
  {
    name: "CFW Magic",
    img: "CFW_Magic.png",
    opts: {},
  },
  {
    name: "CFW Trick",
    img: "CFW_Trick.png",
    opts: {},
  },
  {
    name: "Cheekama",
    img: "Cheekama.png",
    opts: {},
  },
  {
    name: "Chika Hakozaki",
    img: "Chika_Hakozaki.png",
    opts: {},
  },
  {
    name: "Chuuko",
    img: "Chuuko.png",
    opts: {},
  },
  {
    name: "Compa",
    img: "Compa.png",
    opts: {},
  },
  {
    name: "Compile",
    img: "Compile.png",
    opts: {},
  },
  {
    name: "Copypaste",
    img: "Copypaste.png",
    opts: {},
  },
  {
    name: "Croire",
    img: "Croire.png",
    opts: {},
  },
  {
    name: "CyberConnect2",
    img: "CyberConnect2.png",
    opts: {},
  },
  {
    name: "Deco",
    img: "Deco.png",
    opts: {},
  },
  {
    name: "Dengekiko",
    img: "Dengekiko.png",
    opts: {},
  },
  {
    name: "Dogoo Lady",
    img: "Dogoo_Lady.png",
    opts: {},
  },
  {
    name: "Dogoo Man",
    img: "Dogoo_Man.png",
    opts: {},
  },
  {
    name: "Falcom",
    img: "Falcom.png",
    opts: {},
  },
  {
    name: "Falcom (Young)",
    img: "Falcom_Young.png",
    opts: {},
  },
  {
    name: "Famitsu",
    img: "Famitsu.png",
    opts: {},
  },
  {
    name: "Financier",
    img: "Financier.png",
    opts: {},
  },
  {
    name: "Furapura",
    img: "Furapura.png",
    opts: {},
  },
  {
    name: "God Eater",
    img: "God_Eater.png",
    opts: {},
  },
  {
    name: "Guild Woman",
    img: "Guild_Woman.png",
    opts: {},
  },
  {
    name: "Gust",
    img: "Gust.png",
    opts: {},
  },
  {
    name: "C-Sha",
    img: "C-Sha.png",
    opts: {},
  },
  {
    name: "B-Sha",
    img: "B-Sha.png",
    opts: {},
  },
  {
    name: "S-Sha",
    img: "S-Sha.png",
    opts: {},
  },
  {
    name: "K-Sha",
    img: "K-Sha.png",
    opts: {},
  },
  {
    name: "Histoire",
    img: "Histoire.png",
    opts: {},
  },
  {
    name: "Histoire (Ultra Dimension)",
    img: "Histoire_UltraDimension.png",
    opts: {},
  },
  {
    name: "Horyuchu",
    img: "Horyuchu.png",
    opts: {},
  },
  {
    name: "IF",
    img: "IF.png",
    opts: {},
  },
  {
    name: "Kei Jinguji",
    img: "Kei_Jinguji.png",
    opts: {},
  },
  {
    name: "Linda (Underling)",
    img: "Linda_Underling.png",
    opts: {},
  },
  {
    name: "MAGES.",
    img: "MAGES.png",
    opts: {},
  },
  {
    name: "MarvelousAQL",
    img: "MarvelousAQL.png",
    opts: {},
  },
  {
    name: "Million Arthur",
    img: "Million_Arthur.png",
    opts: {},
  },
  {
    name: "Mina Nishizawa",
    img: "Mina_Nishizawa.png",
    opts: {},
  },
  {
    name: "Mr. Badd",
    img: "Mr._Badd.png",
    opts: {},
  },
  {
    name: "Nepgear",
    img: "Nepgear.png",
    opts: {},
  },
  {
    name: "Nepgya",
    img: "Nepgya.png",
    opts: {},
  },
  {
    name: "Neptune",
    img: "Neptune.png",
    opts: {
      type: ['cpu'],
    },
  },
  {
    name: "Neptune (Ultra Dimension)",
    img: "Neptune_UltraDimension.png",
    opts: {},
  },
  {
    name: "NISA",
    img: "NISA.png",
    opts: {},
  },
  {
    name: "Nitroplus",
    img: "Nitroplus.png",
    opts: {},
  },
  {
    name: "Noire",
    img: "Noire.png",
    opts: {},
  },
  {
    name: "Order Woman",
    img: "Order_Woman.png",
    opts: {},
  },
  {
    name: "Peashy",
    img: "Peashy.png",
    opts: {},
  },
  {
    name: "Plutia",
    img: "Plutia.png",
    opts: {},
  },
  {
    name: "Ram",
    img: "Ram.png",
    opts: {},
  },
  {
    name: "Raw Meat",
    img: "Raw_Meat.png",
    opts: {},
  },
  {
    name: "RED",
    img: "RED.png",
    opts: {},
  },
  {
    name: "Regu",
    img: "Regu.png",
    opts: {},
  },
  {
    name: "Rei Ryghts",
    img: "Rei_Ryghts.png",
    opts: {},
  },
  {
    name: "Rom",
    img: "Rom.png",
    opts: {},
  },
  {
    name: "Steamax",
    img: "Steamax.png",
    opts: {},
  },
  {
    name: "Stella",
    img: "Stella.png",
    opts: {},
  },
  {
    name: "Tekken",
    img: "Tekken.png",
    opts: {},
  },
  {
    name: "Umio",
    img: "Umio.png",
    opts: {},
  },
  {
    name: "Uni",
    img: "Uni.png",
    opts: {},
  },
  {
    name: "Uzume Tennouboshi",
    img: "Uzume_Tennouboshi.png",
    opts: {},
  },
  {
    name: "Vert",
    img: "Vert.png",
    opts: {},
  },
  {
    name: "Warechu",
    img: "Warechu.png",
    opts: {},
  },
  {
    name: "Zolgelicoff Tetsu",
    img: "Zolgelicoff_Tetsu.png",
    opts: {},
  },
];
