<<<<<<< HEAD
// src/prisma/prisma.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client.js';
import { prismaClientOptions } from '../lib/prisma.js';


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
=======
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client.js';
import { prismaClientOptions } from '../lib/prisma.js';

@Injectable()
export class PrismaService
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy
{
>>>>>>> 107470ae6855e97d173746200ea291616e851d72
    constructor() {
        super(prismaClientOptions);
    }

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
<<<<<<< HEAD
        await this.$connect();
=======
        await this.$disconnect();
>>>>>>> 107470ae6855e97d173746200ea291616e851d72
    }
}