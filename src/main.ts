import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7645cb5aff4361ddf06b5782121811facec62f03
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import 'dotenv/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Systema')
        .setDescription('API de gerenciamento de Estoque')
        .setVersion('0.0.1')
        .build()
    
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }),);
    await app.listen(process.env.PORT ?? 5001);
<<<<<<< HEAD
=======
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  await app.listen(process.env.PORT ?? 5000);
>>>>>>> 107470ae6855e97d173746200ea291616e851d72
=======
>>>>>>> 7645cb5aff4361ddf06b5782121811facec62f03
}
bootstrap();