import { Injectable } from '@nestjs/common';

export interface IrandomNumber {
  value: number;
}

@Injectable()
export class RandomNumberService {
  getRandomNumber(): IrandomNumber {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    return {
      value: randomNumber,
    };
  }
}
