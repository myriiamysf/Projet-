package main

import (
	"fmt"
	"log"
)

type characters struct {
	HP  int
	STR int
}

func main() {

	tour := 1

	Link := characters{
		HP:  60,
		STR: 15,
	}

	Bokoblin := characters{
		HP:  30,
		STR: 5,
	}

	Ganon := characters{
		HP : 150,
		STR: 20,
	}

	fmt.Print("Bienvenue dans The Hyrule of Castle. \n")
	fmt.Print("_____________________________________ \n")
	fmt.Print("\n")
	fmt.Print("#Règles.\n")
	fmt.Print("_________\n")
	fmt.Print("\n")
	fmt.Print("Dans ce jeu, vous devrez atteindre le sommet du château et vaincre Ganon afin de gagner.\n")
	fmt.Print("Avant d'atteindre le sommet, vous devrez passer par chacun des 9 premiers étages du château avant d'atteindre Ganon au 10eme étage.\n")
	fmt.Print("A chaque étage, un Bokoblin tient la garde. Tous possèdent 30 HP et ont une force de 15.\n")
	fmt.Print("Vous, vous débuterez votre ascension avec 60 HP, et aurez une force de 15 également.\n")
	fmt.Print("Lorsque vous combatterez un Bokoblin, à chaque tour vous aurez le choix en entre 'heal' qui vous redonnera la moitié de votre vie,\n ou 'attack' pour attaquer le Bokoblin.\n")
	fmt.Print("___________________________________________________________________________________________________________________________________________________________________________\n")
	fmt.Print("Vous désormais toutes la clés en main pour réussir, faites les bons choix. C'est à vous, tapez 'start'\n")
	fmt.Print("\n")

	var first string
	for first != "start" {
		fmt.Print("Entrez 'start' pour commencer.\n")
		fmt.Print("\n")
		fmt.Scanln(&first)
		fmt.Println("~~~~~~~~")
	}
	var booli bool = false
	var boulli bool = false 

	for tour < 11 {
		if tour < 10 {
			var first string
			if booli == false {
				fmt.Print("Bienvenue au premier étage. Le premier Bokoblin est face à vous. Tapez 'attack' pour l'attaquer. \n L'option 'heal' ne vous servira pas, puisque vous avez déjà toute votre vie.\n ")
				booli = true
			} else {
				for first != "attack" && first != "heal" {
					fmt.Print("Entrez 'attack' pour attaquer, ou 'heal' pour vous guérir \n")
					fmt.Print("_____________________________________________________________________________________________________\n")
					fmt.Println("")
					fmt.Scanln(&first)
					fmt.Println("~~~~~~~~")
				}
				if first == "attack" {
					Bokoblin.HP = Bokoblin.HP - Link.STR
					fmt.Print("\n")
					fmt.Print("Il reste ", Bokoblin.HP, " HP au Bokoblin.\n")
					fmt.Print("\n")
				} else {
					Link.HP = Link.HP + 30
					if Link.HP >= 60 {
						Link.HP = 60
					}
					fmt.Println("")
					fmt.Print("Vos HP:", Link.HP, "\n")
				}

				if Bokoblin.HP <= 0 {
					fmt.Print("Le Bokoblin de l'étage ", tour, " a été vaincu.\n")
					fmt.Print("\n")
					if tour < 9 {
						fmt.Print("Eatge suivant: ", tour+1, ". Vous vous retrouvez face à un nouveau Gobelin. Que voulez vous faire ?\n")
					}
					tour++
					Bokoblin.HP = 30

					continue
				}
				
				if Bokoblin.HP > 0 {
					fmt.Print("le bokoblin attaque et vous inflige 5 de dégats.\n")
					Link.HP = Link.HP - Bokoblin.STR
					fmt.Print("Il vous reste ", Link.HP, "HP.\n")
					fmt.Print("\n")
				}
		}
			if Link.HP <= 0 {
				log.Fatalln("Vous n'avez plus de vie. Le Bokoblin a remporté le combat.\nRecommencez en veillant à prendre de meilleures décisions.")
			}
		}

		if tour == 10 {
			if boulli == false {
				fmt.Println("Félicitations !! Vous êtes arrivé(e) jusqu'au boss, le redoutable Ganon. \n Que souhaitez faire ? Veillez à prendre les bonnes décisions.")
				fmt.Println("")
				boulli = true
			}
			fmt.Println("Entrez 'attack' pour attaquer ou 'heal' pour vous guérir.")
			fmt.Println("")
			fmt.Println("_____________________________________________________________________________________________________")
			fmt.Println("")
			fmt.Scanln(&first)
			fmt.Println("~~~~~~~~")
				if first != "attack" && first != "heal" {
					fmt.Println("Entrez 'attack' pour attaquer ou 'heal' pour vous guérir.") 
					fmt.Println("")
					fmt.Println("_____________________________________________________________________________________________________")
					fmt.Println("")
					fmt.Scanln(&first)
					fmt.Println("~~~~~~~~")
				}
				
				if first == "attack" {
					Ganon.HP = Ganon.HP - Link.STR 
					fmt.Println("Il reste à Ganon ",Ganon.HP, " HP.")
					fmt.Println()
				} else {
					Link.HP = Link.HP + 30
					if Link.HP >= 60 {
						Link.HP = 60
					}
				}
				if Ganon.HP > 0  {
					fmt.Println("Ganon attaque et vous inflige ", Ganon.STR  ," de dégats.")
					fmt.Println()
					Link.HP = Link.HP - Ganon.STR
					fmt.Println("Il vous reste ", Link.HP, "HP.")
					fmt.Println()
				}
				
				if Ganon.HP <= 0 {
					fmt.Println("Bravo ! Vous avez conquérit le château d'Hyrule !!")
				}
				if Link.HP <= 0 {
					log.Fatalln("Vous n'avez plus de vie. Ganon a remporté le combat. \nRecommencez en veillant à prendre de meilleures décisions.")
				}
			
			// fmt.Scanln(&first)
			// for first != "attack" && first != "heal" {
			// 	fmt.Print("Entrez 'attack' pour attaquer, ou 'heal' pour vous guérir \n")
			// 	fmt.Print("_____________________________________________________________________________________________________\n")
			// 	fmt.Println("")
			// 	fmt.Scanln(&first)
			// 	if first == "attack" {
			// 		Ganon.HP = Ganon.HP - Link.STR
			// 		fmt.Print("\n")
			// 		fmt.Print("Il reste ", Ganon.HP, " HP à Ganon.\n")
			// 		fmt.Print("\n")
					
			// 	} else {
			// 			Link.HP = Link.HP + 30
			// 			if Link.HP >= 60 {
			// 				Link.HP = 60
			// 			}
			// 			fmt.Print("Vos HP:", Link.HP, "\n")
			// 		if Ganon.HP <=0 {
			// 			fmt.Println("Bravo vous avez gagné")
			// 		}
			// 	}
			// }
		}
	}
}
