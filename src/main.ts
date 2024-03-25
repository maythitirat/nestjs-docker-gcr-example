import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000', 'https://www.maythitirat.com'],
    methods: 'GET, HEAD, PUT, POST, DELETE, OPTIONS, PATCH',
    credentials: true,
    allowedHeaders:
      'Origin, X-Requested-With, Content-Type, Accept, Authentication, Access-control-allow-credentials, Access-control-allow-headers, Access-control-allow-methods, Access-control-allow-origin, User-Agent, Referer, Accept-Encoding, Accept-Language, Access-Control-Request-Headers, Cache-Control, Pragma',
  });
  // app.enableCors({
  //   origin: 'https://nestjs-docker-gcr-example-a5lmnu7zia-de.a.run.app',
  // });
  // app.enableCors({
  //   origin: [
  //     'http://localhost:3000',
  //     'https://nestjs-docker-gcr-example-a5lmnu7zia-de.a.run.app',
  //     'http://localhost:3002',
  //   ],
  //   allowedHeaders: ['Accept', 'Content-Type'],
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //   preflightContinue: false,
  //   optionsSuccessStatus: 204,
  //   credentials: true,
  // });
  await app.listen(parseInt(process.env.PORT) || 3002);
}
bootstrap();
