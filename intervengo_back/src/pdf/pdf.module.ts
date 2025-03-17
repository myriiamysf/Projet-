import { Module } from '@nestjs/common';
import { PdfService } from './pdf.service';
import { PdfController } from './pdf.controller.js';
import { InterventionService } from 'src/intervention/intervention.service';
import { InterventionModule } from 'src/intervention/intervention.module';

@Module({
    providers: [PdfService],
    exports: [PdfService],
    controllers: [PdfController],
    imports: [InterventionModule]
 })
export class PdfModule {}