import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';

@Global()
@Module({
    providers: [PrismaService],
    exports: [PrismaService],
})
<<<<<<< HEAD
export class PrismaModule {}
=======
export class PrismaModule {}
>>>>>>> 107470ae6855e97d173746200ea291616e851d72
