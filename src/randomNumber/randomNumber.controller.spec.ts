import { Test, TestingModule } from '@nestjs/testing';
import { RandomNumberController } from './randomNumber.controller';
import { RandomNumberService } from './randomNumber.service';

let randomNumberController: RandomNumberController;
let randomNumberService: RandomNumberService;
describe('RandomNumberController', () => {
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RandomNumberController],
      providers: [RandomNumberService],
    }).compile();

    randomNumberController = module.get<RandomNumberController>(
      RandomNumberController,
    );
    randomNumberService = module.get<RandomNumberService>(RandomNumberService);
  });

  // Test para verificar que la API devuelve un número aleatorio entre 1 y 100
  it('debería devolver un número aleatorio entre 1 y 100', () => {
    const result = randomNumberController.getRandomNumber();
    expect(result.value).toBeGreaterThanOrEqual(1);
    expect(result.value).toBeLessThanOrEqual(100);
  });

  // Test para verificar que siempre devuelve un número diferente
  it('debería generar diferentes números en cada llamada', () => {
    const firstResult = randomNumberController.getRandomNumber();
    const secondResult = randomNumberController.getRandomNumber();
    expect(firstResult.value).not.toEqual(secondResult.value);
  });
});
