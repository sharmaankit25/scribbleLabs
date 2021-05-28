import { Field, Int, ObjectType, ID } from '@nestjs/graphql'

@ObjectType()
export class CatDTO {
  @Field(() => ID)
  id: string

  @Field()
  name: string

  @Field(() => Int)
  age: number

  @Field()
  breed: string
}
