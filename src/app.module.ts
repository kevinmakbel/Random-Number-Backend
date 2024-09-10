import { Module } from '@nestjs/common';

import { RandomNumberModule } from './randomNumber/randomNumber.module';

@Module({
  imports: [RandomNumberModule],
})
export class AppModule {}
