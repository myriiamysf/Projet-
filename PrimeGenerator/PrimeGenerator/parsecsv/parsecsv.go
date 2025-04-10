package parsecsv

import (
	"encoding/csv"
	"os"
	"projet.essaie2/pirates"
)

type Pirate struct {
    Name string
    Prime string
    Img string
}

func ParseCSV(filepath string) (pirate []pirates.Pirate)  {

	ceesve, err := os.Open(filepath)
	if err != nil {
		return 
	}

	finalceesve := csv.NewReader(ceesve)
	autresvariable, er := finalceesve.ReadAll()
	if er != nil {
		return 
	}
	var pitab []pirates.Pirate
	for _, row := range autresvariable {
		pir := pirates.Pirate{Name: row[0], Prime: row[1], Img: row[2]}
		pitab = append(pitab, pir)		
	}
	return pitab
}
