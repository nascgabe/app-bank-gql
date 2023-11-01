import { Module } from '@nestjs/common';
import { AppService } from '../../application/services/app.service';
import { DataModule } from './data.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AccountModule } from './account.module';

@Module({
  imports: [
    DataModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    AccountModule
  ],
  providers: [AppService],
})
export class AppModule { }
