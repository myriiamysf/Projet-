import { Module } from '@nestjs/common';
import { InterventionService } from './intervention.service';
import { InterventionController } from './intervention.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Intervention } from './entities/intervention.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Intervention])],
  controllers: [InterventionController],
  providers: [InterventionService],
  exports: [InterventionService]
})
export class InterventionModule {}
