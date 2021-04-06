import { Test, TestingModule } from '@nestjs/testing';
import { categoryService } from './Cat.service';

describe('CoursesService', () => {
  let service: categoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [categoryService],
    }).compile();

    service = module.get<categoryService>(categoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
