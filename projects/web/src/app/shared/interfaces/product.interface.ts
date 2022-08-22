export interface Product {
  id: number;
  name: string;
  short_description: string;
  description: string;
  product: {
    id: number;
    code: string;
    status: boolean;
    categories: [
      {
        id: number;
        code: string;
        status: boolean;
      }
    ];
    images: [
      {
        id: number;
        name: string;
        image: string;
      }
    ];
  };
}
