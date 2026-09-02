import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Estoque API')
    .setDescription('API de gerenciamento de Estoque')
    .setVersion('0.0.1')
    .addTag('Produtos', 'Operações de gerenciamento de produtos e estoque')
    .addTag('Autenticação', 'Endpoints de autenticação e login')
    .addTag('Usuários', 'Gerenciamento de usuários do sistema')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  await app.listen(process.env.PORT ?? 5001);
}
bootstrap();
