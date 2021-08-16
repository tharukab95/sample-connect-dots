/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationError, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { ValidationFilter } from './app/filters/validation.filter';
import { ValidationException } from './app/filters/validation.exception';

import { AppModule } from './app/app.module';
import { FallbackExceptionFilter } from './app/filters/fallback.filter';
import { HttpExceptionFilter } from './app/filters/http.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);


    app.useGlobalFilters(
      new FallbackExceptionFilter(),
      new HttpExceptionFilter(),
      new ValidationFilter()
    );

    app.useGlobalPipes(
      new ValidationPipe({
        skipMissingProperties: true,
        exceptionFactory: (errors: ValidationError[]) => {
          const messages = errors.map(
            (error) => `${error.property} has wrong value ${error.value},
                ${Object.values(error.constraints).join(', ')} `
          );

          return new ValidationException(messages);
        },
      })
    );

  const port = process.env.PORT || 3000;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
