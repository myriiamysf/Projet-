import { IsString, Length,IsUrl  } from 'class-validator';



export class CreateInterventionDto {
    location: string;
  
    task: string;
    
    action_performed: string;
  
    picture?: string; 
  
    signature?: string; 
  }
