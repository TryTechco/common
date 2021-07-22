import { User } from "./user.interface";
import { Asset } from "./asset.interface";

export type Status = "handling" | "delivering" | "delivered" | "failed";

export type DeliveryMethod = "shipping" | "pickup";

export interface Order {
  id: string;
  createdAt: string;
  buyer: User;
  address: string;
  shippingFeePrice: number;
  shippingFeeUnit: string;
  status: Status;
  products: Asset[];
  deliveryMethod: DeliveryMethod;
  discount: number;
}
