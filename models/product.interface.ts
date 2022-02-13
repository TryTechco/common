import { ObjectType, Field, InputType, Int } from "type-graphql";

export interface IOrderInfo {
  id: string;
  number: number;
}

export interface IProductInfo {
  id: string;
  name: string;
  owner: string;
  artist: string;
  gallery?: string;
  description?: string;
  view_count?: number;
  like_count?: number;
  sold_count?: number;
  sold_order?: IOrderInfo[];
}

@ObjectType()
export class Order implements IOrderInfo {
  @Field(() => String, { nullable: false })
  id: string = "";

  @Field(() => Int, { nullable: false })
  number: number = 0;
}

@ObjectType()
export class Product implements IProductInfo {
  @Field(() => String, { nullable: false })
  id: string = "";

  @Field(() => String, { nullable: false })
  name: string = "";

  @Field(() => String, { nullable: false })
  owner: string = "";

  @Field(() => String, { nullable: false })
  artist: string = "";

  @Field(() => String, { nullable: false })
  gallery?: string = "";

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Int, { nullable: true })
  view_count?: number = 0;

  @Field(() => Int, { nullable: true })
  like_count?: number = 0;

  @Field(() => Int, { nullable: true })
  sold_count?: number = 0;

  @Field(() => [Order], { nullable: true })
  sold_order?: Order[] = [];
}

@InputType()
export class CreateOrUpdateProductInput {
  @Field(() => String, { nullable: false })
  id?: string;

  @Field(() => String, { nullable: false })
  name?: string;

  @Field(() => String, { nullable: false })
  owner?: string;

  @Field(() => String, { nullable: false })
  artist?: string;

  @Field(() => String, { nullable: false })
  gallery?: string;

  @Field(() => String, { nullable: false })
  description?: string;
}
