import { Injectable } from '@nestjs/common';
import { CreateIntervenantDto } from './dto/create-intervenant.dto';
import { UpdateIntervenantDto } from './dto/update-intervenant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Intervenant } from './entities/intervenant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IntervenantService {
  constructor(
    @InjectRepository(Intervenant)
    private intervenantRepo: Repository<Intervenant>
  ) {}

  async create(createIntervenantDto: CreateIntervenantDto) {
    return await this.intervenantRepo.save(createIntervenantDto)
  }

  async findAll() {
    return await this.intervenantRepo.find();
  }

  async findOneById(id: number) {
    return await this.intervenantRepo.findOne({ where : { id } });
  }

  async update(id: number, updateIntervenantDto: UpdateIntervenantDto) {
    const intervenantToUpdate = this.findOneById(id);
    const updatedIntervenant = Object.assign(intervenantToUpdate, updateIntervenantDto)
    return await this.intervenantRepo.save(updatedIntervenant)
  }

  async remove(id: number) {
    const intervenantToDelete = await this.findOneById(id)
    if (intervenantToDelete) {
      return await this.intervenantRepo.remove(intervenantToDelete)
    }
  }
}
