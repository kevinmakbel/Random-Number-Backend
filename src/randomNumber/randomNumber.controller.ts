import { Controller, Post } from '@nestjs/common';
import {
  RandomNumberService,
  type IrandomNumber,
} from './randomNumber.service';

@Controller()
export class RandomNumberController {
  constructor(private readonly RandomNumberService: RandomNumberService) {}

  @Post('/random-number')
  getRandomNumber(): IrandomNumber {
    return this.RandomNumberService.getRandomNumber();
  }
}
