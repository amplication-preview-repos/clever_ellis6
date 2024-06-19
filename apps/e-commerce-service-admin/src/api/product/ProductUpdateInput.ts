import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";
import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";

export type ProductUpdateInput = {
  description?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  price?: number | null;
  vendor?: VendorWhereUniqueInput | null;
};
