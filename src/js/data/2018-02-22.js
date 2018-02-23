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
    name: "Neptune",
    img: "c5DqpgX.png",
    opts: {
      game: [ "hdn", "mk2", "v", "vii", "pp", "gbh", "au", "zomb", "sega", "fgo", "nnc", "rb1", "rb2", "rb3", "viir" ],
      type: [ "cpu" ]
    }
  },
  {
    name: "Noire",
    img: "tJnkSzK.png",
    opts: {
      game: [ "hdn", "mk2", "v", "vii", "pp", "gbh", "au", "zomb", "fgo", "nnc", "rb1", "rb2", "rb3", "viir" ],
      type: [ "cpu" ]
    }
  },
  {
    name: "Vert",
    img: "0YT7QlS.png",
    opts: {
      game: [ "hdn", "mk2", "v", "vii", "pp", "gbh", "au", "zomb", "fgo", "nnc", "rb1", "rb2", "rb3", "viir" ],
      type: [ "cpu" ]
    }
  },
  {
    name: "Blanc",
    img: "NWlZud3.png",
    opts: {
      game: [ "hdn", "mk2", "v", "vii", "pp", "gbh", "au", "zomb", "fgo", "nnc", "rb1", "rb2", "rb3", "viir" ],
      type: [ "cpu" ]
    }
  },
  {
    name: "Purple Heart",
    img: "qdveFSy.png",
    opts: {
      game: [ "hdn", "mk2", "v", "vii", "pp", "gbh", "au", "zomb", "sega", "fgo", "nnc", "rb1", "rb2", "rb3", "viir" ],
      type: [ "cpu" ],
      form: true,
    }
  },
  {
    name: "Black Heart",
    img: "ptGp0x4.png",
    opts: {
      game: [ "hdn", "mk2", "v", "vii", "pp", "gbh", "au", "zomb", "fgo", "nnc", "rb1", "rb2", "rb3", "viir" ],
      type: [ "cpu" ],
      form: true,
    }
  },
  {
    name: "Green Heart",
    img: "vBKdDm4.png",
    opts: {
      game: [ "hdn", "mk2", "v", "vii", "pp", "gbh", "au", "zomb", "fgo", "nnc", "rb1", "rb2", "rb3", "viir" ],
      type: [ "cpu" ],
      form: true,
    }
  },
  {
    name: "White Heart",
    img: "A7ZnuHo.png",
    opts: {
      game: [ "hdn", "mk2", "v", "vii", "pp", "gbh", "au", "zomb", "fgo", "nnc", "rb1", "rb2", "rb3", "viir" ],
      type: [ "cpu" ],
      form: true,
    }
  },
];
