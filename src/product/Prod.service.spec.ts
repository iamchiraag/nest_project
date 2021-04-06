import { Test, TestingModule } from '@nestjs/testing';
import { Prod_Service } from './Prod.service';

describe('KrishnaService', () => {
  let service: Prod_Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Prod_Service],
    }).compile();

    service = module.get<Prod_Service>(Prod_Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
