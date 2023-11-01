import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AccountService } from '@application/services/account.service';
import { Account } from '@domain/entities/account.entity';
import { CreateAccountInput } from '@application/dto/create-account.input';
import { UpdateAccountInput } from '@application/dto/update-account.input';

@Resolver(() => Account)
export class AccountResolver {
  constructor(private readonly accountService: AccountService) { }

  @Mutation(() => Account)
  createAccount(@Args('createAccountInput') createAccountInput: CreateAccountInput) {
    return this.accountService.createAccount(createAccountInput);
  }

  @Query(() => Account)
  getAccountBalance(@Args('accountNumber', { type: () => Int }) accountNumber: number) {
    return this.accountService.getAccountByNumber(accountNumber);
  }

  @Mutation(() => Account)
  updateAccountBalance(
    @Args('accountNumber', { type: () => Int }) accountNumber: number,
    @Args('updateAccountInput') updateAccountInput: UpdateAccountInput,
  ) {
    return this.accountService.updateBalance(accountNumber, updateAccountInput);
  }
}
