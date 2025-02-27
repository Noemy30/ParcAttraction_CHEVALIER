# README - Documentation de l'Application

## 📌 Présentation
L'application de parc d'attraction permet aux visiteurs de voir en temps réel les manèges ouverts ou fermés.

## 🎯 Objectifs
- Permettre aux visiteurs de savoir quelles attractions sont disponibles.
- Offrir aux administrateurs la possibilité de gérer la visibilité des attractions.
- Permettre aux visiteurs de laisser des avis et des notes sous forme d'étoiles sur les attractions.

## 🚀 Fonctionnalités

### 🌟 Fonctionnalités Principales
- **Connexion** : Seuls les administrateurs peuvent se connecter et modifier la visibilité des attractions.
- **Gestion des attractions** : Les administrateurs peuvent ajouter de nouvelles attractions.
- **Consultation des attractions** : Les visiteurs peuvent voir les attractions disponibles.
- **Avis et notes** : Les visiteurs peuvent ajouter des avis et attribuer des notes aux attractions.

## 🏗️ Architecture Technique

### 🔧 Technologies Utilisées
- **Frontend** : Angular
  - HTML, CSS, TypeScript
- **Backend** : Python
- **Base de Données** : MariaDB
- **API** : Python 

## 🚀 Déploiement
- Cloner le projet depuis GitHub :  
  ```bash
  git clone https://github.com/Noemy30/ParcAttraction_CHEVALIER.git
  ```
- Lancer la stack Docker avec la commande suivante et laisser le programme se charger :  
  ```bash
  docker-compose up --build
  ```
- Ouvrir un terminal et se déplacer dans le répertoire Python :  
  ```bash
  cd python
  ```
- Exécuter la commande pour initialiser la base de données :  
  ```bash
  python3 init.py
  ```

## 🗂️ Schéma de la base de données

![image_base_de_données](https://github.com/user-attachments/assets/00d96f0e-684c-4b18-b00d-2557a45cad71)



## 💡 Améliorations possibles

- Intégration d'une carte interactive affichant l'emplacement des attractions dans le parc. (5 jours)
- Mise en place d'un système de vente de billets pour l'accès au parc. (4 jours)
- Possibilité pour les utilisateurs de créer un compte afin d'acheter des billets en ligne. (3 jours)
- Ajout d'images illustrant chaque attraction pour une meilleure visualisation. (1 jour)
- Affichage des restrictions d'âge et des exigences de taille minimale et maximale pour chaque attraction. (1 jour)
- Indication des horaires d'ouverture et de fermeture du parc. (1 jour)



