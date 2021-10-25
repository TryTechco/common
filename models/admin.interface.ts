import { Field, InputType } from "type-graphql";

@InputType()
export class LoginInput {
  @Field(() => String, { nullable: false })
  username?: string;

  @Field(() => String, { nullable: false })
  password?: string;
}
