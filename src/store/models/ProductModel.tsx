export interface ProductModel {
  attributes?: {
    name?: string;
    price?: number;
    description?: string;
    image_app_url?: string;
    slugs?: {
      department?: string;
    };
    relationships?: any;
  };
  type?: string;
  id?: string | number;
}
