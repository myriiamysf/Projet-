import { Injectable } from '@nestjs/common';
import { CreateInterventionDto } from './dto/create-intervention.dto';
import { UpdateInterventionDto } from './dto/update-intervention.dto';
import { Repository } from 'typeorm';
import { Intervention } from './entities/intervention.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InterventionService {
  constructor(
    @InjectRepository(Intervention)
    private interventionRepo: Repository<Intervention>,
) {}

  // Function to create a intervention. Save it in the Database.
  async create(createInterventionDto: CreateInterventionDto) {
    return await this.interventionRepo.save(createInterventionDto);
  }

  // Function to find every interventions in the database.
  async findAll() {
    return await this.interventionRepo.find();
  }

  // Function to find 1 intervention with his id in the database.
  async findOneById(id: number) {
    return await this.interventionRepo.findOne({ where: { id } });
  }

  // Function to modify the information of a intervention with his id.
  async update(id: number, updateInterventionDto: UpdateInterventionDto) {
    const to_update = await this.findOneById(id);
    const updated = Object.assign(to_update, updateInterventionDto);
    return await this.interventionRepo.save(updated);
  }

  // Function to delete a intervention of the database.
  async remove(id: number) {
    const interventionToDelete = await this.findOneById(id);
    if (interventionToDelete) {
      return await this.interventionRepo.remove(interventionToDelete);
    } 
  }
}
