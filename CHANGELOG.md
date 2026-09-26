# Changelog

Toutes les modifications notables de ce projet sont consignées ici.

Le format s'inspire de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/).
Le projet est déployé en continu : les entrées sont datées par session de travail
plutôt que par numéro de version.

## 2026-09-27

### Modifié

- Projet **Bon Sang** (Next.js, ex-« Don du sang ») : renommé d'après sa marque, v1.0.0 terminée. Description et tags mis à jour après la refonte « Plasma & Globule », galerie refaite (accueil, parcours d'une poche, témoignages, quiz, carte des collectes, suivi, vues mobiles).
- Projet **LoL Random Arena** (React Native, version mobile) : lien vers le dépôt renommé `lol-random-arena-mobile` (ex-`reactnative-lol-random-arena`).

## 2026-09-26

### Modifié

- Projet **LoL Random Arena** (SvelteKit) : description et tags mis à jour après la refonte « Hextech » (v1.0.0), nouvelle couverture et galerie (formulaire, résultat duos, résultat trios, vue mobile).
- Projet **LoL Random Arena** (React Native, version mobile) : passé de « planned » à « done », titre sans suffixe « — Mobile » (tronqué sur la carte ; la catégorie et les captures suffisent à la distinguer), dépôt dédié `reactnative-lol-random-arena`, description, tags et galerie de captures.

## 2026-09-06

### Ajouté

- Navigation mobile (menu burger) dans le header.
- Lien « passer au contenu » et repère `<nav>` pour l'accessibilité du header.
- Négociation de la langue à partir du cookie et de l'en-tête `Accept-Language`,
  choix mémorisé dans un cookie.
- Endpoints `robots.txt` et `sitemap.xml`.
- Image Open Graph dédiée au partage sur les réseaux sociaux.
- Lien vers le projet en ligne dans la boîte de dialogue des projets.
- Exécution de Vitest dans la CI.

### Modifié

- Copyright du footer : année dynamique (`2024–<année courante>`).
- `hero.svelte` : suppression du flash au chargement des dés `FlipWords`
  (conteneur toujours monté, hauteur réservée).
- Fusion de `global.css` dans `app.css` (règle `scroll-behavior`), suppression
  de l'import en double.
- Cartes de projet rendues directement (abandon du squelette `WithLoader`).
- `sendMail` déplacé dans `lib/server` pour empêcher tout import côté client.
- Description du portfolio réécrite à la première personne.

### Corrigé

- Dimensions fixées sur l'image de la boîte de dialogue projet (évite le CLS).
- Injection d'en-tête possible via le champ email du formulaire de contact
  (entrée échappée), suppression de l'action `sendEmail` morte.
- Libellé lecteur d'écran de la bascule de langue rendu cohérent.
- Log de chargement i18n retiré du bundle client.
- Éviction des clés périmées de la map de rate-limit.

### Supprimé

- Dépendance de développement `jsdom` inutilisée.

## 2026-08-04 → 2026-08-06

### Ajouté

- Pages CV en texte une colonne, compatibles ATS.
- Liens sociaux exposés en texte invisible lisible par les ATS.
- Badges « pilule » pour les tags de projet.
- Filtre de framework des projets en sélection unique.
- Entrée de projet Glucodose, icônes React Native et Expo.
- Script de régénération à la demande des PDF de CV.

### Modifié

- Contenu des CV déplacé dans des fichiers de données + composant d'entrée partagé.
- Section expérience du CV restauration étoffée et resserrée.
- Styles partagés du CV (layout, cartes de la sidebar, entrées de formation)
  extraits vers le SCSS global, ordre de lecture corrigé.
- Largeurs de squelette stabilisées, nombre de tags visibles plafonné.

### Corrigé

- Taille de l'icône Next.js via les attributs SVG.
- Marge haute de la carte « savoir-faire » de la sidebar CV.
- Chemin des locales i18n-ally dans les réglages VS Code.

### Supprimé

- Projets à faible valeur retirés du portfolio.

## 2026-07-24 → 2026-07-28

### Ajouté

- Notifications toast à l'envoi du formulaire de contact.
- Rate limiting sur l'action du formulaire de contact.
- Boîte de dialogue « lire plus » sur les cartes de projet.
- CI GitHub Actions (lint, check, build).
- README et licence MIT, badges de stack technique.
- Nouveaux projets et icônes de compétences (Chœur de Rôle, devwind, meeplog,
  Preact, AdonisJS, Bootstrap, extension Chrome…).

### Modifié

- Migration vers Svelte 5 (runes) sur l'ensemble des composants et routes.
- Migration vers Tailwind CSS v4 (config theme CSS-first).
- Régénération des composants UI pour bits-ui v2 et formsnap v2, formulaire de
  contact adapté à Zod v4.
- Migration de la config ESLint vers le flat config (ESLint 10).
- Mise à jour des dépendances vers leurs versions majeures les plus récentes.
- Passage à `adapter-vercel`, runtime Node de Vercel épinglé.
- Navigation interne via `resolve()`, clés ajoutées aux blocs `{#each}`.

### Corrigé

- Crash SSR lié au bubbler `svelte/legacy`.
- Certificats TLS invalides désormais rejetés par le transporteur SMTP.
- Liens de dépôts corrigés après renommages GitHub.
- Vulnérabilités d'audit corrigées via `overrides`.

## 2025-06-17 → 2025-06-19

### Ajouté

- Section CV avec liens vers les PDF et thème CV noir et blanc.

### Modifié

- Passage à Bun comme gestionnaire de paquets, compilateur SCSS résolu.
- Mise à jour des liens sociaux et du texte « À propos ».

## 2024-07 → 2024-11

### Ajouté

- Version initiale du portfolio : hero, à propos, compétences, projets, contact.
- Plugin d'animation d'étoiles.
- Section projets filtrable par framework avec pagination.
- Photo personnelle, images de projet converties en WebP.

### Corrigé

- Nombreux ajustements responsive sur petits écrans.
- Réinitialisation de la page courante au changement des données.
