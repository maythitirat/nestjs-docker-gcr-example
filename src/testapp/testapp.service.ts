import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import * as packlistDtac from './data/requestPackListDtac.json';
import * as packlistGuestMode from './data/requestPackListGuestMode.json';
import * as packlistTrue from './data/requestPacklistTrue.json';

export interface IRequestPackListBody {
  subrNumb?: string;
  lang?: string;
  channel: string;
  trackingId: string;
  bannerType: string;
  mappingId: string;
  dtacId: string;
  dtacFrom: string;
  brand: Brand;
}

enum Brand {
  True = 'true',
  Dtac = 'dtac',
}

@Injectable()
export class TestappService {
  constructor(private readonly httpService: HttpService) {}
  async requestPackList({
    useMock,
    body,
  }: {
    useMock: boolean;
    body: IRequestPackListBody;
  }): Promise<any> {
    console.log('body: ', body);
    try {
      if (!useMock) {
        const headersRequest = {
          Sessionid: 'O2024022222381701113239',
          Sourcesystemid: 'ESVWEB',
        };
        const { data } = await firstValueFrom(
          this.httpService
            .post(
              'https://ddchpackagetest.test.dtac.co.th/api/upsell/packlistv2/requestPackListV3',
              body,
              { headers: headersRequest },
            )
            .pipe(
              catchError((error: AxiosError) => {
                console.log(error.response.data);
                throw new HttpException(
                  error.response.data,
                  HttpStatus.BAD_REQUEST,
                );
              }),
            ),
        );
        return data;
      } else {
        return body.subrNumb && body.brand == Brand.Dtac
          ? packlistDtac
          : body.subrNumb && body.brand == Brand.True
            ? packlistTrue
            : packlistGuestMode;
      }
    } catch (error) {
      console.log('error : ', error);
    }
  }
  // async requestPackList(body: IRequestPackListBody): Promise<any> {
  //   return body.subrNumb ? packlist : packlistGuestMode;
  // }
}
