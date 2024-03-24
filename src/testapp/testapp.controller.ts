import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { IRequestPackListBody, TestappService } from './testapp.service';

@Controller('testapp')
export class TestappController {
  constructor(private readonly testappService: TestappService) {}

  // @Public()
  @Post('requestPackList')
  @HttpCode(HttpStatus.OK)
  requestPackList(@Body() body: IRequestPackListBody) {
    return this.testappService.requestPackList({ useMock: true, body: body });
  }
}
