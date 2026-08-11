import {
  Injectable,
  OnModuleDestroy,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { PrismaClient } from 'generated/prisma/client.js';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnApplicationBootstrap, OnModuleDestroy
{
  async onApplicationBootstrap() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}