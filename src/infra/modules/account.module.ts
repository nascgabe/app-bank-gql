import { Module } from '@nestjs/common';
import { AccountService } from '../../application/services/account.service';
import { AccountResolver } from '../../presentation/resolvers/account.resolver';

@Module({
  providers: [AccountResolver, AccountService],
})
export class AccountModule { }
