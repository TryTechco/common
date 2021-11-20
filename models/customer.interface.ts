import { Field, InputType, ObjectType } from "type-graphql";
import { BaseRole, SocialInput } from ".";

@ObjectType()
export class Customer extends BaseRole {
  @Field(() => [String], { nullable: true })
  favorite?: string[];

  @Field(() => Address, { nullable: true })
  shipping_address?: Address;

  @Field(() => Address, { nullable: true })
  billing_address?: Address;

  @Field(() => [String], { nullable: true })
  payment?: String[];
}

@ObjectType()
export class Address {
  @Field(() => String, { nullable: true })
  fullName?: string;

  @Field(() => String, { nullable: true })
  company?: string;

  @Field(() => String, { nullable: true })
  streetLine1?: string;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  province?: string;

  @Field(() => String, { nullable: true })
  postalCode?: string;

  @Field(() => String, { nullable: true })
  countryCode?: string;
}

@InputType()
export class CreateOrUpdateCustomerInput {
  @Field(() => String, { nullable: false })
  id?: string;

  @Field(() => String, { nullable: false })
  name?: string;

  @Field(() => SocialInput, { nullable: true })
  social?: SocialInput;

  @Field(() => String, { nullable: false })
  description?: string;

  @Field(() => [String], { nullable: true })
  images?: string[];

  @Field(() => [String], { nullable: true })
  favorite?: string[];

  @Field(() => AddressInput, { nullable: true })
  shipping_address?: AddressInput;

  @Field(() => AddressInput, { nullable: true })
  billing_address?: AddressInput;

  @Field(() => [String], { nullable: true })
  payment?: String[];
}

@InputType()
export class AddressInput {
  @Field(() => String, { nullable: true })
  fullName?: string;

  @Field(() => String, { nullable: true })
  company?: string;

  @Field(() => String, { nullable: true })
  streetLine1?: string;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  province?: string;

  @Field(() => String, { nullable: true })
  postalCode?: string;

  @Field(() => String, { nullable: true })
  countryCode?: string;
}
