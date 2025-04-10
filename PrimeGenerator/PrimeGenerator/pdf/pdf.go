package pdf

import (
	"fmt"

	"github.com/jung-kurt/gofpdf"
	"projet.essaie2/pirates"
)

func Newpdf(pirate pirates.Pirate) {


	pdf := gofpdf.New("P", "mm", "A4", "")
	pdf.AddPage()
	pdf.Image("images/wantedVierge.jpg", 0, 0, 210, 0, false, "", 0, "")
	pdf.SetFont("Arial", "B", 40)
	pdf.SetY(235)
	pdf.WriteAligned(0, 0, pirate.Name, "C")
	pdf.SetFont("Arial", "B", 32)
	pdf.SetY(263)
	pdf.WriteAligned(0, 0, pirate.Prime, "C")
	pdf.Image(pirate.Img, 20, 65, 170, 127, false, "", 0, "")
	outname:=pirate.Name+".pdf"
	err := pdf.OutputFileAndClose("generator/"+outname)
	fmt.Print("ici")

	if err != nil {
		return 
	}
}
