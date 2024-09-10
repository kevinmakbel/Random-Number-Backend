import { MiddlewareConsumer, Module } from '@nestjs/common';
import { RandomNumberController } from './randomNumber.controller';
import { RandomNumberService } from './randomNumber.service';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [],
  controllers: [RandomNumberController],
  providers: [RandomNumberService],
})
export class RandomNumberModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/randomNumber');
  }
}
