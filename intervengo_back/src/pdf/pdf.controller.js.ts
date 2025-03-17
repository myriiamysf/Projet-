import { Controller, Get, Post, Body, Param, Delete, Put, Res } from '@nestjs/common';
import { InterventionService } from 'src/intervention/intervention.service';
import { PdfService } from './pdf.service';

@Controller('pdf')
export class PdfController {
  constructor(
    private readonly interventionService: InterventionService,
    private readonly pdfService: PdfService
  ) {}

  @Get(':id')
  async downloadPDF(@Res() res, @Param('id') id:string): Promise<void> {
    const intervention = await this.interventionService.findOneById(+id);

    const buffer = await this.pdfService.generatePDF(
      intervention.location, 
      intervention.task, 
      intervention.status, 
      intervention.action_performed,
      intervention.picture, 
      intervention.signature
    );

    // res.set({
    //   'Content-Type': 'intervention/pdf',
    //   'Content-Disposition': 'attachment; filename=intervention.pdf',
    //   'Content-Length': buffer.length,
    // })
    
      // Définit le Content-Disposition pour forcer le téléchargement
      res.attachment('example.pdf');
      // Définit la taille du contenu
      res.set('Content-Length', buffer.length);
      res.end(buffer);
    }
  
  }

