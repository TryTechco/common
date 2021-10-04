import { ObjectType, Field } from "type-graphql";

interface IRegion {
  ip?: string; // "73.225.187.33";
  continent_code?: string; //"NA";
  continent_name?: string; //"North America";
  country_code?: string; //"US";
  country_name?: string; //"United States";
  region_code?: string; //"WA";
  region_name?: string; //"Washington";
  city?: string; //"Cottage Lake";
  zip?: string; //"98077";
}

@ObjectType()
export class Region implements IRegion {
  @Field(() => String, { nullable: true })
  ip?: string; // "73.225.187.33";

  @Field(() => String, { nullable: true })
  continent_code?: string; //"NA";

  @Field(() => String, { nullable: true })
  continent_name?: string; //"North America";

  @Field(() => String, { nullable: true })
  country_code?: string; //"US";

  @Field(() => String, { nullable: true })
  country_name?: string; //"United States";

  @Field(() => String, { nullable: true })
  region_code?: string; //"WA";

  @Field(() => String, { nullable: true })
  region_name?: string; //"Washington";

  @Field(() => String, { nullable: true })
  city?: string; //"Cottage Lake";

  @Field(() => String, { nullable: true })
  zip?: string; //"98077";
}
