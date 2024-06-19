import { Vendor } from "../vendor/Vendor";

export type Business = {
  address: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  vendors?: Array<Vendor>;
};
