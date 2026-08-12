<<<<<<< HEAD
<<<<<<< HEAD
// src/prisma/prisma.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client.js';
import { prismaClientOptions } from '../lib/prisma.js';


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
=======
=======
>>>>>>> 7645cb5aff4361ddf06b5782121811facec62f03
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client.js';
import { prismaClientOptions } from '../lib/prisma.js';

@Injectable()
export class PrismaService
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy
{
<<<<<<< HEAD
>>>>>>> 107470ae6855e97d173746200ea291616e851d72
=======
>>>>>>> 7645cb5aff4361ddf06b5782121811facec62f03
    constructor() {
        super(prismaClientOptions);
    }

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
<<<<<<< HEAD
<<<<<<< HEAD
        await this.$connect();
=======
        await this.$disconnect();
>>>>>>> 107470ae6855e97d173746200ea291616e851d72
=======
        await this.$disconnect();
>>>>>>> 7645cb5aff4361ddf06b5782121811facec62f03
    }
}