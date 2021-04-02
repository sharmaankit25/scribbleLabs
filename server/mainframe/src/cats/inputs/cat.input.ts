
import { InputType } from "@nestjs/graphql";
import { Field, Int } from "@nestjs/graphql";

@InputType({ isAbstract: true })
export class CatInput {
  @Field()
  name: string;
  @Field(() => Int)
  age: number;
  @Field()
  breed: string;
}
