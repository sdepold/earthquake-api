export type Continent = {
  name: string;
  slug: string;
  bbox: {
    minlatitude: number;
    minlongitude: number;
    maxlatitude: number;
    maxlongitude: number;
  };
};

export const continents: Continent[] = [
  {
    name: "Africa",
    slug: "africa",
    bbox: {
      minlatitude: -35.0,
      minlongitude: -25.0,
      maxlatitude: 37.0,
      maxlongitude: 50.0,
    },
  },
  {
    name: "Antarctica",
    slug: "antarctica",
    bbox: {
      minlatitude: -90.0,
      minlongitude: -180.0,
      maxlatitude: -60.0,
      maxlongitude: 180.0,
    },
  },
  {
    name: "Asia",
    slug: "asia",
    bbox: {
      minlatitude: 1.0,
      minlongitude: 25.0,
      maxlatitude: 77.0,
      maxlongitude: 180.0,
    },
  },
  {
    name: "Europe",
    slug: "europe",
    bbox: {
      minlatitude: 36.0,
      minlongitude: -25.0,
      maxlatitude: 71.0,
      maxlongitude: 60.0,
    },
  },
  {
    name: "North America",
    slug: "north-america",
    bbox: {
      minlatitude: 7.0,
      minlongitude: -168.0,
      maxlatitude: 83.0,
      maxlongitude: -50.0,
    },
  },
  {
    name: "Oceania",
    slug: "oceania",
    bbox: {
      minlatitude: -52.0,
      minlongitude: 110.0,
      maxlatitude: 8.0,
      maxlongitude: 180.0,
    },
  },
  {
    name: "South America",
    slug: "south-america",
    bbox: {
      minlatitude: -56.0,
      minlongitude: -81.0,
      maxlatitude: 12.0,
      maxlongitude: -34.0,
    },
  },
];
