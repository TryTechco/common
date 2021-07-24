import {
  ObjectType,
  Field,
  registerEnumType,
} from "type-graphql";
import { Social } from "./social.interface";
import { Order } from "./order.interface";
import { Asset } from "./asset.interface";


export enum Role {
  ADMIN = "admin",
  GALLERY = "gallery",
  ARTIST = "artist",
  USER = "user",
}
registerEnumType(Role, { name: "Role" });

@ObjectType()
export class Auth0User {
  @Field(() => String, { nullable: false })
  sub: string = "";
  
  @Field(() => String, { nullable: false })
  name: string = "";
  
  @Field(() => String, { nullable: true })
  birthday?: string;
  
  @Field(() => String, { nullable: true })
  email?: string;
  
  @Field(() => String, { nullable: true })
  last_ip?: string;
  
  @Field(() => String, { nullable: true })
  picture?: string;
  
  @Field(() => String, { nullable: true })
  phone_number?: string;
}

@ObjectType()
export class User extends Auth0User {
  @Field(() => String, { nullable: false })
  role: Role = Role.USER;
  
  @Field(() => String, { nullable: true })
  social?: Social;
  
  @Field(() => String, { nullable: true })
  wallet_address?: string;
  
  @Field(() => [Order], { nullable: true })
  orders?: Order[];
  
  @Field(() => String, { nullable: true })
  address?: string;
}

@ObjectType()
export class Gallery extends User {
  @Field(() => String, { nullable: false })
  role: Role = Role.GALLERY;
  
  @Field(() => [Asset], { nullable: true })
  products?: Asset[];
  
  @Field(() => [Artist], { nullable: true })
  artists?: Artist[];
}

@ObjectType()
export class Artist extends User {
  @Field(() => String, { nullable: false })
  role: Role = Role.ARTIST;
  
  @Field(() => [Asset], { nullable: true })
  collection?: Asset[];
  
  @Field(() => Gallery, { nullable: true })
  boss?: Gallery;
}


// ======Reference=====
// export type Role = "admin" | "gallery" | "artist" | "user";
// export interface Auth0User {
//   user_id: string;
//   username: string;
//   birthday?: string;
//   email?: string;
//   last_ip?: string;
//   picture?: string;
//   phone_number?: string;
// }
// export interface User extends Auth0User {
//   role: Role;
//   social?: Social;
//   wallet_address?: string;
//   orders?: Order[];
//   address?: string;
// }
// export interface Gallery extends User {
//   role: "gallery";
//   products?: Asset[];
//   artists?: Artist[];
// }
// export interface Artist extends User {
//   role: "artist";
//   collection?: Asset[];
//   boss?: Gallery;
// }

