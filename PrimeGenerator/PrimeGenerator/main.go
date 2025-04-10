package main

import (
	"fmt"
	"log"
	"os"

	"projet.essaie2/parsecsv"
	"projet.essaie2/pdf"
	"projet.essaie2/pirates"
)

func main() {

	arguments := os.Args[1:]
	a := arguments[0]

	if a != "-cli" && a != "-file" {
		log.Fatal("Entrez '-cli' ou '-file'")

	} else {

		if a == "-cli" {
			if len(arguments) == 7 {
				i := arguments[6]
				p := arguments[4]
				n := arguments[2]

				if arguments[1] != "-name" {

					log.Fatal("Entrez '-name' avant d'entrer le nom de votre personnage.")
				}

				if arguments[3] != "-prime" {
					log.Fatal("Entrez '-prime' avant d'entrer le montant de la prime.")
				}

				if arguments[5] == "-img" {

					pirate, err := pirates.Createpirate(n, p, i)
					if err != nil {
						log.Fatal(err)
					}
					pdf.Newpdf(*pirate)

				} else {
					log.Fatal("Entrez '-img' avant d'entrer le chemin vers l'image.")

				}
			} else {
				log.Fatal("pas assez d'arguments")
			}

		}

		if a == "-file" {
			nakama := parsecsv.ParseCSV(arguments[1])
			for _, c := range nakama {
				opirate, err := pirates.Createpirate(c.Name, c.Prime, c.Img)
				if err != nil {
					log.Fatal(err)
				}
				fmt.Print(opirate)
				pdf.Newpdf(*opirate)
			}
		}
	}
}
