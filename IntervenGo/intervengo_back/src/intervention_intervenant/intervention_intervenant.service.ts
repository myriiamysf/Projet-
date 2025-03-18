import { Injectable } from '@nestjs/common';
import { CreateInterventionIntervenantDto } from './dto/create-intervention_intervenant.dto';
import { UpdateInterventionIntervenantDto } from './dto/update-intervention_intervenant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { InterventionIntervenant } from './entities/intervention_intervenant.entity';
import { Repository } from 'typeorm';
import { AppService } from '../app.service'; // Ajustez le chemin si nécessaire

@Injectable()
export class InterventionIntervenantService {
  constructor(
    @InjectRepository(InterventionIntervenant)
    private interventionIntervenantRepo: Repository<InterventionIntervenant>,
  ) {}

  async create(createInterventionIntervenantDto: CreateInterventionIntervenantDto) {
    return await this.interventionIntervenantRepo.save(createInterventionIntervenantDto);
  }

  async findAll() {
    return await this.interventionIntervenantRepo.find();
  }

  async findOneById(id: number) {
    return await this.interventionIntervenantRepo.findOne({where: {id}})
  }

  async update(id: number, updateInterventionIntervenantDto: UpdateInterventionIntervenantDto) {
    const to_update = await this.findOneById(id);
    const updated = Object.assign(to_update, updateInterventionIntervenantDto);
    return await this.interventionIntervenantRepo.save(updated);
  }

  async remove(id: number) {
    const to_remove = await this.findOneById(id);
    if (to_remove) {
      return await this.interventionIntervenantRepo.remove(to_remove);
    }
  }
}
