import { Order } from "../order/Order";
import { Vendor } from "../vendor/Vendor";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  updatedAt: Date;
  vendor?: Vendor | null;
};
