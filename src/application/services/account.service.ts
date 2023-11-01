import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountInput } from '@application/dto/create-account.input';
import { UpdateAccountInput } from '@application/dto/update-account.input';
import { PrismaService } from '../../infra/data/client/prisma.service';

@Injectable()
export class AccountService {
  constructor(private readonly prismaService: PrismaService) { }

  async createAccount(createAccountInput: CreateAccountInput) {
    return this.prismaService.account.create({
      data: createAccountInput
    });
  }

  async getAccountByNumber(accountNumber: number) {
    const account = await this.prismaService.account.findFirst({
      where: {
        accountNumber
      }
    });

    if (!account) {
      throw new NotFoundException('Conta não encontrada.');
    }

    return account;
  }

  async updateBalance(accountNumber: number, updateAccountInput: UpdateAccountInput) {
    const account = await this.getAccountByNumber(accountNumber);

    if (account.balance + updateAccountInput.balance < 0) {
      throw new Error('Saldo insuficiente.');
    }

    return this.prismaService.account.update({
      where: {
        accountNumber
      },
      data: {
        balance: account.balance + updateAccountInput.balance
      }
    });
  }
}
