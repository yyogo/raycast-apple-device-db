interface SOC {
  cpid: string;
  name: string;
  codename?: string;
  platform: string;
  is_64bit: boolean;
  release?: string;
}

const socs = {
  s5l8900x: {
    cpid: "0x8900",
    name: "s5l8900x",

    platform: "s5l8900x",
    is_64bit: false,
    release: "2007-06-29",
  },

  s5l8720x: {
    cpid: "0x8720",
    name: "s5l8720x",

    platform: "s5l8720x",
    is_64bit: false,
    release: "2008-09-08",
  },

  s5l8920x: {
    cpid: "0x8920",
    name: "s5l8920x",

    platform: "s5l8920x",
    is_64bit: false,
    release: "2009-06-19",
  },

  s5l8922x: {
    cpid: "0x8922",
    name: "s5l8922x",

    platform: "s5l8922x",
    is_64bit: false,
    release: "2009-09-09",
  },

  s5l8930x: {
    cpid: "0x8930",
    name: "s5l8930x",

    platform: "s5l8930x",
    is_64bit: false,
    release: "2010-06-24",
  },

  s5l8940x: {
    cpid: "0x8940",
    name: "A5",
    codename: "H4P",
    platform: "s5l8940x",
    is_64bit: false,
    release: "2011-10-14",
  },

  s5l8942x: {
    cpid: "0x8942",
    name: "A5",
    codename: "H4A",
    platform: "s5l8942x",
    is_64bit: false,
    release: "2012-03-06",
  },

  s5l8945x: {
    cpid: "0x8945",
    name: "A5X",
    codename: "H4G",
    platform: "s5l8945x",
    is_64bit: false,
    release: "2012-03-07",
  },

  s5l8950x: {
    cpid: "0x8950",
    name: "A6",
    codename: "H5P",
    platform: "s5l8950x",
    is_64bit: false,
    release: "2012-09-21",
  },

  s5l8955x: {
    cpid: "0x8955",
    name: "A6X",
    codename: "BALI (H5G)",
    platform: "s5l8955x",
    is_64bit: false,
    release: "2012-11-02",
  },

  s5l8960x: {
    cpid: "0x8960",
    name: "A7",
    codename: "ALCATRAZ (H6P)",
    platform: "s5l8960x",
    is_64bit: true,
    release: "2013-09-20",
  },

  t7000: {
    cpid: "0x7000",
    name: "A8",
    codename: "FIJI",
    platform: "t7000",
    is_64bit: true,
    release: "2014-09-19",
  },

  t7001: {
    cpid: "0x7001",
    name: "A8X",
    codename: "CAPRI",
    platform: "t7001",
    is_64bit: true,
    release: "2014-10-22",
  },

  s7002: {
    cpid: "0x7002",
    name: "S1",
    codename: "M7",
    platform: "s7002",
    is_64bit: false,
    release: "2015-04-24",
  },

  s8000: {
    cpid: "0x8000",
    name: "A9",
    codename: "MAUI",
    platform: "s8000",
    is_64bit: true,
    release: "2015-09-25",
  },

  s8003: {
    cpid: "0x8003",
    name: "A9",
    codename: "MALTA",
    platform: "s8003",
    is_64bit: true,
    release: "2015-09-25",
  },

  s8001: {
    cpid: "0x8001",
    name: "A9X",
    codename: "ELBA",
    platform: "s8001",
    is_64bit: true,
    release: "2015-11-11",
  },

  T8002: {
    cpid: "0x8002",
    name: "S2",
    codename: "M8",
    platform: "T8002",
    is_64bit: false,
    release: "2016-09-16",
  },

  T8004: {
    cpid: "0x8004",
    name: "S3",
    codename: "M8W",
    platform: "T8004",
    is_64bit: false,
    release: "2017-09-22",
  },

  T8006: {
    cpid: "0x8006",
    name: "S4",
    codename: "M9",
    platform: "T8006",
    is_64bit: true,
    release: "2018-09-21",
  },

  t8010: {
    cpid: "0x8010",
    name: "A10",
    codename: "CAYMAN",
    platform: "t8010",
    is_64bit: true,
    release: "2016-09-16",
  },

  t8011: {
    cpid: "0x8011",
    name: "A10X",
    codename: "MYST",
    platform: "t8011",
    is_64bit: true,
    release: "2017-06-13",
  },

  t8015: {
    cpid: "0x8015",
    name: "A11",
    codename: "SKYE",
    platform: "t8015",
    is_64bit: true,
    release: "2017-09-22",
  },

  t8020: {
    cpid: "0x8020",
    name: "A12",
    codename: "CYPRUS",
    platform: "t8020",
    is_64bit: true,
    release: "2018-09-21",
  },

  T8027: {
    cpid: "0x8027",
    name: "A12X",
    codename: "ARUBA",
    platform: "T8027",
    is_64bit: true,
    release: "2018-11-07",
  },

  t8030: {
    cpid: "0x8030",
    name: "A13",
    codename: "CEBU",
    platform: "t8030",
    is_64bit: true,
    release: "2019-09-20",
  },

  t8101: {
    cpid: "0x8101",
    name: "A14",
    codename: "SICILY",
    platform: "t8101",
    is_64bit: true,
    release: "2020-10-23",
  },

  t8103: {
    cpid: "0x8103",
    name: "M1",
    codename: "Tonga",
    platform: "t8103",
    is_64bit: true,
    release: "2020-11-17",
  },

  t8110: {
    cpid: "0x8110",
    name: "A15",
    codename: "Ellis",
    platform: "t8110",
    is_64bit: true,
    release: "2021-09-14",
  },

  t8112: {
    cpid: "0x8112",
    name: "M2",
    codename: "Staten",
    platform: "t8112",
    is_64bit: true,
    release: "2022-06-24",
  },

  t8120: {
    cpid: "0x8120",
    name: "A16",
    codename: "Crete",
    platform: "t8120",
    is_64bit: true,
    release: "2022-09-07",
  },
};

interface iDevice {
  product_name: string; // iPhone 13
  product_number: number[]; // iPhone14,5
  soc: SOC; // t8110
  internal_name: string; // D17AP
  kind: string; // iPhone
  first_ios_version: string; // 15.0
}

export function device_id(dev: iDevice) {
  return `${dev.kind}${dev.product_number[0]},${dev.product_number[1]}`;
}

const devices = {
  M68AP: {
    product_name: "iPhone 2G",
    product_number: [1, 1],
    internal_name: "M68AP",
    soc: socs["s5l8900x"],
    kind: "iPhone",
    first_ios_version: "1.0",
  },

  N82AP: {
    product_name: "iPhone 3G",
    product_number: [1, 2],
    internal_name: "N82AP",
    soc: socs["s5l8900x"],
    kind: "iPhone",
    first_ios_version: "2.0",
  },

  N88AP: {
    product_name: "iPhone 3G[S]",
    product_number: [2, 1],
    internal_name: "N88AP",
    soc: socs["s5l8920x"],
    kind: "iPhone",
    first_ios_version: "3.0",
  },

  N90AP: {
    product_name: "iPhone 4 (GSM)",
    product_number: [3, 1],
    internal_name: "N90AP",
    soc: socs["s5l8930x"],
    kind: "iPhone",
    first_ios_version: "4.0",
  },

  N92AP: {
    product_name: "iPhone 4 (CDMA)",
    product_number: [3, 3],
    internal_name: "N92AP",
    soc: socs["s5l8930x"],
    kind: "iPhone",
    first_ios_version: "4.2.6",
  },

  N90bAP: {
    product_name: "iPhone 4 (GSM / 2012)",
    product_number: [3, 2],
    internal_name: "N90bAP",
    soc: socs["s5l8930x"],
    kind: "iPhone",
    first_ios_version: "6.0",
  },

  N94AP: {
    product_name: "iPhone 4[S]",
    product_number: [4, 1],
    internal_name: "N94AP",
    soc: socs["s5l8940x"],
    kind: "iPhone",
    first_ios_version: "5.0",
  },

  N41AP: {
    product_name: "iPhone 5 (GSM)",
    product_number: [5, 1],
    internal_name: "N41AP",
    soc: socs["s5l8950x"],
    kind: "iPhone",
    first_ios_version: "6.0",
  },

  N42AP: {
    product_name: "iPhone 5 (Global)",
    product_number: [5, 2],
    internal_name: "N42AP",
    soc: socs["s5l8950x"],
    kind: "iPhone",
    first_ios_version: "6.0",
  },

  N48AP: {
    product_name: "iPhone 5c (GSM)",
    product_number: [5, 3],
    internal_name: "N48AP",
    soc: socs["s5l8950x"],
    kind: "iPhone",
    first_ios_version: "7.0",
  },

  N49AP: {
    product_name: "iPhone 5c (Global)",
    product_number: [5, 4],
    internal_name: "N49AP",
    soc: socs["s5l8950x"],
    kind: "iPhone",
    first_ios_version: "7.0",
  },

  N51AP: {
    product_name: "iPhone 5s (GSM)",
    product_number: [6, 1],
    internal_name: "N51AP",
    soc: socs["s5l8960x"],
    kind: "iPhone",
    first_ios_version: "7.0",
  },

  N53AP: {
    product_name: "iPhone 5s (Global)",
    product_number: [6, 2],
    internal_name: "N53AP",
    soc: socs["s5l8960x"],
    kind: "iPhone",
    first_ios_version: "7.0",
  },

  N56AP: {
    product_name: "iPhone 6+",
    product_number: [7, 1],
    internal_name: "N56AP",
    soc: socs["t7000"],
    kind: "iPhone",
    first_ios_version: "8.0",
  },

  N61AP: {
    product_name: "iPhone 6",
    product_number: [7, 2],
    internal_name: "N61AP",
    soc: socs["t7000"],
    kind: "iPhone",
    first_ios_version: "8.0",
  },

  N71AP: {
    product_name: "iPhone 6s (Samsung)",
    product_number: [8, 1],
    internal_name: "N71AP",
    soc: socs["s8000"],
    kind: "iPhone",
    first_ios_version: "9.0",
  },

  N71mAP: {
    product_name: "iPhone 6s (TSMC)",
    product_number: [8, 1],
    internal_name: "N71mAP",
    soc: socs["s8003"],
    kind: "iPhone",
    first_ios_version: "9.0",
  },

  N66AP: {
    product_name: "iPhone 6s+ (Samsung)",
    product_number: [8, 2],
    internal_name: "N66AP",
    soc: socs["s8000"],
    kind: "iPhone",
    first_ios_version: "9.0",
  },

  N66mAP: {
    product_name: "iPhone 6s+ (TSMC)",
    product_number: [8, 2],
    internal_name: "N66mAP",
    soc: socs["s8003"],
    kind: "iPhone",
    first_ios_version: "9.0",
  },

  N69AP: {
    product_name: "iPhone SE (TSMC)",
    product_number: [8, 4],
    internal_name: "N69AP",
    soc: socs["s8003"],
    kind: "iPhone",
    first_ios_version: "9.3",
  },

  N69uAP: {
    product_name: "iPhone SE (Samsung)",
    product_number: [8, 4],
    internal_name: "N69uAP",
    soc: socs["s8000"],
    kind: "iPhone",
    first_ios_version: "9.3",
  },

  D10AP: {
    product_name: "iPhone 7 (Global)",
    product_number: [9, 1],
    internal_name: "D10AP",
    soc: socs["t8010"],
    kind: "iPhone",
    first_ios_version: "10.0.1",
  },

  D11AP: {
    product_name: "iPhone 7 Plus (Global)",
    product_number: [9, 2],
    internal_name: "D11AP",
    soc: socs["t8010"],
    kind: "iPhone",
    first_ios_version: "10.0.1",
  },

  D101AP: {
    product_name: "iPhone 7 (GSM)",
    product_number: [9, 3],
    internal_name: "D101AP",
    soc: socs["t8010"],
    kind: "iPhone",
    first_ios_version: "10.0.1",
  },

  D111AP: {
    product_name: "iPhone 7 Plus (GSM)",
    product_number: [9, 4],
    internal_name: "D111AP",
    soc: socs["t8010"],
    kind: "iPhone",
    first_ios_version: "10.0.1",
  },

  D20AP: {
    product_name: "iPhone 8 (Global)",
    product_number: [10, 1],
    internal_name: "D20AP",
    soc: socs["t8015"],
    kind: "iPhone",
    first_ios_version: "11.0",
  },

  D20AAP: {
    product_name: "iPhone 8 (Global) RED",
    product_number: [10, 1],
    internal_name: "D20AAP",
    soc: socs["t8015"],
    kind: "iPhone",
    first_ios_version: "11.0",
  },

  D21AP: {
    product_name: "iPhone 8 Plus (Global)",
    product_number: [10, 2],
    internal_name: "D21AP",
    soc: socs["t8015"],
    kind: "iPhone",
    first_ios_version: "11.0",
  },

  D21AAP: {
    product_name: "iPhone 8 Plus (Global) RED",
    product_number: [10, 2],
    internal_name: "D21AAP",
    soc: socs["t8015"],
    kind: "iPhone",
    first_ios_version: "11.0",
  },

  D201AP: {
    product_name: "iPhone 8 (GSM)",
    product_number: [10, 4],
    internal_name: "D201AP",
    soc: socs["t8015"],
    kind: "iPhone",
    first_ios_version: "11.0",
  },

  D201AAP: {
    product_name: "iPhone 8 (GSM) RED",
    product_number: [10, 4],
    internal_name: "D201AAP",
    soc: socs["t8015"],
    kind: "iPhone",
    first_ios_version: "11.0",
  },

  D211AP: {
    product_name: "iPhone 8 Plus (GSM)",
    product_number: [10, 5],
    internal_name: "D211AP",
    soc: socs["t8015"],
    kind: "iPhone",
    first_ios_version: "11.0",
  },

  D211AAP: {
    product_name: "iPhone 8 Plus (GSM) RED",
    product_number: [10, 5],
    internal_name: "D211AAP",
    soc: socs["t8015"],
    kind: "iPhone",
    first_ios_version: "11.0",
  },

  D22AP: {
    product_name: "iPhone X (Global)",
    product_number: [10, 3],
    internal_name: "D22AP",
    soc: socs["t8015"],
    kind: "iPhone",
    first_ios_version: "11.0",
  },

  D221AP: {
    product_name: "iPhone X (GSM)",
    product_number: [10, 6],
    internal_name: "D221AP",
    soc: socs["t8015"],
    kind: "iPhone",
    first_ios_version: "11.0",
  },

  N841AP: {
    product_name: "iPhone XR",
    product_number: [11, 8],
    internal_name: "N841AP",
    soc: socs["t8020"],
    kind: "iPhone",
    first_ios_version: "12.0",
  },

  D321AP: {
    product_name: "iPhone XS",
    product_number: [11, 2],
    internal_name: "D321AP",
    soc: socs["t8020"],
    kind: "iPhone",
    first_ios_version: "12.0",
  },

  J305AP: {
    product_name: "Apple TV 4K (2021)",
    product_number: [11, 1],
    internal_name: "J305AP",
    soc: socs["t8020"],
    kind: "AppleTV",
    first_ios_version: "14.0",
  },

  D331AP: {
    product_name: "iPhone XS Max (China)",
    product_number: [11, 4],
    internal_name: "D331AP",
    soc: socs["t8020"],
    kind: "iPhone",
    first_ios_version: "12.0",
  },

  D331pAP: {
    product_name: "iPhone XS Max (Global)",
    product_number: [11, 6],
    internal_name: "D331pAP",
    soc: socs["t8020"],
    kind: "iPhone",
    first_ios_version: "12.0",
  },

  N104AP: {
    product_name: "iPhone 11",
    product_number: [12, 1],
    internal_name: "N104AP",
    soc: socs["t8030"],
    kind: "iPhone",
    first_ios_version: "13.0",
  },

  D421AP: {
    product_name: "iPhone 11 Pro",
    product_number: [12, 3],
    internal_name: "D421AP",
    soc: socs["t8030"],
    kind: "iPhone",
    first_ios_version: "13.0",
  },

  D431AP: {
    product_name: "iPhone 11 Pro Max",
    product_number: [12, 5],
    internal_name: "D431AP",
    soc: socs["t8030"],
    kind: "iPhone",
    first_ios_version: "13.0",
  },

  D79AP: {
    product_name: "iPhone SE (2020)",
    product_number: [12, 8],
    internal_name: "D79AP",
    soc: socs["t8030"],
    kind: "iPhone",
    first_ios_version: "13.4.1",
  },

  D52gAP: {
    product_name: "iPhone 12 mini",
    product_number: [13, 1],
    internal_name: "D52gAP",
    soc: socs["t8101"],
    kind: "iPhone",
    first_ios_version: "14.1",
  },

  D53gAP: {
    product_name: "iPhone 12",
    product_number: [13, 2],
    internal_name: "D53gAP",
    soc: socs["t8101"],
    kind: "iPhone",
    first_ios_version: "14.1",
  },

  D53pAP: {
    product_name: "iPhone 12 Pro",
    product_number: [13, 3],
    internal_name: "D53pAP",
    soc: socs["t8101"],
    kind: "iPhone",
    first_ios_version: "14.1",
  },

  D54pAP: {
    product_name: "iPhone 12 Pro Max",
    product_number: [13, 4],
    internal_name: "D54pAP",
    soc: socs["t8101"],
    kind: "iPhone",
    first_ios_version: "14.1",
  },

  D16AP: {
    product_name: "iPhone 13 mini ",
    product_number: [14, 4],
    internal_name: "D16AP",
    soc: socs["t8110"],
    kind: "iPhone",
    first_ios_version: "15.0",
  },

  D63AP: {
    product_name: "iPhone 13 Pro",
    product_number: [14, 2],
    internal_name: "D63AP",
    soc: socs["t8110"],
    kind: "iPhone",
    first_ios_version: "15.0",
  },

  D64AP: {
    product_name: "iPhone 13 Pro Max",
    product_number: [14, 3],
    internal_name: "D64AP",
    soc: socs["t8110"],
    kind: "iPhone",
    first_ios_version: "15.0",
  },

  D17AP: {
    product_name: "iPhone 13",
    product_number: [14, 5],
    internal_name: "D17AP",
    soc: socs["t8110"],
    kind: "iPhone",
    first_ios_version: "15.0",
  },

  D49AP: {
    product_name: "iPhone SE (3rd generation)",
    product_number: [14, 6],
    internal_name: "D49AP",
    soc: socs["t8110"],
    kind: "iPhone",
    first_ios_version: "15.4",
  },

  D27AP: {
    product_name: "iPhone 14",
    product_number: [14, 7],
    internal_name: "D27AP",
    soc: socs["t8110"],
    kind: "iPhone",
    first_ios_version: "16.0",
  },

  D28AP: {
    product_name: "iPhone 14 Plus",
    product_number: [14, 8],
    internal_name: "D28AP",
    soc: socs["t8110"],
    kind: "iPhone",
    first_ios_version: "16.0",
  },

  D73AP: {
    product_name: "iPhone 14 Pro",
    product_number: [15, 2],
    internal_name: "D73AP",
    soc: socs["t8120"],
    kind: "iPhone",
    first_ios_version: "16.0",
  },

  D74AP: {
    product_name: "iPhone 14 Pro Max",
    product_number: [15, 3],
    internal_name: "D74AP",
    soc: socs["t8120"],
    kind: "iPhone",
    first_ios_version: "16.0",
  },

  K93AP: {
    product_name: "iPad 2 (WiFi)",
    product_number: [2, 1],
    internal_name: "K93AP",
    soc: socs["s5l8940x"],
    kind: "iPad",
    first_ios_version: "4.3",
  },

  K94AP: {
    product_name: "iPad 2 (GSM)",
    product_number: [2, 2],
    internal_name: "K94AP",
    soc: socs["s5l8940x"],
    kind: "iPad",
    first_ios_version: "4.3",
  },

  K95AP: {
    product_name: "iPad 2 (CDMA)",
    product_number: [2, 3],
    internal_name: "K95AP",
    soc: socs["s5l8940x"],
    kind: "iPad",
    first_ios_version: "4.3",
  },

  K93AAP: {
    product_name: "iPad 2 (Mid 2012)",
    product_number: [2, 4],
    internal_name: "K93AAP",
    soc: socs["s5l8942x"],
    kind: "iPad",
    first_ios_version: "5.1",
  },

  J1AP: {
    product_name: "iPad 3 (WiFi)",
    product_number: [3, 1],
    internal_name: "J1AP",
    soc: socs["s5l8945x"],
    kind: "iPad",
    first_ios_version: "5.1",
  },

  J2AP: {
    product_name: "iPad 3 (CDMA)",
    product_number: [3, 2],
    internal_name: "J2AP",
    soc: socs["s5l8945x"],
    kind: "iPad",
    first_ios_version: "5.1",
  },

  J2AAP: {
    product_name: "iPad 3 (GSM)",
    product_number: [3, 3],
    internal_name: "J2AAP",
    soc: socs["s5l8945x"],
    kind: "iPad",
    first_ios_version: "5.1",
  },

  P101AP: {
    product_name: "iPad 4 (WiFi)",
    product_number: [3, 4],
    internal_name: "P101AP",
    soc: socs["s5l8955x"],
    kind: "iPad",
    first_ios_version: "6.0",
  },

  P102AP: {
    product_name: "iPad 4 (GSM)",
    product_number: [3, 5],
    internal_name: "P102AP",
    soc: socs["s5l8955x"],
    kind: "iPad",
    first_ios_version: "6.0.1",
  },

  P103AP: {
    product_name: "iPad 4 (Global)",
    product_number: [3, 6],
    internal_name: "P103AP",
    soc: socs["s5l8955x"],
    kind: "iPad",
    first_ios_version: "6.0.1",
  },

  J71AP: {
    product_name: "iPad Air (WiFi)",
    product_number: [4, 1],
    internal_name: "J71AP",
    soc: socs["s5l8960x"],
    kind: "iPad",
    first_ios_version: "7.0.3",
  },

  J72AP: {
    product_name: "iPad Air (Cellular)",
    product_number: [4, 2],
    internal_name: "J72AP",
    soc: socs["s5l8960x"],
    kind: "iPad",
    first_ios_version: "7.0.3",
  },

  J73AP: {
    product_name: "iPad Air (China)",
    product_number: [4, 3],
    internal_name: "J73AP",
    soc: socs["s5l8960x"],
    kind: "iPad",
    first_ios_version: "7.1",
  },

  J81AP: {
    product_name: "iPad Air 2 (WiFi)",
    product_number: [5, 3],
    internal_name: "J81AP",
    soc: socs["t7001"],
    kind: "iPad",
    first_ios_version: "8.1",
  },

  J82AP: {
    product_name: "iPad Air 2 (Cellular)",
    product_number: [5, 4],
    internal_name: "J82AP",
    soc: socs["t7001"],
    kind: "iPad",
    first_ios_version: "8.1",
  },

  J127AP: {
    product_name: "iPad Pro 9.7-inch (WiFi)",
    product_number: [6, 3],
    internal_name: "J127AP",
    soc: socs["s8001"],
    kind: "iPad",
    first_ios_version: "9.3",
  },

  J128AP: {
    product_name: "iPad Pro 9.7-inch (Cellular)",
    product_number: [6, 4],
    internal_name: "J128AP",
    soc: socs["s8001"],
    kind: "iPad",
    first_ios_version: "9.3",
  },

  J98AAP: {
    product_name: "iPad Pro 12.9-inch (WiFi)",
    product_number: [6, 7],
    internal_name: "J98AAP",
    soc: socs["s8001"],
    kind: "iPad",
    first_ios_version: "9.1",
  },

  J99AAP: {
    product_name: "iPad Pro 12.9-inch (Cellular)",
    product_number: [6, 8],
    internal_name: "J99AAP",
    soc: socs["s8001"],
    kind: "iPad",
    first_ios_version: "9.1",
  },

  J71SAP: {
    product_name: "iPad (5th Generation) (Samsung) (WiFi)",
    product_number: [6, 11],
    internal_name: "J71SAP",
    soc: socs["s8000"],
    kind: "iPad",
    first_ios_version: "10.3",
  },

  J71TAP: {
    product_name: "iPad (5th Generation) (TSMC) (WiFi)",
    product_number: [6, 11],
    internal_name: "J71TAP",
    soc: socs["s8003"],
    kind: "iPad",
    first_ios_version: "10.3.2",
  },

  J72SAP: {
    product_name: "iPad (5th Generation) (Samsung) (Cellular)",
    product_number: [6, 12],
    internal_name: "J72SAP",
    soc: socs["s8000"],
    kind: "iPad",
    first_ios_version: "10.3",
  },

  J72TAP: {
    product_name: "iPad (5th Generation) (TSMC) (WiFi)",
    product_number: [6, 12],
    internal_name: "J72TAP",
    soc: socs["s8003"],
    kind: "iPad",
    first_ios_version: "10.3.2",
  },

  J120AP: {
    product_name: "iPad Pro 12.9-inch (2nd Gen) (WiFi)",
    product_number: [7, 1],
    internal_name: "J120AP",
    soc: socs["t8011"],
    kind: "iPad",
    first_ios_version: "10.3.2",
  },

  J121AP: {
    product_name: "iPad Pro 12.9-inch (2nd Gen) (Cellular)",
    product_number: [7, 2],
    internal_name: "J121AP",
    soc: socs["t8011"],
    kind: "iPad",
    first_ios_version: "10.3.2",
  },

  J207AP: {
    product_name: "iPad Pro 10.5-inch (WiFi)",
    product_number: [7, 3],
    internal_name: "J207AP",
    soc: socs["t8011"],
    kind: "iPad",
    first_ios_version: "10.3.2",
  },

  J208AP: {
    product_name: "iPad Pro 10.5-inch (Cellular)",
    product_number: [7, 4],
    internal_name: "J208AP",
    soc: socs["t8011"],
    kind: "iPad",
    first_ios_version: "10.3.2",
  },

  J71bAP: {
    product_name: "iPad (6th Generation) (WiFi)",
    product_number: [7, 5],
    internal_name: "J71bAP",
    soc: socs["t8010"],
    kind: "iPad",
    first_ios_version: "11.3",
  },

  J72bAP: {
    product_name: "iPad (6th Generation) (Cellular)",
    product_number: [7, 6],
    internal_name: "J72bAP",
    soc: socs["t8010"],
    kind: "iPad",
    first_ios_version: "11.3",
  },

  J317AP: {
    product_name: "iPad Pro 11-inch (WiFi)",
    product_number: [8, 1],
    internal_name: "J317AP",
    soc: socs["T8027"],
    kind: "iPad",
    first_ios_version: "12.1",
  },

  J317xAP: {
    product_name: "iPad Pro 11-inch (1TB-WiFi)",
    product_number: [8, 2],
    internal_name: "J317xAP",
    soc: socs["T8027"],
    kind: "iPad",
    first_ios_version: "12.1",
  },

  J318AP: {
    product_name: "iPad Pro 11-inch (Cellular)",
    product_number: [8, 3],
    internal_name: "J318AP",
    soc: socs["T8027"],
    kind: "iPad",
    first_ios_version: "12.1",
  },

  J318xAP: {
    product_name: "iPad Pro 11-inch (1TB-Cellular)",
    product_number: [8, 4],
    internal_name: "J318xAP",
    soc: socs["T8027"],
    kind: "iPad",
    first_ios_version: "12.1",
  },

  J320AP: {
    product_name: "iPad Pro 12.9-inch (3rd Gen) (WiFi)",
    product_number: [8, 5],
    internal_name: "J320AP",
    soc: socs["T8027"],
    kind: "iPad",
    first_ios_version: "12.1",
  },

  J320xAP: {
    product_name: "iPad Pro 12.9-inch (3rd Gen) (1TB-WiFi)",
    product_number: [8, 6],
    internal_name: "J320xAP",
    soc: socs["T8027"],
    kind: "iPad",
    first_ios_version: "12.1",
  },

  J321AP: {
    product_name: "iPad Pro 12.9-inch (3rd Gen) (Cellular)",
    product_number: [8, 7],
    internal_name: "J321AP",
    soc: socs["T8027"],
    kind: "iPad",
    first_ios_version: "12.1",
  },

  J321xAP: {
    product_name: "iPad Pro 12.9-inch (3rd Gen) (1TB-Cellular)",
    product_number: [8, 8],
    internal_name: "J321xAP",
    soc: socs["T8027"],
    kind: "iPad",
    first_ios_version: "12.1",
  },

  J217AP: {
    product_name: "iPad Air 3 (WiFi)",
    product_number: [11, 3],
    internal_name: "J217AP",
    soc: socs["t8020"],
    kind: "iPad",
    first_ios_version: "12.2",
  },

  J218AP: {
    product_name: "iPad Air 3 (Cellular)",
    product_number: [11, 4],
    internal_name: "J218AP",
    soc: socs["t8020"],
    kind: "iPad",
    first_ios_version: "12.2",
  },

  J171AP: {
    product_name: "iPad 7 (Cellular)",
    product_number: [7, 12],
    internal_name: "J171AP",
    soc: socs["t8010"],
    kind: "iPad",
    first_ios_version: "13.1",
  },

  J172AP: {
    product_name: "iPad 7 (WiFi)",
    product_number: [7, 11],
    internal_name: "J172AP",
    soc: socs["t8010"],
    kind: "iPad",
    first_ios_version: "13.1",
  },

  J420AP: {
    product_name: "iPad Pro 4 (12.9-inch, Cellular)",
    product_number: [8, 12],
    internal_name: "J420AP",
    soc: socs["T8027"],
    kind: "iPad",
    first_ios_version: "13.4",
  },

  J418AP: {
    product_name: "iPad Pro 4 (11-inch, WiFi)",
    product_number: [8, 9],
    internal_name: "J418AP",
    soc: socs["T8027"],
    kind: "iPad",
    first_ios_version: "13.4",
  },

  J421AP: {
    product_name: "iPad Pro 4 (12.9-inch, WiFi)",
    product_number: [8, 11],
    internal_name: "J421AP",
    soc: socs["T8027"],
    kind: "iPad",
    first_ios_version: "13.4",
  },

  J417AP: {
    product_name: "iPad Pro 4 (11-inch, Cellular)",
    product_number: [8, 10],
    internal_name: "J417AP",
    soc: socs["T8027"],
    kind: "iPad",
    first_ios_version: "13.4",
  },

  P105AP: {
    product_name: "iPad Mini (WiFi)",
    product_number: [2, 5],
    internal_name: "P105AP",
    soc: socs["s5l8942x"],
    kind: "iPad",
    first_ios_version: "6.0",
  },

  P106AP: {
    product_name: "iPad Mini (GSM)",
    product_number: [2, 6],
    internal_name: "P106AP",
    soc: socs["s5l8942x"],
    kind: "iPad",
    first_ios_version: "6.0.1",
  },

  P107AP: {
    product_name: "iPad Mini (Global)",
    product_number: [2, 7],
    internal_name: "P107AP",
    soc: socs["s5l8942x"],
    kind: "iPad",
    first_ios_version: "6.0.1",
  },

  J85AP: {
    product_name: "iPad Mini 2 (WiFi)",
    product_number: [4, 4],
    internal_name: "J85AP",
    soc: socs["s5l8960x"],
    kind: "iPad",
    first_ios_version: "7.0.3",
  },

  J86AP: {
    product_name: "iPad Mini 2 (Cellular)",
    product_number: [4, 5],
    internal_name: "J86AP",
    soc: socs["s5l8960x"],
    kind: "iPad",
    first_ios_version: "7.0.3",
  },

  J87AP: {
    product_name: "iPad Mini 2 (China)",
    product_number: [4, 6],
    internal_name: "J87AP",
    soc: socs["s5l8960x"],
    kind: "iPad",
    first_ios_version: "7.1",
  },

  J85mAP: {
    product_name: "iPad Mini 3 (WiFi)",
    product_number: [4, 7],
    internal_name: "J85mAP",
    soc: socs["s5l8960x"],
    kind: "iPad",
    first_ios_version: "8.1",
  },

  J86mAP: {
    product_name: "iPad Mini 3 (Cellular)",
    product_number: [4, 8],
    internal_name: "J86mAP",
    soc: socs["s5l8960x"],
    kind: "iPad",
    first_ios_version: "8.1",
  },

  J87mAP: {
    product_name: "iPad Mini 3 (China)",
    product_number: [4, 9],
    internal_name: "J87mAP",
    soc: socs["s5l8960x"],
    kind: "iPad",
    first_ios_version: "8.1",
  },

  J96AP: {
    product_name: "iPad Mini 4 (WiFi)",
    product_number: [5, 1],
    internal_name: "J96AP",
    soc: socs["t7000"],
    kind: "iPad",
    first_ios_version: "9.0",
  },

  J97AP: {
    product_name: "iPad Mini 4 (Cellular)",
    product_number: [5, 2],
    internal_name: "J97AP",
    soc: socs["t7000"],
    kind: "iPad",
    first_ios_version: "9.0",
  },

  J210AP: {
    product_name: "iPad Mini 5 (WiFi)",
    product_number: [11, 1],
    internal_name: "J210AP",
    soc: socs["t8020"],
    kind: "iPad",
    first_ios_version: "12.2",
  },

  J211AP: {
    product_name: "iPad Mini 5 (Cellular)",
    product_number: [11, 2],
    internal_name: "J211AP",
    soc: socs["t8020"],
    kind: "iPad",
    first_ios_version: "12.2",
  },

  K48AP: {
    product_name: "iPad 1",
    product_number: [1, 1],
    internal_name: "K48AP",
    soc: socs["s5l8930x"],
    kind: "iPad",
    first_ios_version: "3.2",
  },

  J307AP: {
    product_name: "iPad Air 4 (WiFi)",
    product_number: [13, 1],
    internal_name: "J307AP",
    soc: socs["t8101"],
    kind: "iPad",
    first_ios_version: "14.0",
  },

  J171aAP: {
    product_name: "iPad 8 (WiFi)",
    product_number: [11, 6],
    internal_name: "J171aAP",
    soc: socs["t8020"],
    kind: "iPad",
    first_ios_version: "14.0",
  },

  J172aAP: {
    product_name: "iPad 8 (Cellular)",
    product_number: [11, 7],
    internal_name: "J172aAP",
    soc: socs["t8020"],
    kind: "iPad",
    first_ios_version: "14.0",
  },

  J308AP: {
    product_name: "iPad Air 4 (Cellular)",
    product_number: [13, 2],
    internal_name: "J308AP",
    soc: socs["t8101"],
    kind: "iPad",
    first_ios_version: "14.1",
  },

  J517AP: {
    product_name: "iPad Pro (11-inch) (3rd generation)",
    product_number: [13, 4],
    internal_name: "J517AP",
    soc: socs["t8103"],
    kind: "iPad",
    first_ios_version: "14.5",
  },

  J517xAP: {
    product_name: "iPad Pro (11-inch) (3rd generation)",
    product_number: [13, 5],
    internal_name: "J517xAP",
    soc: socs["t8103"],
    kind: "iPad",
    first_ios_version: "14.5",
  },

  J522xAP: {
    product_name: "iPad Pro (12.9-inch) (5th generation)",
    product_number: [13, 9],
    internal_name: "J522xAP",
    soc: socs["t8103"],
    kind: "iPad",
    first_ios_version: "14.5",
  },

  J523xAP: {
    product_name: "iPad Pro (12.9-inch) (5th generation)",
    product_number: [13, 11],
    internal_name: "J523xAP",
    soc: socs["t8103"],
    kind: "iPad",
    first_ios_version: "14.5",
  },

  J522AP: {
    product_name: "iPad Pro (12.9-inch) (5th generation)",
    product_number: [13, 8],
    internal_name: "J522AP",
    soc: socs["t8103"],
    kind: "iPad",
    first_ios_version: "14.5",
  },

  J523AP: {
    product_name: "iPad Pro (12.9-inch) (5th generation)",
    product_number: [13, 10],
    internal_name: "J523AP",
    soc: socs["t8103"],
    kind: "iPad",
    first_ios_version: "14.5",
  },

  J518xAP: {
    product_name: "iPad Pro (11-inch) (3rd generation)",
    product_number: [13, 7],
    internal_name: "J518xAP",
    soc: socs["t8103"],
    kind: "iPad",
    first_ios_version: "14.5",
  },

  J518AP: {
    product_name: "iPad Pro (11-inch) (3rd generation)",
    product_number: [13, 6],
    internal_name: "J518AP",
    soc: socs["t8103"],
    kind: "iPad",
    first_ios_version: "14.5",
  },

  J181AP: {
    product_name: "iPad 9 (WiFi)",
    product_number: [12, 1],
    internal_name: "J181AP",
    soc: socs["t8030"],
    kind: "iPad",
    first_ios_version: "15.0",
  },

  J182AP: {
    product_name: "iPad 9 (Cellular)",
    product_number: [12, 2],
    internal_name: "J182AP",
    soc: socs["t8030"],
    kind: "iPad",
    first_ios_version: "15.0",
  },

  J310AP: {
    product_name: "iPad Mini 6 (WiFi)",
    product_number: [14, 1],
    internal_name: "J310AP",
    soc: socs["t8110"],
    kind: "iPad",
    first_ios_version: "15.0",
  },

  J311AP: {
    product_name: "iPad Mini 6 (Cellular)",
    product_number: [14, 2],
    internal_name: "J311AP",
    soc: socs["t8110"],
    kind: "iPad",
    first_ios_version: "15.0",
  },

  J408AP: {
    product_name: "iPad Air (5th generation)",
    product_number: [13, 17],
    internal_name: "J408AP",
    soc: socs["t8103"],
    kind: "iPad",
    first_ios_version: "15.4",
  },

  J407AP: {
    product_name: "iPad Air (5th generation)",
    product_number: [13, 16],
    internal_name: "J407AP",
    soc: socs["t8103"],
    kind: "iPad",
    first_ios_version: "15.4",
  },

  J271AP: {
    product_name: "iPad (10th generation)",
    product_number: [13, 18],
    internal_name: "J271AP",
    soc: socs["t8101"],
    kind: "iPad",
    first_ios_version: "16.1",
  },

  J272AP: {
    product_name: "iPad (10th generation)",
    product_number: [13, 19],
    internal_name: "J272AP",
    soc: socs["t8101"],
    kind: "iPad",
    first_ios_version: "16.1",
  },

  J617AP: {
    product_name: "iPad Pro (11-inch) (4th generation)",
    product_number: [14, 3],
    internal_name: "J617AP",
    soc: socs["t8112"],
    kind: "iPad",
    first_ios_version: "16.1",
  },

  J618AP: {
    product_name: "iPad Pro (11-inch) (4th generation)",
    product_number: [14, 4],
    internal_name: "J618AP",
    soc: socs["t8112"],
    kind: "iPad",
    first_ios_version: "16.1",
  },

  J620AP: {
    product_name: "iPad Pro (12.9-inch) (6th generation)",
    product_number: [14, 5],
    internal_name: "J620AP",
    soc: socs["t8112"],
    kind: "iPad",
    first_ios_version: "16.1",
  },

  J621AP: {
    product_name: "iPad Pro (12.9-inch) (6th generation)",
    product_number: [14, 6],
    internal_name: "J621AP",
    soc: socs["t8112"],
    kind: "iPad",
    first_ios_version: "16.1",
  },

  N78AP: {
    product_name: "iPod touch 5",
    product_number: [5, 1],
    internal_name: "N78AP",
    soc: socs["s5l8942x"],
    kind: "iPod",
    first_ios_version: "6.0",
  },

  N78aAP: {
    product_name: "iPod touch 5",
    product_number: [5, 1],
    internal_name: "N78aAP",
    soc: socs["s5l8942x"],
    kind: "iPod",
    first_ios_version: "6.0",
  },

  N102AP: {
    product_name: "iPod touch 6",
    product_number: [7, 1],
    internal_name: "N102AP",
    soc: socs["t7000"],
    kind: "iPod",
    first_ios_version: "8.4",
  },

  N112AP: {
    product_name: "iPod touch 7",
    product_number: [9, 1],
    internal_name: "N112AP",
    soc: socs["t8010"],
    kind: "iPod",
    first_ios_version: "12.3.1",
  },

  N45AP: {
    product_name: "iPod touch 1G",
    product_number: [1, 1],
    internal_name: "N45AP",
    soc: socs["s5l8900x"],
    kind: "iPod",
    first_ios_version: "1.1",
  },

  N72AP: {
    product_name: "iPod touch 2G",
    product_number: [2, 1],
    internal_name: "N72AP",
    soc: socs["s5l8720x"],
    kind: "iPod",
    first_ios_version: "2.1.1",
  },

  N18AP: {
    product_name: "iPod touch 3",
    product_number: [3, 1],
    internal_name: "N18AP",
    soc: socs["s5l8922x"],
    kind: "iPod",
    first_ios_version: "3.1.1",
  },

  N81AP: {
    product_name: "iPod touch 4",
    product_number: [4, 1],
    internal_name: "N81AP",
    soc: socs["s5l8930x"],
    kind: "iPod",
    first_ios_version: "4.1",
  },

  J42dAP: {
    product_name: "Apple TV (HD)",
    product_number: [5, 3],
    internal_name: "J42dAP",
    soc: socs["t7000"],
    kind: "AppleTV",
    first_ios_version: "9.0",
  },

  J105aAP: {
    product_name: "Apple TV 4K",
    product_number: [6, 2],
    internal_name: "J105aAP",
    soc: socs["t8011"],
    kind: "AppleTV",
    first_ios_version: "None",
  },

  K66AP: {
    product_name: "Apple TV 2G",
    product_number: [2, 1],
    internal_name: "K66AP",
    soc: socs["s5l8930x"],
    kind: "AppleTV",
    first_ios_version: "4.1",
  },

  J33AP: {
    product_name: "Apple TV 3",
    product_number: [3, 1],
    internal_name: "J33AP",
    soc: socs["s5l8942x"],
    kind: "AppleTV",
    first_ios_version: "5.1",
  },

  B238aAP: {
    product_name: "HomePod",
    product_number: [1, 1],
    internal_name: "B238aAP",
    soc: socs["t7000"],
    kind: "AudioAccessory",
    first_ios_version: "None",
  },

  B238AP: {
    product_name: "HomePod (Unknown Model)",
    product_number: [1, 2],
    internal_name: "B238AP",
    soc: socs["t7000"],
    kind: "AudioAccessory",
    first_ios_version: "None",
  },

  B520AP: {
    product_name: "HomePod mini",
    product_number: [5, 1],
    internal_name: "B520AP",
    soc: socs["T8006"],
    kind: "AudioAccessory",
    first_ios_version: "None",
  },

  N111sAP: {
    product_name: "Apple Watch Series 3 38mm (Cellular)",
    product_number: [3, 1],
    internal_name: "N111sAP",
    soc: socs["T8004"],
    kind: "Watch",
    first_ios_version: "4.1",
  },

  N27aAP: {
    product_name: "Apple Watch (38mm)",
    product_number: [1, 1],
    internal_name: "N27aAP",
    soc: socs["s7002"],
    kind: "Watch",
    first_ios_version: "None",
  },

  N28aAP: {
    product_name: "Apple Watch (42mm)",
    product_number: [1, 2],
    internal_name: "N28aAP",
    soc: socs["s7002"],
    kind: "Watch",
    first_ios_version: "None",
  },

  N74AP: {
    product_name: "Apple Watch Series 2 (38mm)",
    product_number: [2, 3],
    internal_name: "N74AP",
    soc: socs["T8002"],
    kind: "Watch",
    first_ios_version: "None",
  },

  N75AP: {
    product_name: "Apple Watch Series 2 (42mm)",
    product_number: [2, 4],
    internal_name: "N75AP",
    soc: socs["T8002"],
    kind: "Watch",
    first_ios_version: "None",
  },

  N27dAP: {
    product_name: "Apple Watch Series 1 (38mm)",
    product_number: [2, 6],
    internal_name: "N27dAP",
    soc: socs["T8002"],
    kind: "Watch",
    first_ios_version: "None",
  },

  N28dAP: {
    product_name: "Apple Watch Series 1 (42mm)",
    product_number: [2, 7],
    internal_name: "N28dAP",
    soc: socs["T8002"],
    kind: "Watch",
    first_ios_version: "None",
  },

  N111bAP: {
    product_name: "Apple Watch Series 3 (42mm, LTE)",
    product_number: [3, 2],
    internal_name: "N111bAP",
    soc: socs["T8004"],
    kind: "Watch",
    first_ios_version: "None",
  },

  N121sAP: {
    product_name: "Apple Watch Series 3 (38mm)",
    product_number: [3, 3],
    internal_name: "N121sAP",
    soc: socs["T8004"],
    kind: "Watch",
    first_ios_version: "None",
  },

  N121bAP: {
    product_name: "Apple Watch Series 3 (42mm)",
    product_number: [3, 4],
    internal_name: "N121bAP",
    soc: socs["T8004"],
    kind: "Watch",
    first_ios_version: "None",
  },

  N131bAP: {
    product_name: "Apple Watch Series 4 (44mm)",
    product_number: [4, 2],
    internal_name: "N131bAP",
    soc: socs["T8006"],
    kind: "Watch",
    first_ios_version: "None",
  },

  N131sAP: {
    product_name: "Apple Watch Series 4 (40mm)",
    product_number: [4, 1],
    internal_name: "N131sAP",
    soc: socs["T8006"],
    kind: "Watch",
    first_ios_version: "None",
  },

  N141sAP: {
    product_name: "Apple Watch Series 4 (40mm, LTE)",
    product_number: [4, 3],
    internal_name: "N141sAP",
    soc: socs["T8006"],
    kind: "Watch",
    first_ios_version: "None",
  },

  N141bAP: {
    product_name: "Apple Watch Series 4 (44mm, LTE)",
    product_number: [4, 4],
    internal_name: "N141bAP",
    soc: socs["T8006"],
    kind: "Watch",
    first_ios_version: "None",
  },

  N144sAP: {
    product_name: "Apple Watch Series 5 (40mm)",
    product_number: [5, 1],
    internal_name: "N144sAP",
    soc: socs["T8006"],
    kind: "Watch",
    first_ios_version: "None",
  },

  N144bAP: {
    product_name: "Apple Watch Series 5 (44mm)",
    product_number: [5, 2],
    internal_name: "N144bAP",
    soc: socs["T8006"],
    kind: "Watch",
    first_ios_version: "None",
  },

  N146sAP: {
    product_name: "Apple Watch Series 5 (40mm, LTE)",
    product_number: [5, 3],
    internal_name: "N146sAP",
    soc: socs["T8006"],
    kind: "Watch",
    first_ios_version: "None",
  },

  N146bAP: {
    product_name: "Apple Watch Series 5 (44mm, LTE)",
    product_number: [5, 4],
    internal_name: "N146bAP",
    soc: socs["T8006"],
    kind: "Watch",
    first_ios_version: "None",
  },

  J293AP: {
    product_name: "MacBook Pro (M1, Late 2020)",
    product_number: [17, 1],
    internal_name: "J293AP",
    soc: socs["t8103"],
    kind: "MacBookPro",
    first_ios_version: "11.0.1",
  },

  J273aAP: {
    product_name: "MacBook Air (M1, Late 2020)",
    product_number: [10, 1],
    internal_name: "J273aAP",
    soc: socs["T8027"],
    kind: "MacBookAir",
    first_ios_version: "11.0.1",
  },

  J273AP: {
    product_name: "Mac Mini (M1, Late 2020)",
    product_number: [9, 1],
    internal_name: "J273AP",
    soc: socs["T8027"],
    kind: "Macmini",
    first_ios_version: "11.0.1",
  },

  J274AP: {
    product_name: "Mac Mini (M1, Late 2020)",
    product_number: [9, 1],
    internal_name: "J274AP",
    soc: socs["t8103"],
    kind: "Macmini",
    first_ios_version: "11.0.1",
  },

  J456AP: {
    product_name: "iMac 24-inch (M1, Two Ports, 2021)",
    product_number: [21, 1],
    internal_name: "J456AP",
    soc: socs["t8103"],
    kind: "iMac",
    first_ios_version: "11.3",
  },

  J457AP: {
    product_name: "iMac 24-inch (M1, Four Ports, 2021)",
    product_number: [21, 2],
    internal_name: "J457AP",
    soc: socs["t8103"],
    kind: "iMac",
    first_ios_version: "11.3",
  },

  J413AP: {
    product_name: "MacBook Air (M2, 2022)",
    product_number: [14, 2],
    internal_name: "J413AP",
    soc: socs["t8112"],
    kind: "Mac",
    first_ios_version: "12.4",
  },

  J493AP: {
    product_name: "MacBook Pro (13-inch, M2, 2022)",
    product_number: [14, 7],
    internal_name: "J493AP",
    soc: socs["t8112"],
    kind: "Mac",
    first_ios_version: "12.4",
  },

  J473AP: {
    product_name: "Mac mini (2023)",
    product_number: [14, 3],
    internal_name: "J473AP",
    soc: socs["t8112"],
    kind: "Mac",
    first_ios_version: "13.2",
  },

  J313AP: {
    product_name: "MacBook Air (M1, 2020)",
    product_number: [3, 2],
    internal_name: "J313AP",
    soc: socs["t8103"],
    kind: "MacBook Air",
    first_ios_version: "11.0.1",
  },
};

export { devices, socs };
export type { SOC, iDevice };
