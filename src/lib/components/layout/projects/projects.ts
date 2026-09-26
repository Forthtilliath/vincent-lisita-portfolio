import * as projectImages from '$lib/assets/projects';
import { type Language } from '$lib/translations';

export type ProjectStatus = 'done' | 'wip' | 'planned';
export type ProjectCategory = 'react' | 'svelte-solid' | 'angular-java' | 'react-native' | 'libs';

export type Project = {
	name: Record<Language, string>;
	description: Record<Language, string>;
	/** Screenshots shown in the detail dialog; the first one is the card cover. */
	images?: string[];
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
		images: [projectImages.nextjsChoeurDeRole, ...projectImages.gallery('choeur-de-role')],
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
		images: [projectImages.nextjsRiotApi, ...projectImages.gallery('riftpedia')],
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
		images: [projectImages.preactPageNavigation, ...projectImages.gallery('preact-toc')],
		tags: ['Preact', 'Tailwind', 'Typescript'],
		url: 'https://preact-page-navigation.vercel.app/',
		repo: ENDPOINT_GITHUB + '/preact-toc',
		status: 'done',
		category: 'react'
	},
	{
		name: { fr: 'Don du sang', en: 'Blood Donation' },
		description: {
			fr: "Site d'information et d'incitation au don du sang : comprendre à quoi sert un don et qui il aide, tester son éligibilité, trouver une collecte près de chez soi (données ouvertes EFS) et être rappelé dès qu'on peut redonner.",
			en: 'Blood-donation information and outreach site: understand what a donation is used for and who it helps, check your eligibility, find a nearby blood drive (EFS open data) and get reminded as soon as you can donate again.'
		},
		images: projectImages.gallery('bon-sang'),
		tags: ['Next.js', 'Typescript', 'Tailwind', 'MapLibre', 'i18n'],
		url: 'https://bon-sang.vercel.app/',
		repo: ENDPOINT_GITHUB + '/bon-sang',
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
		images: [projectImages.sveltekitPortfolio, ...projectImages.gallery('portfolio')],
		tags: ['Sveltekit', 'Tailwind', 'Typescript', 'i18n', 'Shadcn/ui', 'Zod'],
		url: 'https://vincent-lisita.vercel.app/',
		repo: ENDPOINT_GITHUB + '/vincent-lisita-portfolio',
		status: 'done',
		category: 'svelte-solid'
	},
	{
		name: { fr: 'LoL Random Arena', en: 'LoL Random Arena' },
		description: {
			fr: "Générateur d'équipes et de champions aléatoires pour le mode Arena de League of Legends : duos ou trios, un champion par joueur sans doublon, bannissement automatique d'après les stats op.gg et lien de partage du tirage. Thème « Hextech » inspiré du client LoL, champions synchronisés depuis Data Dragon.",
			en: "Random team & champion generator for League of Legends' Arena mode: duos or trios, one unique champion per player, automatic bans based on op.gg stats and shareable draw links. League client-inspired « Hextech » theme, champions synced from Data Dragon."
		},
		images: [projectImages.sveltekitLolArena, ...projectImages.gallery('lol-random-arena')],
		tags: ['Sveltekit', 'Svelte 5', 'Typescript', 'Tailwind', 'Shadcn/ui', 'Zod', 'Vitest'],
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
		images: [projectImages.solidjsSpotube, ...projectImages.gallery('spotube')],
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
		images: [projectImages.solidjsOriflamme, ...projectImages.gallery('oriflamme')],
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
		name: { fr: 'Forme', en: 'Forme' },
		description: {
			fr: "Constructeur de formulaires en glisser-déposer à l'identité d'atelier typographique : champs configurables, validation miroir côté Angular et côté Java, aperçu en direct, page publique, registre des réponses et export JSON Schema. Se lance en une commande avec Docker.",
			en: 'Drag-and-drop form builder with a letterpress-workshop identity: configurable fields, mirrored validation in Angular and Java, live preview, public page, response ledger and JSON Schema export. Runs with a single Docker command.'
		},
		images: [projectImages.angularForme, ...projectImages.gallery('forme')],
		tags: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Typescript'],
		repo: ENDPOINT_GITHUB + '/forme',
		status: 'done',
		category: 'angular-java'
	},
	{
		name: { fr: 'BoardGameShop', en: 'BoardGameShop' },
		description: {
			fr: "Boutique en ligne de jeux de société développée en Angular et Java/Spring Boot : catalogue, panier, commandes et back-office d'administration.",
			en: 'Online board-game shop built with Angular and Java/Spring Boot: catalogue, cart, orders and an admin back-office.'
		},
		images: projectImages.gallery('boardgameshop'),
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

	// ---------------------------------------------------------------- React Native
	{
		name: { fr: 'Glucodose', en: 'Glucodose' },
		description: {
			fr: "Application mobile qui calcule la dose d'insuline au repas à partir du poids des aliments pesés : gestion des récipients, des aliments/recettes (base Ciqual de l'Anses), historique exportable en PDF/CSV.",
			en: 'Mobile app that calculates meal insulin dosing from the weighed food: container and food/recipe management (Ciqual/Anses database), history exportable to PDF/CSV.'
		},
		images: projectImages.gallery('glucodose'),
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
		images: projectImages.gallery('7wonders-assistant'),
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
		images: projectImages.gallery('boardgame-scoring'),
		tags: ['React Native', 'Expo', 'Typescript'],
		repo: ENDPOINT_GITHUB + '/boardgame-scoring',
		status: 'wip',
		category: 'react-native'
	},
	{
		name: { fr: 'React Native Kit', en: 'React Native Kit' },
		description: {
			fr: 'Boîte à outils React Native — composants, hooks et helpers — utilisée en production par Glucodose. Publiée sur npm depuis un monorepo Turborepo (versioning Changesets, publication en CI).',
			en: 'React Native toolkit — components, hooks and helpers — used in production by Glucodose. Published to npm from a Turborepo monorepo (Changesets versioning, CI publishing).'
		},
		tags: ['React Native', 'Expo', 'Typescript', 'Turborepo'],
		url: 'https://www.npmjs.com/package/@forthtilliath/react-native-kit',
		repo: ENDPOINT_GITHUB + '/forthtilliath-packages',
		status: 'wip',
		category: 'react-native'
	},
	{
		name: { fr: 'LoL Random Arena — Mobile', en: 'LoL Random Arena — Mobile' },
		description: {
			fr: "Portage mobile du générateur d'équipes et de champions pour le mode Arena de League of Legends, avec le même thème « Hextech » que le site : tirage hors ligne (portraits embarqués), bannissement automatique via op.gg, pseudos retenus et groupes sauvegardés, partage du résultat.",
			en: "Mobile port of the team & champion generator for League of Legends' Arena mode, sharing the website's « Hextech » theme: offline draws (bundled portraits), automatic bans via op.gg, remembered players and saved groups, result sharing."
		},
		images: projectImages.gallery('lol-random-arena-mobile'),
		tags: ['React Native', 'Expo', 'Typescript', 'Zustand', 'Zod', 'Jest'],
		repo: ENDPOINT_GITHUB + '/reactnative-lol-random-arena',
		status: 'done',
		category: 'react-native'
	},

	// ---------------------------------------------------------------- Libs & extensions
	{
		name: { fr: 'DevWind', en: 'DevWind' },
		description: {
			fr: "Extension Chrome pour éditer visuellement les classes Tailwind CSS en direct sur n'importe quel site : picker visuel, panneau de classes par catégorie, synthèse CSS live, contrôle de contraste WCAG. Deux variantes : Tailwind v4 (DevWind) et v3 (devwind-tw3).",
			en: 'Chrome extension to visually edit Tailwind CSS classes live on any site: visual picker, categorized class panel, live CSS synthesis, WCAG contrast checking. Two variants: Tailwind v4 (DevWind) and v3 (devwind-tw3).'
		},
		images: [projectImages.devwind, ...projectImages.gallery('devwind')],
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
		images: [projectImages.meeplog, ...projectImages.gallery('meeplog')],
		tags: ['AdonisJS', 'Bootstrap', 'Typescript'],
		repo: ENDPOINT_GITHUB + '/meeplog',
		status: 'done',
		category: 'libs'
	},
	{
		name: { fr: 'Forth-ui', en: 'Forth-ui' },
		description: {
			fr: 'Bibliothèque de composants React haut niveau construite sur shadcn/ui, documentée avec Storybook et publiée sur npm depuis un monorepo Turborepo (versioning Changesets, publication en CI).',
			en: 'High-level React component library built on top of shadcn/ui, documented with Storybook and published to npm from a Turborepo monorepo (Changesets versioning, CI publishing).'
		},
		images: projectImages.gallery('forth-ui'),
		tags: ['React', 'Typescript', 'Tailwind', 'Shadcn/ui', 'Storybook'],
		url: 'https://www.npmjs.com/package/@forthtilliath/forth-ui',
		repo: ENDPOINT_GITHUB + '/forthtilliath-packages',
		status: 'wip',
		category: 'libs'
	},
	{
		name: { fr: 'Bot soirées jeux', en: 'Board Game Night Bot' },
		description: {
			fr: 'Bot Discord pour groupes de joueurs : organisation des soirées (dates, présences, rappels), vote du jeu à sortir, collection du groupe importée depuis MyLudo, suivi des parties et classement Elo.',
			en: 'Discord bot for board game groups: game-night organization (dates, RSVP, reminders), voting on which game to play, group collection imported from MyLudo, play tracking and Elo ranking.'
		},
		tags: ['Discord.js', 'Node.js', 'Typescript', 'Drizzle', 'SQLite'],
		status: 'planned',
		category: 'libs'
	}
];

export default projects;
