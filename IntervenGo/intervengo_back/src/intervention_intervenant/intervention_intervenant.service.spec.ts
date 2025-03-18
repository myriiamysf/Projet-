import { Test, TestingModule } from '@nestjs/testing';
import { InterventionIntervenantService } from './intervention_intervenant.service';

describe('InterventionIntervenantService', () => {
  let service: InterventionIntervenantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterventionIntervenantService],
    }).compile();

    service = module.get<InterventionIntervenantService>(InterventionIntervenantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
