import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderUpdateInput = {
  orderDate?: Date | null;
  product?: ProductWhereUniqueInput | null;
  totalAmount?: number | null;
};
