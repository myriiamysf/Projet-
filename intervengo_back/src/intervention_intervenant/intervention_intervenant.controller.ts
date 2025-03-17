import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { InterventionIntervenantService } from './intervention_intervenant.service';
import { CreateInterventionIntervenantDto } from './dto/create-intervention_intervenant.dto';
import { UpdateInterventionIntervenantDto } from './dto/update-intervention_intervenant.dto';

@Controller('intervention-intervenant')
export class InterventionIntervenantController {
  constructor(private readonly interventionIntervenantService: InterventionIntervenantService) {}

  @Post()
  create(@Body() createInterventionIntervenantDto: CreateInterventionIntervenantDto) {
    return this.interventionIntervenantService.create(createInterventionIntervenantDto);
  }

  @Get()
  findAll() {
    return this.interventionIntervenantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interventionIntervenantService.findOneById(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateInterventionIntervenantDto: UpdateInterventionIntervenantDto) {
    return this.interventionIntervenantService.update(+id, updateInterventionIntervenantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.interventionIntervenantService.remove(+id);
  }
}
