import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';

@Global()
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
})
<<<<<<< HEAD
<<<<<<< HEAD
export class PrismaModule {}
=======
export class PrismaModule {}
>>>>>>> 107470ae6855e97d173746200ea291616e851d72
=======
export class PrismaModule {}
>>>>>>> 7645cb5aff4361ddf06b5782121811facec62f03
