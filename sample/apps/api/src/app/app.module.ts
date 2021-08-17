import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoreApiModule } from '@tuition/core-api';
import { AuthApiModule } from '@tuition/auth-api';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThrottlerModule } from '@nestjs/throttler';
import { GetUserMiddleware } from '@tuition/api-utility';

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
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(GetUserMiddleware).forRoutes(CoreApiModule, AuthApiModule);
  }
}
