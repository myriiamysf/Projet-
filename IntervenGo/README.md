
# <ins>  Projet Intervengo - Génération de Rapports PDF </ins>

## Introduction

Ce projet a pour objectif de générer un rapport PDF à la fin d’une intervention réalisée pour Notre Entreprise.
Planifier les interventions.
Enregistrer une intervention en cours.
Gérer l’historique des interventions.
Générer un rapport PDF à la fin d’une intervention réalisée pour Notre Entreprise.
Initialement, la consigne était de générer un récapitulatif soit en PDF, soit par email.En raison de difficultés techniques sur l’envoi d’email, nous avons opté pour la génération de rapports PDF.

## Technologies Utilisées

- **Backend** : NestJS pour la gestion de la logique métier et des API CRUD.
- **Frontend** : React.js pour la création de l’interface utilisateur.
- **Base de données** : PostgreSQL pour le stockage des données.
- **Tests** : Postman pour tester les requêtes CRUD.
- **Généraion** de PDF : PDFKit et pdfkit-table pour créer des rapports PDF.

## Répartition des Tâches

- **Frontend** : Theo se charge de l’interface utilisateur en React.js.
- **Backend** : Meriam s’occupe des API, de la logique métier et de l’intégration avec PostgreSQL via NestJS.
- **Génération** des Rapports PDF : Matteo intègre PDFKit pour créer et personnaliser les rapports PDF.

## Installation et Commandes Utilisées

Pour installer les packages nécessaires au projet, exécutez les commandes suivantes :

```bash
npm i --save @nestjs/config
npm install --save @nestjs/typeorm typeorm pg
npm i --save class-validator class-transformer
npm install pdfkit
```
## Schéma de la Base de Données

# Les tables créées dans la base de données sont les suivantes :

```bash
CREATE TABLE Intervention (
    id SERIAL PRIMARY KEY,
    location VARCHAR(100),
    task_to_do VARCHAR(150),
    task_status VARCHAR(150),
    birthday VARCHAR(50),
    picture VARCHAR(100),
    signature VARCHAR(100)
);

CREATE TABLE Intervenants (
    id SERIAL PRIMARY KEY,
    location VARCHAR(100),
    email VARCHAR(50) UNIQUE NOT NULL,
    date_inscription TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(100)
);

CREATE TABLE Intervention_Intervenants (
    intervenant_id INT REFERENCES Intervenants(id),
    intervention_id INT REFERENCES Intervention(id),
    PRIMARY KEY (intervenant_id, intervention_id)
);

```

## Déploiement pour un utilisateur externe

*Assurez-vous d'avoir Node.js, PostgreSQL et NestJS installés.*
Clonez le dépôt :

```bash
git clone <URL_DU_REPO>
cd <NOM_DU_PROJET>
```

*Installez les dépendances :*
```bash
npm install
```

*Configurez la base de données dans le fichier .env :*
```bash
DATABASE_HOST=localhost
DATABASE_USER=postgres
DATABASE_PASSWORD=motdepasse
DATABASE_NAME=nom_de_la_base
```

*Lancer l'application :*
```bash
npm run start
```

*Pour un environnement de production, utilisez :*
```bash
npm run start:prod
```

## Statut du projet
🚧 En cours de développement 🚧

## Contribution
Les contributions externes sont autorisées. Merci d’ouvrir une issue avant toute modification.

## Licence
Ce projet est sous licence MIT. Consultez le fichier LICENSE pour plus d’informations.

## Équipe

semavo_t
barafa_m
youssef_m

