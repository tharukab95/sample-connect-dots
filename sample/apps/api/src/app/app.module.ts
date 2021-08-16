import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoreApiModule } from '@tuition/core-api';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    CoreApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
