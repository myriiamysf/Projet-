package pirates

import (
	"errors"
	"strings"
)

type Pirate struct {
	Name  string
	Prime string
	Img   string
}

func Createpirate(nom string, prime string, img string) (*Pirate, error) {
	var err error
	pirate1 := Pirate{Name: nom, Prime: prime, Img: img}
	for _, l := range pirate1.Prime {
		if string(l) < "0" || string(l) > "9" {
			err = errors.New("la prime doit être écrite en chiffres")
		}
	}
	for _, l := range pirate1.Name {
		if strings.ToUpper(string(l)) != string(l) {
			err=errors.New("le nom du personnage doit être écrit uniquement majuscule")
		}
	}
    if pirate1.Img == "" || pirate1.Name == "" || pirate1.Prime == "" {
        err=errors.New("entrez quelque chose")
    }

	return &pirate1, err
}
