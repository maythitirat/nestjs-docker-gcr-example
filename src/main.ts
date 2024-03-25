import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  // app.enableCors({
  //   origin: true,
  //   // methods: 'GET, HEAD, PUT, POST, DELETE, OPTIONS, PATCH',
  //   credentials;: true,
  //   // allowedHeaders:
  //   //   'Origin, X-Requested-With, Content-Type, Accept, Authentication, Access-control-allow-credentials, Access-control-allow-headers, Access-control-allow-methods, Access-control-allow-origin, User-Agent, Referer, Accept-Encoding, Accept-Language, Access-Control-Request-Headers, Cache-Control, Pragma',
  // });
  // app.enableCors({
  //   origin: true,
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
  // app.use(function (req, res, next) {
  //   //console.log('headers: ' + JSON.stringify(req.headers));
  //   console.log('headers.x-forwarded-for: ' + req.headers['x-forwarded-for']);
  //   console.log('headers.origin: ' + req.headers.origin);
  //   console.log('headers.host: ' + req.headers.host);
  //   req.headers.origin = req.headers.origin || req.headers.host;
  //   next();

  await app.listen(parseInt(process.env.PORT) || 3002);
}
bootstrap();
