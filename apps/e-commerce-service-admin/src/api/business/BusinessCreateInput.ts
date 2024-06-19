import { VendorCreateNestedManyWithoutBusinessesInput } from "./VendorCreateNestedManyWithoutBusinessesInput";

export type BusinessCreateInput = {
  address?: string | null;
  name?: string | null;
  vendors?: VendorCreateNestedManyWithoutBusinessesInput;
};
