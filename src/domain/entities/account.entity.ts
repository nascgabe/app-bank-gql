import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Account {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  accountNumber: number;

  @Field(() => Float, { description: 'Example field (placeholder)' })
  balance: number;
}
