import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { ProductUpdateManyWithoutVendorsInput } from "./ProductUpdateManyWithoutVendorsInput";

export type VendorUpdateInput = {
  business?: BusinessWhereUniqueInput | null;
  contactInformation?: string | null;
  name?: string | null;
  products?: ProductUpdateManyWithoutVendorsInput;
};
