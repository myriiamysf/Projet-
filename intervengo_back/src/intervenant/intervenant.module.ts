import { Module } from '@nestjs/common';
import { IntervenantService } from './intervenant.service';
import { IntervenantController } from './intervenant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Intervenant } from './entities/intervenant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Intervenant])],
  controllers: [IntervenantController],
  providers: [IntervenantService],
  exports: [IntervenantService]
})
export class IntervenantModule {}
