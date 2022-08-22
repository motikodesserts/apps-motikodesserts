export interface Category {
  id: number;
  name: string;
  short_description: string;
  description: string;
  category: {
    id: number;
    code: string;
  };
}
