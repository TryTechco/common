import {
  registerEnumType,
  ObjectType,
  Field,
  ID,
  Float,
} from "type-graphql";
import { User } from "./user.interface";
import { Asset, Unit } from "./asset.interface";


export enum DeliveryStatus {
  PROCESSING_ORDER = "processing_order",
  SHIPPED = "shipped",
  DELIVERED = "delivered",
  CANCELLED = "cancelled",
}
export enum PaymentStatus {
  UNPAID = "unpaid",
  PAID = "paid",
  REFUNDED = "refunded",
}
export enum DeliveryMethod {
  SHIPPING = "shipping",
  PICKUP = "pickup",
}
export enum PaymentMethod {
  CASH_ON_DElIVERY = "cash_on_delivery",
  CASH_ON_PICKUP = "cash_on_pickup",
  CREDIT_CARD = "credit_card",
}
registerEnumType(DeliveryStatus, { name: "DeliveryStatus" });
registerEnumType(PaymentStatus, { name: "PaymentStatus" });
registerEnumType(DeliveryMethod, { name: "DeliveryMethod" });
registerEnumType(PaymentMethod, { name: "PaymentMethod" });

@ObjectType()
export class Order {
  @Field(() => String, { nullable: false })
  id: string = "";
  
  @Field(() => ID, { nullable: false })
  created_at: number = Date.now(); 
  
  @Field(() => User, { nullable: false })
  buyer: User = {} as User;
  
  @Field(() => String, { nullable: false })
  address: string = "";
  
  @Field(() => Float, { nullable: false })
  shippingFee: number = 0;
  
  @Field(() => Unit, { nullable: false })
  shippingFeeUnit: Unit = Unit.USD;

  @Field(() => Float, { nullable: false })
  totalPrice: number = 0;

  @Field(() => Unit, { nullable: false })
  totalPriceUnit: Unit = Unit.USD;
  
  @Field(() => [Asset], { nullable: false })
  products: Asset[] = [];

  @Field(() => DeliveryMethod, { nullable: false })
  deliveryMethod: DeliveryMethod = DeliveryMethod.SHIPPING;

  @Field(() => PaymentMethod, { nullable: false })
  paymentMethod: PaymentMethod = PaymentMethod.CREDIT_CARD;
  
  @Field(() => DeliveryStatus, { nullable: false })
  deliveryStatus: DeliveryStatus = DeliveryStatus.PROCESSING_ORDER;

  @Field(() => PaymentStatus, { nullable: false })
  paymentStatus: PaymentStatus = PaymentStatus.UNPAID;
  
  @Field(() => Float, { nullable: false })
  discount: number = 0;
}


// ======Reference=====
// export type Status = "processing_order" | "shipped" | "delivered" | "cancelled";
// export type DeliveryMethod = "shipping" | "pickup";
// export interface Order {
//   id: string;
//   createdAt: string;
//   buyer: User;
//   address: string;
//   shippingFee: number;
//   shippingFeeUnit: string;
//   status: Status;
//   products: Asset[];
//   deliveryMethod: DeliveryMethod;
//   discount: number;
// }