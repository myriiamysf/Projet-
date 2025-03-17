import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { InterventionService } from './intervention.service';
import { CreateInterventionDto } from './dto/create-intervention.dto';
import { UpdateInterventionDto } from './dto/update-intervention.dto';

@Controller('intervention')
export class InterventionController {
  constructor(private readonly interventionService: InterventionService) {}

  // Route Post to create a intervention. Use function in the intervention.service.ts file.
  @Post()
  create(@Body() createInterventionDto: CreateInterventionDto) {
    return this.interventionService.create(createInterventionDto);
  }

  // Route Get to find all interventions. Use function in the intervention.service.ts file.
  @Get()
  findAll() {
    return this.interventionService.findAll();
  }

  // Route Get to find a intervention with his id. Use function in the intervention.service.ts file.
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interventionService.findOneById(+id);
  }

  // Route Put to update a intervention. Use function in the intervention.service.ts file.
  @Put(':id')
  update(@Param('id') id: string, @Body() updateInterventionDto: UpdateInterventionDto) {
    return this.interventionService.update(+id, updateInterventionDto);
  }
  
  // Route Delete to delete a intervention. Use function in the intervention.service.ts file.
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.interventionService.remove(+id);
  }
}
