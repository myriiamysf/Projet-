import { Injectable } from '@nestjs/common';

const PDFDocument = require('pdfkit-table');
const fs = require('fs');
const path = require('path');

@Injectable()
export class PdfService {
  constructor(
  ) {}
  
  async generatePDF(
    location: string, 
    task: string, 
    status: string, 
    action: string, 
    picture:string, 
    signature:string
  ): Promise<Buffer> {
    const pdfBuffer: Buffer = await new Promise(resolve => {
      const doc = new PDFDocument({
        size: "LETTER",
        bufferPages: true, 
      });
      doc.pipe(fs.createWriteStream('src/pdf/intervention.pdf'));
// Titre avec ligne
doc.fontSize(20)
.font('Helvetica-Bold')
.fillColor('red') 
.text("Résumé de l'Intervention", { align: 'center' });

doc.save()
 doc.moveDown(0.5);

 doc.moveTo(doc.page.margins.left, doc.y)
    .lineTo(doc.page.width - doc.page.margins.right, doc.y)
    .stroke();

 doc.moveDown(1);

// information

 const table = {
  headers: ['Champ de notre Entreprise', 'Champs du clien fidèle'],
  rows: [
    ['Localisation', location],
    ['Tâche', task],
    ['Status', status],
    ['Action réalisée', action],
  ],
};

// tableau

doc.table(table, {
  headerBackgroundColor: '#f2f2f2', 
  prepareHeader: () => {
    doc.font('Helvetica-Bold')
       .fontSize(12)
       .fillColor('#000000');
  },
  prepareRow: () => {
    doc.font('Helvetica')
       .fontSize(12)
       .fillColor('#000000');
  },
  x: doc.page.margins.left,
  y: doc.y,
  width: doc.page.width - doc.page.margins.left - doc.page.margins.right,
});

// photo
doc.x = doc.page.margins.left;
doc.font('Helvetica-Bold').fontSize(12).text('Photo:');
doc.moveDown(0.5);
if (picture && picture !== 'null') {
  try {
    let base64Data = picture;
    if (base64Data.startsWith('data:image')) {
      base64Data = base64Data.substring(base64Data.indexOf('base64,') + 7);
    }
    const pictureBuffer = Buffer.from(base64Data, 'base64');
    doc.image(pictureBuffer, { width: 300, align: 'center' });
  } catch (err) {}
    } else {
  doc.font('Helvetica').fontSize(12).text("Image non disponible.");
}

doc.moveDown(15);

doc.x = doc.page.margins.left;
doc.font('Helvetica-Bold').fontSize(12).text('Signature:');
doc.moveDown(0.5);
if (picture && picture !== 'null') {
  try {
    let base64Data = signature;
    if (base64Data.startsWith('data:image')) {
      base64Data = base64Data.substring(base64Data.indexOf('base64,') + 7);
    }
    const pictureBuffer = Buffer.from(base64Data, 'base64');
    doc.image(pictureBuffer, { width: 300 });
  } catch (err) {}
    } else {
  doc.font('Helvetica').fontSize(12).text("Image non disponible.");
}

doc.moveTo(doc.page.margins.left, doc.y)
   .lineTo(doc.page.width - doc.page.margins.right, doc.y)
   .stroke();
doc.moveDown(3);


// doc.x = doc.page.margins.left;
// doc.font('Helvetica-Bold').fontSize(12).text(`Signature : ${signature}`);

      const bufferChunks = [];
      doc.on('data', chunk => bufferChunks.push(chunk));
      doc.on('end', () => {
        const data = Buffer.concat(bufferChunks);
        resolve(data);
      });      
      doc.end();
    });
    return pdfBuffer;
  }
}
