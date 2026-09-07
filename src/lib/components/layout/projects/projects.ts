import * as projectImages from '$lib/assets/projects';
import { type Language } from '$lib/translations';

export type ProjectStatus = 'done' | 'wip' | 'planned';
export type ProjectCategory = 'react' | 'svelte-solid' | 'angular-java' | 'react-native' | 'libs';

export type Project = {
	name: Record<Language, string>;
	description: Record<Language, string>;
	image?: string;
	tags: string[];
	url?: string | undefined;
	repo?: string | undefined;
	status: ProjectStatus;
	category: ProjectCategory;
};

const ENDPOINT_GITHUB = 'https://github.com/Forthtilliath';

const projects: Project[] = [
	// ---------------------------------------------------------------- React / Next.js
	{
		name: { fr: 'Chœur de Rôle', en: 'Chœur de Rôle' },
		description: {
			fr: "Site d'une chorale fictive à Angers mêlant chant choral et jeux de société : vitrine publique (accueil éditable par blocs, concerts, galerie photos/vidéos), espace choristes sécurisé en 2FA (trombinoscope, carte, répertoire, sondages, tâches de bureau) et back-office d'administration complet. Développé avec Next.js et Supabase (auth, Postgres, RLS, storage).",
			en: 'Website for a fictional choir in Angers blending choral singing and board games: public showcase (block-editable homepage, concerts, photo/video gallery), 2FA-secured member area (member directory, map, song library, polls, committee tasks) and full admin back-office. Built with Next.js and Supabase (auth, Postgres, RLS, storage).'
		},
		image: projectImages.nextjsChoeurDeRole,
		tags: ['Next.js', 'Tailwind', 'Typescript', 'Supabase', 'Zod', 'Vitest'],
		repo: ENDPOINT_GITHUB + '/choeur-de-role',
		status: 'done',
		category: 'react'
	},
	{
		name: { fr: 'Riftpedia', en: 'Riftpedia' },
		description: {
			fr: 'Encyclopédie interactive de League of Legends : champions, objets et sorts alimentés en direct par Data Dragon et CommunityDragon, interface multilingue.',
			en: 'Interactive League of Legends encyclopedia: champions, items and spells fed live from Data Dragon and CommunityDragon, with a multilingual interface.'
		},
		image: projectImages.nextjsRiotApi,
		tags: ['Next.js', 'Typescript', 'next-intl', 'Tailwind'],
		repo: ENDPOINT_GITHUB + '/riftpedia',
		status: 'done',
		category: 'react'
	},
	{
		name: { fr: 'Preact TOC', en: 'Preact TOC' },
		description: {
			fr: 'Hook headless pour Preact qui génère un sommaire avec scrollspy, publié sur npm sous @forthtilliath/preact-toc.',
			en: 'Headless Preact hook that generates a scrollspy table of contents, published on npm as @forthtilliath/preact-toc.'
		},
		image: projectImages.preactPageNavigation,
		tags: ['Preact', 'Tailwind', 'Typescript'],
		url: 'https://preact-page-navigation.vercel.app/',
		repo: ENDPOINT_GITHUB + '/preact-toc',
		status: 'done',
		category: 'react'
	},

	// ---------------------------------------------------------------- Svelte / Solid
	{
		name: { fr: 'Portfolio', en: 'Portfolio' },
		description: {
			fr: 'Portfolio présentant mes projets et mes compétences',
			en: 'Portfolio of my works and projects'
		},
		image: projectImages.sveltekitPortfolio,
		tags: ['Sveltekit', 'Tailwind', 'Typescript', 'i18n', 'Shadcn/ui', 'Zod'],
		url: 'https://vincent-lisita.vercel.app/',
		repo: ENDPOINT_GITHUB + '/vincent-lisita-portfolio',
		status: 'done',
		category: 'svelte-solid'
	},
	{
		name: { fr: 'LOL Random Arena', en: 'LOL Random Arena' },
		description: {
			fr: 'Application qui aide les joueurs à générer des equipes et des combats aleatoires.',
			en: 'App to help players to generate teams & champions inside arena mode.'
		},
		image: projectImages.sveltekitLolArena,
		tags: ['Sveltekit', 'Typescript', 'Shadcn/ui', 'Tailwind', 'Zod'],
		url: 'https://lol-random-arena.vercel.app/',
		repo: ENDPOINT_GITHUB + '/lol-random-arena',
		status: 'done',
		category: 'svelte-solid'
	},
	{
		name: { fr: 'Lecteur audio : Spotube', en: 'Player audio: Spotube' },
		description: {
			fr: 'Spotube est une application de streaming musical qui te donne accès à quelques titres.',
			en: 'Spotube is a music streaming app that gives you access to a few tracks.'
		},
		image: projectImages.solidjsSpotube,
		tags: ['SolidJS', 'CSS Modules', 'SCSS', 'Typescript'],
		url: 'https://forth-spotube.netlify.app/',
		repo: ENDPOINT_GITHUB + '/spotube',
		status: 'done',
		category: 'svelte-solid'
	},
	{
		name: { fr: 'Restaurant : Oriflamme', en: 'Restaurant: Oriflamme' },
		description: {
			fr: 'La Rotisserie Sandwichs Maison offre une expérience culinaire authentique avec ses viandes grillées artisanales et ses sandwiches gourmands, disponibles sur commande et en livraison à domicile via Les Frères Toques.',
			en: 'The Rotisserie Sandwich House provides an authentic culinary experience with its artisanal grilled meats and gourmet sandwiches, available on order and home delivery through The Brothers Forks.'
		},
		image: projectImages.solidjsOriflamme,
		tags: ['SolidJS', 'Tailwind', 'Typescript'],
		url: 'https://forth-oriflamme.netlify.app/',
		repo: ENDPOINT_GITHUB + '/oriflamme',
		status: 'done',
		category: 'svelte-solid'
	},
	{
		name: { fr: 'Trombinoscope', en: 'Team Directory' },
		description: {
			fr: "Générateur de trombinoscope d'équipe : import de membres, photos, pupitres et groupes, vue carte et annuaire filtrable. Version partageable extraite d'un projet client.",
			en: 'Team directory generator: member import, photos, sections and groups, map view and a filterable directory. Shareable version extracted from a client project.'
		},
		tags: ['Sveltekit', 'Typescript', 'Tailwind'],
		repo: ENDPOINT_GITHUB + '/sveltekit-trombinoscope',
		status: 'planned',
		category: 'svelte-solid'
	},

	// ---------------------------------------------------------------- Angular / Java
	{
		name: { fr: 'BoardGameShop', en: 'BoardGameShop' },
		description: {
			fr: "Boutique en ligne de jeux de société développée en Angular et Java/Spring Boot : catalogue, panier, commandes et back-office d'administration.",
			en: 'Online board-game shop built with Angular and Java/Spring Boot: catalogue, cart, orders and an admin back-office.'
		},
		tags: ['Angular', 'Java', 'Spring Boot', 'Typescript'],
		repo: ENDPOINT_GITHUB + '/boardgameshop',
		status: 'wip',
		category: 'angular-java'
	},
	{
		name: { fr: 'Gestion de portefeuille', en: 'Portfolio Manager' },
		description: {
			fr: 'Application de suivi de portefeuille et de finances personnelles : comptes, transactions, catégories, tableaux de bord et graphiques.',
			en: 'Personal finance and portfolio tracker: accounts, transactions, categories, dashboards and charts.'
		},
		tags: ['Angular', 'Java', 'Spring Boot'],
		status: 'planned',
		category: 'angular-java'
	},
	{
		name: { fr: 'Chat en temps réel', en: 'Real-Time Chat' },
		description: {
			fr: 'Messagerie instantanée avec salons, présence en ligne et notifications, via WebSocket. Front Angular, back Java/Spring.',
			en: 'Instant messaging with rooms, online presence and notifications over WebSocket. Angular front, Java/Spring back.'
		},
		tags: ['Angular', 'Java', 'Spring Boot', 'WebSocket'],
		status: 'planned',
		category: 'angular-java'
	},
	{
		name: { fr: 'Créateur de formulaires', en: 'Form Builder' },
		description: {
			fr: 'Constructeur de formulaires en glisser-déposer : champs configurables, validation, aperçu en direct et export du schéma.',
			en: 'Drag-and-drop form builder: configurable fields, validation, live preview and schema export.'
		},
		tags: ['Angular', 'Java', 'Spring Boot'],
		status: 'planned',
		category: 'angular-java'
	},

	// ---------------------------------------------------------------- React Native
	{
		name: { fr: 'Glucodose', en: 'Glucodose' },
		description: {
			fr: "Application mobile qui calcule la dose d'insuline au repas à partir du poids des aliments pesés : gestion des récipients, des aliments/recettes (base Ciqual de l'Anses), historique exportable en PDF/CSV.",
			en: 'Mobile app that calculates meal insulin dosing from the weighed food: container and food/recipe management (Ciqual/Anses database), history exportable to PDF/CSV.'
		},
		tags: ['React Native', 'Expo', 'Typescript'],
		repo: ENDPOINT_GITHUB + '/glucodose',
		status: 'done',
		category: 'react-native'
	},
	{
		name: { fr: '7 Wonders : Assistant', en: '7 Wonders: Assistant' },
		description: {
			fr: "Application mobile qui aide à gérer et calculer les scores des parties de 7 Wonders. Version React Native, portage de l'assistant web.",
			en: 'Mobile app that helps manage and compute scores for 7 Wonders games. React Native version, a port of the web assistant.'
		},
		tags: ['React Native', 'Expo', 'Typescript'],
		repo: ENDPOINT_GITHUB + '/7wonders-assistant',
		status: 'wip',
		category: 'react-native'
	},
	{
		name: { fr: 'BoardGame Scoring', en: 'BoardGame Scoring' },
		description: {
			fr: 'Application mobile de calcul de scores pour jeux de société : règles paramétrables par jeu, historique de parties et classements.',
			en: 'Mobile score-tracking app for board games: per-game configurable rules, game history and rankings.'
		},
		tags: ['React Native', 'Expo', 'Typescript'],
		repo: ENDPOINT_GITHUB + '/boardgame-scoring',
		status: 'wip',
		category: 'react-native'
	},
	{
		name: { fr: 'LOL Random Arena — Mobile', en: 'LOL Random Arena — Mobile' },
		description: {
			fr: "Portage mobile du générateur d'équipes et de combats aléatoires pour le mode Arène de League of Legends.",
			en: "Mobile port of the random team & fight generator for League of Legends' Arena mode."
		},
		tags: ['React Native', 'Expo', 'Typescript'],
		repo: ENDPOINT_GITHUB + '/lol-random-arena',
		status: 'planned',
		category: 'react-native'
	},

	// ---------------------------------------------------------------- Libs & extensions
	{
		name: { fr: 'DevWind', en: 'DevWind' },
		description: {
			fr: "Extension Chrome pour éditer visuellement les classes Tailwind CSS en direct sur n'importe quel site : picker visuel, panneau de classes par catégorie, synthèse CSS live, contrôle de contraste WCAG. Deux variantes : Tailwind v4 (DevWind) et v3 (devwind-tw3).",
			en: 'Chrome extension to visually edit Tailwind CSS classes live on any site: visual picker, categorized class panel, live CSS synthesis, WCAG contrast checking. Two variants: Tailwind v4 (DevWind) and v3 (devwind-tw3).'
		},
		image: projectImages.devwind,
		tags: ['React', 'Tailwind', 'Typescript', 'Zustand', 'Vite', 'Chrome Extension'],
		repo: ENDPOINT_GITHUB + '/devwind',
		status: 'wip',
		category: 'libs'
	},
	{
		name: { fr: 'Meeplog', en: 'Meeplog' },
		description: {
			fr: 'Blog perso sur les jeux de société (chroniques, retours de partie), développé en full-stack avec AdonisJS : auth, connexion GitHub, articles en markdown.',
			en: 'Personal blog about board games (reviews, session reports), built full-stack with AdonisJS: auth, GitHub login, markdown articles.'
		},
		image: projectImages.meeplog,
		tags: ['AdonisJS', 'Bootstrap', 'Typescript'],
		repo: ENDPOINT_GITHUB + '/meeplog',
		status: 'done',
		category: 'libs'
	},
	{
		name: { fr: '@forthtilliath', en: '@forthtilliath' },
		description: {
			fr: 'Monorepo de packages npm publiés : composants et hooks React, kit React Native, utilitaires TypeScript, outils Expo. Géré avec Turborepo, pnpm et Changesets.',
			en: 'Monorepo of published npm packages: React components and hooks, a React Native kit, TypeScript utilities, Expo tooling. Managed with Turborepo, pnpm and Changesets.'
		},
		tags: ['Typescript', 'React', 'React Native', 'Turborepo', 'pnpm'],
		repo: ENDPOINT_GITHUB + '/forthtilliath-packages',
		status: 'wip',
		category: 'libs'
	}
];

export default projects;
