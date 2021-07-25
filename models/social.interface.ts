import {
  ObjectType,
  Field,
} from "type-graphql";

interface ISocial {
  instagram?: string;
  twitter?: string;
  facebook?: string;
  link?: string;
}

@ObjectType()
export class Social implements ISocial {
  @Field(() => String, { nullable: false })
  instagram?: string;
  
  @Field(() => String, { nullable: false })
  twitter?: string; 
  
  @Field(() => String, { nullable: false })
  facebook?: string;

  @Field(() => String, { nullable: false })
  link?: string;
}
