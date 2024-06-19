import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";
import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";

export type ProductCreateInput = {
  description?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  price?: number | null;
  vendor?: VendorWhereUniqueInput | null;
};
