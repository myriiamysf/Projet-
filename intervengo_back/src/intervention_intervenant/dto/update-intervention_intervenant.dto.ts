import { PartialType } from '@nestjs/mapped-types';
import { CreateInterventionIntervenantDto } from './create-intervention_intervenant.dto';
import { Intervention } from 'src/intervention/entities/intervention.entity';
import { Intervenant } from 'src/intervenant/entities/intervenant.entity';

export class UpdateInterventionIntervenantDto extends PartialType(CreateInterventionIntervenantDto) {
    intervention?: Intervention;
    intervenant?: Intervenant;
  status: boolean;
}
