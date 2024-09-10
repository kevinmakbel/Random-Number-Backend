import { LoggerMiddleware } from './logger.middleware';
import { Request, Response } from 'express';

describe('LoggerMiddleware', () => {
  let middleware: LoggerMiddleware;
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: jest.Mock;

  beforeEach(() => {
    middleware = new LoggerMiddleware();
    mockRequest = {};
    mockResponse = {};
    nextFunction = jest.fn();
  });

  // Test para verificar que se imprime el timestamp y se llama a next()
  it('debería registrar el timestamp y llamar a next()', () => {
    console.log = jest.fn();

    middleware.use(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction,
    );

    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining('Request timestamp:'),
    );
    expect(nextFunction).toHaveBeenCalled();
  });
});
