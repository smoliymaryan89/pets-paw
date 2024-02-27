export interface Image {
  id: string;
  width: number;
  height: number;
  url: string;
}

export interface Weight {
  imperial: string;
  metric: string;
}

export interface Breed {
  id: string;
  name: string;
  alt_names: string;
  temperament: string;
  origin: string;
  life_span: string;
  image: Image;
  weight: Weight;
}

type BreedWithoutImage = Omit<Breed, "image">;

export interface BreedByParams extends Image {
  breeds: BreedWithoutImage[];
}

export interface BreedParams {
  breed_ids: string;
  limit: string;
  has_breeds?: boolean;
  page?: number;
  mime_types?: string;
  order?: "RANDOM" | "ASC" | "DESC";
}
