import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
  await app.listen(process.env.PORT || 3333);
}
bootstrap();
