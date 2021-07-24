import "reflect-metadata";
import {
  registerEnumType,
  ObjectType,
  Field,
  ID,
  Int,
  Float,
} from "type-graphql";
import { CreateAssetResponse } from "./nft.interface";
import { Gallery, Artist } from "./user.interface";


export enum Unit {
  USD = "usd",
  NTD = "ntd",
}
registerEnumType(Unit, { name: "Unit" });

@ObjectType()
export class Asset {
  @Field(() => String, { nullable: false })
  id: string = "";
  
  @Field(() => String, { nullable: false })
  name: string = "";
  
  @Field(() => ID, { nullable: false })
  created_at: number = Date.now();
  
  @Field({ nullable: false })
  owner: Gallery | Artist = {} as Gallery;
  
  @Field(() => Float, { nullable: false })
  price: number = 0;
  
  @Field(() => Unit, { nullable: false })
  unit: Unit = Unit.USD;
  
  @Field(() => String, { nullable: true })
  externalUrl?: string;
  
  @Field(() => [String], { nullable: false })
  images: string[] = [];
  
  @Field(() => String, { nullable: false })
  description: string = "";
  
  @Field(() => Boolean, { nullable: false })
  isNFT: boolean = false;
  
  @Field(() => String, { nullable: true })
  NFTLink?: string;
  
  @Field(() => String, { nullable: true })
  NFTInfo?: CreateAssetResponse;
  
  @Field(() => Int, { nullable: false })
  inventoryCount: number = 0;
  
  @Field(() => Boolean, { nullable: false })
  sold: boolean = false;
}


// ======Reference=====
// export type Unit = "USD" | "NTD";
// export interface Asset {
//   id: string;
//   name: string;
//   createdAt: number;
//   owner: Gallery | Artist;
//   price: number;
//   unit: string;
//   externalUrl: string;
//   images?: string[];
//   description: string;
//   isNFT: boolean;
//   NFTLink?: string;
//   NFTInfo?: CreateAssetResponse;
//   inventoryCount: number;
//   sold: boolean;
// }