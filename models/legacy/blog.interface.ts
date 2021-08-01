import {
  ObjectType,
  Field,
  ID,
} from "type-graphql";

interface IBlog {
  id: string;
  title: string;
  createAt: number;
  banner: string;
  content: string;
}

@ObjectType()
export class Blog implements IBlog {
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
