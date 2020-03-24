import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Huuuray!!!';
  }

  getPing(): string {
    return 'Pong!';
  }
}
