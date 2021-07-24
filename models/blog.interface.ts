import {
  ObjectType,
  Field,
  ID,
} from "type-graphql";


@ObjectType()
export class Blog {
  @Field(() => String, { nullable: false })
  id: string = "";
  
  @Field(() => String, { nullable: false })
  title: string = ""; 
  
  @Field(() => ID, { nullable: false })
  createAt: number = Date.now();
  
  @Field(() => String, { nullable: false })
  banner: string = "";
  
  @Field(() => String, { nullable: false })
  content: string = "";
}


// ======Reference=====
// export interface Blog {
//   id: string;
//   title: string;
//   createAt: number;
//   banner: string;
//   content: string;
// }
