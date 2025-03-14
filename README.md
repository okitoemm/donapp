# DonApp - Application de Dons pour Associations de Santé 🏥

## 📱 Présentation du Projet

DonApp est une application mobile développée avec React Native/Expo permettant aux citoyens de faire facilement des dons aux associations de santé. L'application met l'accent sur l'accessibilité et respecte les normes WCAG et RGAA.

## 🛠 Technologies Utilisées

### Frontend
- **Framework**: React Native avec Expo
- **Navigation**: Expo Router
- **UI/UX**: Custom Components + MaterialIcons
- **Gestion d'État**: À implémenter (Redux prévu)
- **Style**: StyleSheet natif

### Backend (À implémenter)
- **Serveur**: Node.js avec Express (prévu)
- **Base de données**: PostgreSQL (prévu)
- **Authentification**: Firebase Auth (prévu)

## 📥 Installation

```bash
# Cloner le repository
git clone https://github.com/VOTRE_USERNAME/donapp.git

# Accéder au dossier
cd donapp

# Installer les dépendances
npm install

# Créer le fichier .env à partir du modèle
cp .env.example .env

# Démarrer l'application
npx expo start
```

## 📋 Fonctionnalités Implémentées

### Pages et Navigation
- [x] Système de navigation par onglets
- [x] Écran d'accueil avec liste des associations
- [x] Écran de détail d'une association
- [x] Écran de don avec options de montants
- [x] Historique des dons
- [x] Profil utilisateur

### Composants
- [x] CarteAssociation (composant réutilisable)
- [x] Navigation responsive
- [x] Filtres de recherche
- [x] Système de catégories
- [x] Interface de don intuitive

### Design
- [x] UI responsive
- [x] Thème cohérent
- [x] Animations de base
- [x] Gestion des états visuels

## 📝 À Implémenter

### Authentification
- [ ] Intégration Firebase Auth
- [ ] Gestion des sessions
- [ ] Récupération de mot de passe
- [ ] Validation des emails

### Backend
- [ ] Configuration du serveur Express
- [ ] Mise en place de la base de données
- [ ] API RESTful
- [ ] Documentation Swagger

### Paiements
- [ ] Intégration Stripe
- [ ] Gestion des dons récurrents
- [ ] Reçus fiscaux
- [ ] Historique des transactions

### Sécurité
- [ ] Chiffrement des données
- [ ] Protection CSRF
- [ ] Validation des entrées
- [ ] Gestion des tokens

### Tests
- [ ] Tests unitaires (Jest)
- [ ] Tests d'intégration
- [ ] Tests E2E
- [ ] Tests d'accessibilité

## 🎯 Structure du Projet

```
donapp/
├── app/
│   ├── (auth)/
│   │   ├── login.tsx
│   │   └── register.tsx
│   ├── (tabs)/
│   │   ├── home.tsx
│   │   ├── donate.tsx
│   │   ├── mes-dons.tsx
│   │   └── profil.tsx
│   └── association/
│       └── [id].tsx
├── components/
│   ├── associations/
│   │   └── AssociationCard.tsx
│   └── ui/
├── src/
│   └── types/
└── assets/
```

## 🔐 Variables d'Environnement

Créer un fichier `.env` à la racine du projet :

```env
API_URL=votre_url_api
STRIPE_PUBLIC_KEY=votre_clé_stripe
FIREBASE_CONFIG=votre_config_firebase
```

## 🤝 Contribuer au Projet

1. Forkez le projet
2. Créez votre branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'feat: Ajout d'une nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

## Convention de Commits

Nous utilisons la convention suivante pour les messages de commit :
- `feat:` Nouvelle fonctionnalité
- `fix:` Correction de bug
- `docs:` Modification de la documentation
- `style:` Modification du style du code
- `refactor:` Refactorisation du code
- `test:` Ajout ou modification de tests

## 📚 Documentation Complémentaire

- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [StyleSheet Reference](https://reactnative.dev/docs/stylesheet)

## 🎨 Normes de Code

- Nommage des fichiers et composants en français
- Commentaires descriptifs pour chaque composant/fonction
- Types TypeScript pour toutes les props
- Styles organisés par composant

## 🐛 Gestion des Bugs

Pour signaler un bug :
1. Vérifier qu'il n'est pas déjà reporté
2. Créer une issue avec le label "bug"
3. Décrire : 
   - Comportement attendu
   - Comportement actuel
   - Étapes de reproduction
   - Screenshots si possible

## 📱 Tests et Déploiement

### Environnements
- Développement : `npm run dev`
- Production : `npm run build`
- Tests : `npm run test`

### Plateformes Supportées
- iOS 13+
- Android 6.0+
- Web (responsive)

## 🤝 Contact

Pour toute question sur le projet, contacter :
- [Nom du développeur 1]
- [Nom du développeur 2]
