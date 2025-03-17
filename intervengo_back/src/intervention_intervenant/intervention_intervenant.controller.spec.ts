import { Test, TestingModule } from '@nestjs/testing';
import { InterventionIntervenantController } from './intervention_intervenant.controller';
import { InterventionIntervenantService } from './intervention_intervenant.service';

describe('InterventionIntervenantController', () => {
  let controller: InterventionIntervenantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterventionIntervenantController],
      providers: [InterventionIntervenantService],
    }).compile();

    controller = module.get<InterventionIntervenantController>(InterventionIntervenantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
