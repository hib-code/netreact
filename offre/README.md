Voici le README.md mis à jour avec **MongoDB** et **Express.js** ajoutés dans la liste des technologies utilisées :  

---

# 🎬 **NetReact**  
**Votre plateforme pour acheter des abonnements aux services de streaming les plus populaires.**  

<div align="center">  
  <img src="https://img.shields.io/badge/Version-1.0.0-brightgreen" alt="Version">  
  <img src="https://img.shields.io/badge/License-MIT-blue" alt="License">  
  <img src="https://img.shields.io/badge/React-18.2.0-blue" alt="React">  
  <img src="https://img.shields.io/badge/Node.js-18.x-green" alt="Node.js">  
  <img src="https://img.shields.io/badge/Express.js-%5E4.x-black" alt="Express.js">  
  <img src="https://img.shields.io/badge/MongoDB-Database-brightgreen" alt="MongoDB">  
  <img src="https://img.shields.io/badge/Firebase-🔥-orange" alt="Firebase">  
</div>  

---

## 📖 **Table des Matières**  
- [À propos du projet](#à-propos-du-projet)  
- [Fonctionnalités](#fonctionnalités)  
- [Aperçu](#aperçu)  
- [Technologies utilisées](#technologies-utilisées)  
- [Installation](#installation)  
- [Contribution](#contribution)  
- [Licence](#licence)  
- [Contact](#contact)  

---

## 🧐 **À propos du projet**  
**NetReact** est une plateforme innovante qui vous permet d'acheter des abonnements à des services numériques tels que :  
- **Netflix** 🎥  
- **Spotify** 🎵  
- **Apple TV** 📺  
- **IPTV** 🌐  

Avec une interface utilisateur moderne et des fonctionnalités de gestion avancées, **NetReact** simplifie votre expérience d'achat d'abonnements.  

---

## 🚀 **Fonctionnalités**  
✅ Gestion des comptes utilisateurs avec Firebase Authentication.  
✅ Paiements sécurisés via **Stripe** ou **PayPal**.  
✅ Tableau de bord personnalisé pour gérer les abonnements.  
✅ Notifications et rappels automatisés par e-mail.  
✅ Stockage sécurisé des données via **Firebase Firestore**, **MongoDB**, et **Firebase Storage**.  

---

## 🎨 **Aperçu**  
<img src="https://via.placeholder.com/800x400?text=Capture+d'%C3%A9cran+de+NetReact" alt="Aperçu du projet" style="border-radius: 10px;"/>  

> **Note** : Capture d’écran du projet en cours de développement.  

---

## 🛠 **Technologies utilisées**  

| **Technologie**   | **Description**                         |  
|--------------------|-----------------------------------------|  
| React.js           | Librairie pour construire l'interface utilisateur. |  
| Node.js            | Serveur backend pour traiter les requêtes. |  
| Express.js         | Framework backend léger pour les API RESTful. |  
| MongoDB            | Base de données NoSQL pour stocker les informations sur les utilisateurs et les abonnements. |  
| Firebase           | Plateforme utilisée pour l'authentification et le stockage des fichiers. |  
| Stripe / PayPal    | Intégration pour des paiements sécurisés. |  
| TailwindCSS        | Framework CSS pour le design rapide et responsive. |  

---

## 💻 **Installation**  

### ⚙️ **Prérequis**  
- [Node.js](https://nodejs.org) installé.  
- Compte **Firebase** configuré.  
- Clé API **Stripe** ou **PayPal** activée.  
- Instance **MongoDB** configurée (via Atlas ou en local).  

### 📥 **Étapes d'installation**  
1. Clonez le dépôt GitHub :  
   ```bash  
   git clone https://github.com/hib-code/netreact.git  
   ```  

2. Allez dans le dossier du projet :  
   ```bash  
   cd netreact  
   ```  

3. Installez les dépendances :  
   ```bash  
   npm install  
   ```  

4. Configurez vos variables d'environnement dans un fichier `.env` :  
   ```env  
   REACT_APP_FIREBASE_API_KEY=ta-clé-api  
   REACT_APP_FIREBASE_AUTH_DOMAIN=ton-domaine-auth  
   REACT_APP_FIREBASE_PROJECT_ID=ton-id-projet  
   REACT_APP_FIREBASE_STORAGE_BUCKET=ton-bucket  
   MONGODB_URI=ton-uri-mongodb  
   STRIPE_SECRET_KEY=ta-clé-stripe  
   ```  

5. Lancez le projet en local :  
   ```bash  
   npm start  
   ```  

---

