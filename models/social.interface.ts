import { ObjectType, Field, InputType } from "type-graphql";

interface ISocial {
  instagram?: string;
  twitter?: string;
  facebook?: string;
  link?: string;
}

@ObjectType()
export class Social implements ISocial {
  @Field(() => String, { nullable: true })
  instagram?: string;

  @Field(() => String, { nullable: true })
  twitter?: string;

  @Field(() => String, { nullable: true })
  facebook?: string;

  @Field(() => String, { nullable: true })
  link?: string;
}

@InputType()
export class SocialInput implements Partial<Social> {
  @Field(() => String, { nullable: true })
  instagram?: string;

  @Field(() => String, { nullable: true })
  twitter?: string;

  @Field(() => String, { nullable: true })
  facebook?: string;

  @Field(() => String, { nullable: true })
  link?: string;
}
