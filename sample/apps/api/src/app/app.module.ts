import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoreApiModule } from '@tuition/core-api';
import { AuthApiModule } from '@tuition/auth-api';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Dragon@321',
      database: 'tuition_core',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CoreApiModule,
    AuthApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
