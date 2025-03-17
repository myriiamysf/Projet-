import { Module } from '@nestjs/common';
import { InterventionIntervenantService } from './intervention_intervenant.service';
import { InterventionIntervenantController } from './intervention_intervenant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterventionIntervenant } from './entities/intervention_intervenant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InterventionIntervenant])],
  providers: [InterventionIntervenantService],
  exports: [InterventionIntervenantService],
  controllers: [InterventionIntervenantController]
})
export class InterventionIntervenantModule {}
