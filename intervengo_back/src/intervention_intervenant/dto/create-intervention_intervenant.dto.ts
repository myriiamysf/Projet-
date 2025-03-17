import { Intervenant } from "src/intervenant/entities/intervenant.entity";
import { Intervention } from "src/intervention/entities/intervention.entity";

export class CreateInterventionIntervenantDto {
    intervention: Intervention;
    intervenant: Intervenant
}
