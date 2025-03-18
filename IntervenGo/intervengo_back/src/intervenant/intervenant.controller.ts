import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { IntervenantService } from './intervenant.service';
import { CreateIntervenantDto } from './dto/create-intervenant.dto';
import { UpdateIntervenantDto } from './dto/update-intervenant.dto';

@Controller('intervenant')
export class IntervenantController {
  constructor(private readonly intervenantService: IntervenantService) {}

  @Post()
  create(@Body() createIntervenantDto: CreateIntervenantDto) {
    return this.intervenantService.create(createIntervenantDto);
  }

  @Get()
  findAll() {
    return this.intervenantService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.intervenantService.findOneById(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateIntervenantDto: UpdateIntervenantDto) {
    return this.intervenantService.update(+id, updateIntervenantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.intervenantService.remove(+id);
  }
}
