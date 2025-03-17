import { PartialType } from '@nestjs/mapped-types';
import { CreateInterventionDto } from './create-intervention.dto';
import { Status } from 'src/other/enum';

export class UpdateInterventionDto extends PartialType(CreateInterventionDto) {
    
    location: string;
    task: string;
    action_performed: string;
    picture?: string; 
    signature?: string; 
    status?: Status
}
