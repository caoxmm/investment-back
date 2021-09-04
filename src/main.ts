import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as path from 'path';

async function bootstrap() {
  dotenv.config({ path: path.resolve(__dirname, '../a.env') });
  console.log(process.env);
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    credentials: true,
  });
  await app.listen(3001);
}
bootstrap();
