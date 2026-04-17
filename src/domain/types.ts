export type PriceLevel = 1 | 2 | 3 | 4;

export interface Restaurant {
  id: string;
  name: string;
  photos: string[];
  categories: string[];
  rating: number;
  price: PriceLevel;
  isOpen: boolean;
  openHours: string;
  address: string;
  lat: number;
  lng: number;
  description: string;
}

export interface Review {
  id: string;
  restaurantId: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

export interface RestaurantFilters {
  search?: string;       // server-side: cuisine/category text
  openNow?: boolean;     // client-side
  prices?: PriceLevel[]; // client-side
}
