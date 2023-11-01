import { InputType, Int, Float, Field } from '@nestjs/graphql';

@InputType()
export class CreateAccountInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  accountNumber: number;

  @Field(() => Float, { description: 'Example field (placeholder)' })
  balance: number;
}
