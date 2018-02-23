dataSetVersion = "2018-02-22"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Embodiment of Scarlet Devil", tooltip: "06 - Koumakan", key: "EoSD" },
    ]
  },
  {
    name: "Filter by Stage Enemy Appearances",
    key: "stage",
    tooltip: "Check this to restrict to characters that appear in certain stages as enemies.",
    checked: false,
    sub: [ { name: "Stage 1", key: "st1" }, { name: "Stage 2", key: "st2" }, { name: "Stage 3", key: "st3" }, { name: "Stage 4", key: "st4" }, { name: "Stage 5/Penultimate", tooltip: "Stage 4 in 5-stage games, and Stage 8 in 9-stage games.", key: "st5" }, { name: "Stage 6/Final", key: "st6" }, { name: "Stage EX/Phantasm", key: "ex" }
    ]
  },
  {
    name: "Remove PC-98 Duplicates",
    key: "pc98",
    tooltip: "Check this to remove PC-98 characters with a Windows counterpart."
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
    }
  },
  {
    name: "Noire",
    img: "tJnkSzK.png",
    opts: {
    }
  },
  {
    name: "Vert",
    img: "0YT7QlS.png",
    opts: {
    }
  },
  {
    name: "Blanc",
    img: "NWlZud3.png",
    opts: {
    }
  },
  {
    name: "Purple Heart",
    img: "qdveFSy.png",
    opts: {
    }
  },
  {
    name: "Black Heart",
    img: "ptGp0x4.png",
    opts: {
    }
  },
  {
    name: "Green Heart",
    img: "vBKdDm4.png",
    opts: {
    }
  },
  {
    name: "White Heart",
    img: "A7ZnuHo.png",
    opts: {
    }
  },
];
