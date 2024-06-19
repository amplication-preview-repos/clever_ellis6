import { Business } from "../business/Business";
import { Product } from "../product/Product";

export type Vendor = {
  business?: Business | null;
  contactInformation: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
