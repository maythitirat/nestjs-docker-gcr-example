import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    origin: 'https://nestjs-docker-gcr-example-a5lmnu7zia-de.a.run.app',
  });
  await app.listen(parseInt(process.env.PORT) || 3002);
}
bootstrap();
