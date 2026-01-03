
export interface Campaign {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  accentColor: string;
  gridSpan?: string;
}
