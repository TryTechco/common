import {
  ObjectType,
  Field,
} from "type-graphql";


@ObjectType()
export class Social {
  @Field(() => String, { nullable: false })
  instagram?: string;
  
  @Field(() => String, { nullable: false })
  twitter?: string; 
  
  @Field(() => String, { nullable: false })
  facebook?: string;

  @Field(() => String, { nullable: false })
  link?: string;
}


// ======Reference=====
// export interface Social {
//   instagram?: string;
//   twitter?: string;
//   facebook?: string;
//   link?: string;
// }