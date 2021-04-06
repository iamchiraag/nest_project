import { Test, TestingModule } from '@nestjs/testing';
import { Prod_Controller } from './Prod.controller';

describe('KrishnaController', () => {
  let controller: Prod_Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Prod_Controller],
    }).compile();

    controller = module.get<Prod_Controller>(Prod_Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
