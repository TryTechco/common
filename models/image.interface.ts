import {
  ObjectType,
  Field,
  InputType,
  Float,
  registerEnumType,
} from "type-graphql";

export interface ICroppedImage {
  original_src: string;
  crop: ICroppingProps;
  cropped_src: string;
}

export interface ICroppingProps {
  aspect?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  unit?: CroppingUnit;
}

export enum CroppingUnit {
  PIXEL = "px",
  PERCENT = "%",
}
registerEnumType(CroppingUnit, { name: "CroppingUnit" });

@ObjectType()
export class CroppingProps implements ICroppingProps {
  @Field(() => Float, { nullable: true })
  aspect?: number;

  @Field(() => Float, { nullable: true })
  x?: number;

  @Field(() => Float, { nullable: true })
  y?: number;

  @Field(() => Float, { nullable: true })
  width?: number;

  @Field(() => Float, { nullable: true })
  height?: number;

  @Field(() => CroppingUnit, { nullable: true })
  unit?: CroppingUnit;
}

@ObjectType()
export class CroppedImage implements ICroppedImage {
  @Field(() => String, { nullable: false })
  original_src: string = "";

  @Field(() => CroppingProps, { nullable: false })
  crop: CroppingProps = {};

  @Field(() => String, { nullable: false })
  cropped_src: string = "";
}

@InputType()
export class CroppingPropsInput implements Partial<CroppingProps> {
  @Field(() => Float, { nullable: true })
  aspect?: number;

  @Field(() => Float, { nullable: true })
  x?: number;

  @Field(() => Float, { nullable: true })
  y?: number;

  @Field(() => Float, { nullable: true })
  width?: number;

  @Field(() => Float, { nullable: true })
  height?: number;

  @Field(() => CroppingUnit, { nullable: true })
  unit?: CroppingUnit;
}

@InputType()
export class CroppedImageInput implements Partial<CroppedImage> {
  @Field(() => String, { nullable: false })
  original_src?: string;

  @Field(() => CroppingPropsInput, { nullable: false })
  crop?: CroppingPropsInput;

  @Field(() => String, { nullable: false })
  cropped_src?: string;
}
