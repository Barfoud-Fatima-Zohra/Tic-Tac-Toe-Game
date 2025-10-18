# Tic-Tac-Toe avec l'Algorithme Minimax


Ce projet est un jeu de Tic-Tac-Toe développé avec Next.js, TypeScript et React, intégrant l'algorithme Minimax pour permettre à l'ordinateur de jouer de manière optimale. Le jeu est conçu pour permettre à un utilisateur humain de jouer contre un ordinateur (le "Robot").

![Main Interface](/assets/tic-tac-toe.png)

## Fonctionnalités

- **Interface Utilisateur**: Une interface utilisateur moderne et intuitive avec un plateau de jeu 3x3
- **Tour par Tour**: Les joueurs alternent leurs tours, l'humain jouant avec "X" et l'ordinateur avec "O"
- **Algorithme Minimax**: Utilisé pour calculer le meilleur coup possible pour l'ordinateur afin de minimiser la chance de défaite et maximiser la chance de victoire
- **Indication de Fin de Jeu**: Un message s'affiche à la fin de chaque partie pour indiquer si l'humain ou le robot a gagné, ou s'il y a égalité
- **Réinitialisation du Jeu**: Un bouton "Reset" permet de réinitialiser le jeu à tout moment
- **Interface Responsive**: Design adaptatif qui fonctionne sur desktop et mobile


## Explication de l'Algorithme Minimax

L'algorithme Minimax est une méthode récursive utilisée dans la théorie des jeux et l'intelligence artificielle pour déterminer le meilleur coup à jouer. Voici comment il fonctionne :

### Évaluation des Coups
L'algorithme évalue tous les coups possibles disponibles sur le plateau.

### Maximisation et Minimisation
- Si c'est le tour de l'ordinateur (joueur maximisant), il choisit le coup qui maximise son score
- Si c'est le tour de l'humain (joueur minimisant), il choisit le coup qui minimise le score de l'ordinateur

### Fonction de Score
- Si l'ordinateur gagne, le score est positif (ex. +10)
- Si l'humain gagne, le score est négatif (ex. -10)
- Si c'est une égalité, le score est neutre (0)

### Récursivité
L'algorithme continue d'explorer les coups possibles de manière récursive jusqu'à atteindre une condition de fin de partie (victoire, défaite, égalité).

L'objectif de l'algorithme Minimax est de garantir que l'ordinateur joue de manière optimale, minimisant les pertes face à un adversaire parfait.

## Installation et Exécution

### Prérequis
- Node.js (version 18 ou supérieure)
- npm, yarn, pnpm ou bun

### Étapes de Démarrage

1. **Cloner le projet**
   ```bash
   git clone <url-du-repo>
   cd tic-tac-toe_game
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   # ou
   bun install
   ```

3. **Lancer le serveur de développement**
```bash
npm run dev
   # ou
yarn dev
   # ou
pnpm dev
   # ou
bun dev
```

4. **Ouvrir l'application**
   Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

### Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run start` - Lance l'application en mode production
- `npm run lint` - Vérifie le code avec ESLint


## Technologies Utilisées

- **Next.js 14** - Framework React pour la production
- **TypeScript** - Langage de programmation typé
- **React** - Bibliothèque pour l'interface utilisateur
- **Tailwind CSS** - Framework CSS pour le styling
