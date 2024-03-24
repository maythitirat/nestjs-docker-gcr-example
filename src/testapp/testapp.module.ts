import { Module } from '@nestjs/common';
import { TestappService } from './testapp.service';
import { TestappController } from './testapp.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [TestappController],
  providers: [TestappService],
})
export class TestappModule {}
