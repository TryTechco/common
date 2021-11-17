import { Field, InputType } from "type-graphql";

export interface ISendEmailOptions {
  sender_name?: string;
  sender_email?: string;
  subject?: string;
  title_head?: string;
  title_footer1?: string;
  title_footer2?: string;
  text?: string;
}

@InputType()
export class SendEmailOptions implements ISendEmailOptions {
  @Field(() => String, { nullable: true })
  sender_name?: string;

  @Field(() => String, { nullable: true })
  sender_email?: string;

  @Field(() => String, { nullable: true })
  subject?: string;

  @Field(() => String, { nullable: true })
  title_head?: string;

  @Field(() => String, { nullable: true })
  title_footer1?: string;

  @Field(() => String, { nullable: true })
  title_footer2?: string;

  @Field(() => String, { nullable: true })
  text?: string;
}
