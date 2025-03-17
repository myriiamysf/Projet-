import { Test, TestingModule } from '@nestjs/testing';
import { IntervenantController } from './intervenant.controller';
import { IntervenantService } from './intervenant.service';

describe('IntervenantController', () => {
  let controller: IntervenantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntervenantController],
      providers: [IntervenantService],
    }).compile();

    controller = module.get<IntervenantController>(IntervenantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
