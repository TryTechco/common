import {
  ObjectType,
  Field,
  InputType,
} from "type-graphql";
import { Social, SocialInput } from "./social.interface";

export enum Auth0RoleName {
  ADMIN = "admin",
  GALLERY = "gallery",
  ARTIST = "artist",
  USER = "user",
}

export interface IAuth0User {
  sub: string;
}

export interface IRoleInfo {
  id: string;
  name: string;
  social?: Social;
  description?: string;
  images?: string[];
}

export interface IBelongsToIdentifier {
  sub?: string;
  name?: string;
}

@ObjectType()
export class BaseRole implements IAuth0User, IRoleInfo {
  @Field(() => String, { nullable: false })
  id: string = "";

  @Field(() => String, { nullable: false })
  sub: string = "";

  @Field(() => String, { nullable: false })
  name: string = "";
  
  @Field(() => Social, { nullable: true })
  social?: Social;
  
  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => [String], { nullable: true })
  images?: string[];
}

@ObjectType()
export class Gallery extends BaseRole {}

@ObjectType()
export class Artist extends BaseRole {
  @Field(() => [Gallery], { nullable: true })
  belongsTo?: Gallery;

  belongsToIdentifier: IBelongsToIdentifier[] = [];
}

@InputType()
export class CreateOrUpdateGalleryInput {
  @Field(() => String, { nullable: false })
  name?: string;
  
  @Field(() => SocialInput, { nullable: true })
  social?: SocialInput;
  
  @Field(() => String, { nullable: false })
  description?: string;

  @Field(() => [String], { nullable: true })
  images?: string[];
}

@InputType()
export class CreateOrUpdateArtistInput {
  @Field(() => String, { nullable: false })
  name?: string;
  
  @Field(() => SocialInput, { nullable: true })
  social?: SocialInput;
  
  @Field(() => String, { nullable: false })
  description?: string;

  @Field(() => [String], { nullable: true })
  images?: string[];

  @Field(() => [BelongsToIdentifier], { nullable: true })
  belongsToIdentifier?: BelongsToIdentifier[];
}

@InputType()
export class BelongsToIdentifier implements IBelongsToIdentifier {
  @Field(() => String, { nullable: false })
  sub?: string;
  
  @Field(() => String, { nullable: false })
  name?: string;
}

