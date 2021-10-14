import { ObjectType, Field, InputType, Int } from "type-graphql";

export interface IProductInfo {
  id: string;
  name: string;
  owner: string;
  artist: string;
  gallery?: string;
  description?: string;
  view_count?: number;
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

  @Field(() => [Int], { nullable: true })
  view_count?: number = 0;
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
