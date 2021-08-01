import "reflect-metadata";
import {
  registerEnumType,
  ObjectType,
  Field,
  ID,
  Int,
  Float,
  createUnionType,
} from "type-graphql";
import { CreateAssetResponse } from "./nft.interface";
import { Gallery, Artist } from "./user.interface";

interface IAsset {
  id: string;
  name: string;
  created_at: number;
  owner: Gallery | Artist | undefined;
  price: number;
  unit: string;
  externalUrl: string;
  images?: string[];
  description: string;
  isNFT: boolean;
  NFTLink?: string;
  NFTInfo?: CreateAssetResponse;
  inventoryCount: number;
  sold: boolean;
}

export enum Unit {
  USD = "usd",
  NTD = "ntd",
}
registerEnumType(Unit, { name: "Unit" });

export const OwnerUnion = createUnionType({
  name: "owner",
  types: () => [Gallery, Artist] as const,
  resolveType: value => {
    if ("products" in value) {
      return Gallery; 
    }
    if ("collections" in value) {
      return Artist; 
    }
    return undefined;
  },
});

@ObjectType()
export class Asset implements IAsset {
  @Field(() => String, { nullable: false })
  id: string = "";
  
  @Field(() => String, { nullable: false })
  name: string = "";
  
  @Field(() => ID, { nullable: false })
  created_at: number = Date.now();
  
  @Field(() => OwnerUnion, { nullable: false })
  owner: typeof OwnerUnion = {} as Gallery;
  
  @Field(() => Float, { nullable: false })
  price: number = 0;
  
  @Field(() => Unit, { nullable: false })
  unit: Unit = Unit.USD;
  
  @Field(() => String, { nullable: false })
  externalUrl: string = "";
  
  @Field(() => [String], { nullable: true })
  images?: string[];
  
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