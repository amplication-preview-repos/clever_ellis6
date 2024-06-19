import { VendorUpdateManyWithoutBusinessesInput } from "./VendorUpdateManyWithoutBusinessesInput";

export type BusinessUpdateInput = {
  address?: string | null;
  name?: string | null;
  vendors?: VendorUpdateManyWithoutBusinessesInput;
};
