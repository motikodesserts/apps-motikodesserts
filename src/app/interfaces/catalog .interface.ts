export interface Catalog {
  id: number;
  name: string;
  description: string;
  catalog: {
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
  };
}
