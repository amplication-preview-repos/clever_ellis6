import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { ProductCreateNestedManyWithoutVendorsInput } from "./ProductCreateNestedManyWithoutVendorsInput";

export type VendorCreateInput = {
  business?: BusinessWhereUniqueInput | null;
  contactInformation?: string | null;
  name?: string | null;
  products?: ProductCreateNestedManyWithoutVendorsInput;
};
