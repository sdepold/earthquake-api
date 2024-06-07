export type Feature = {
  type: string;
  properties: {
    mag: number;
    place: string;
    time: number;
    updated: number;
    url: string;
    detail: string;
    type: string;
    title: string;
  };
  geometry: {
    type: string;
    coordinates: number[];
  };
  id: string;
};

export type Metadata = {
  generated: number;
  url: string;
  title: string;
  status: number;
  api: string;
  count: number;
};

export type ApiResponse = {
  type: string;
  metadata: Metadata;
  features: Feature[];
  bbox: number[];
};
