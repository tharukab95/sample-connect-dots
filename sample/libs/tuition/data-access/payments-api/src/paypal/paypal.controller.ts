import { Controller, Get, Res, Next, Req } from '@nestjs/common';
import { join } from 'path';
import { Response, NextFunction, Request } from 'express';

@Controller('paypal')
export class PaypalController {
  @Get()
  paypalPurchase() {
    return '.' + '/index.html';
  }

  @Get()
  get(@Res() res: Response, @Next() next: NextFunction, @Req() req: Request) {
    res.sendFile(join(process.cwd(), '../client/dist/index.html'));
  }
}
