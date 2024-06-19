import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { VendorListRelationFilter } from "../vendor/VendorListRelationFilter";

export type BusinessWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  vendors?: VendorListRelationFilter;
};
