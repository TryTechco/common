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

  @Field(() => [Payment], { nullable: true })
  payment?: Payment[];

  @Field(() => [Credential], { nullable: true })
  credential?: Credential[];
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

@ObjectType()
export class Payment {
  @Field(() => String, { nullable: true })
  cardName?: string;

  @Field(() => String, { nullable: true })
  cardToken?: string;

  @Field(() => String, { nullable: true })
  lastFour?: string;
}

@ObjectType()
export class Credential {
  @Field(() => String, { nullable: true })
  cardToken?: string;

  @Field(() => String, { nullable: true })
  cardKey?: string;
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

  @Field(() => [PaymentInput], { nullable: true })
  payment?: PaymentInput[];
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

@InputType()
export class PaymentInput {
  @Field(() => String, { nullable: true })
  cardName?: string;

  @Field(() => String, { nullable: true })
  cardKey?: string;

  @Field(() => String, { nullable: true })
  cardToken?: string;

  @Field(() => String, { nullable: true })
  lastFour?: string;
}

@InputType()
export class CredentialInput {
  @Field(() => String, { nullable: true })
  cardToken?: string;

  @Field(() => String, { nullable: true })
  cardKey?: string;
}
