import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TestappModule } from './testapp/testapp.module';
import { TestappController } from './testapp/testapp.controller';
import { TestappService } from './testapp/testapp.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TestappModule,
    HttpModule,
  ],
  controllers: [AppController, TestappController],
  providers: [AppService, TestappService],
})
export class AppModule {}
