import type { Component } from 'svelte';

// https://icon-icons.com/
// https://seeklogo.com/

import React from '$lib/components/shared/icons/libraries/react.svelte';
import SolidJS from '$lib/components/shared/icons/libraries/solid-js.svelte';
import Svelte from '$lib/components/shared/icons/libraries/svelte.svelte';
import NextJS from '$lib/components/shared/icons/libraries/next-js.svelte';
import ReactNative from '$lib/components/shared/icons/libraries/react-native.svelte';
import Angular from '$lib/components/shared/icons/libraries/angular.svelte';
import Preact from '$lib/components/shared/icons/libraries/preact.svelte';
import Expo from '$lib/components/shared/icons/libraries/expo.svelte';

import NodeJs from '$lib/components/shared/icons/libraries/node-js.svelte';
import SpringBoot from '$lib/components/shared/icons/libraries/spring-boot.svelte';
import AdonisJs from '$lib/components/shared/icons/libraries/adonis-js.svelte';
import Supabase from '$lib/components/shared/icons/libraries/supabase.svelte';
import Prisma from '$lib/components/shared/icons/libraries/prisma.svelte';
import Drizzle from '$lib/components/shared/icons/libraries/drizzle.svelte';
import MongoDB from '$lib/components/shared/icons/libraries/mongo-db.svelte';

import CSSModules from '$lib/components/shared/icons/libraries/css-modules.svelte';
import SCSS from '$lib/components/shared/icons/libraries/sass.svelte';
import TailwindCSS from '$lib/components/shared/icons/libraries/tailwind-css.svelte';
import StyledComponents from '$lib/components/shared/icons/libraries/styled-components.svelte';

import I18n from '$lib/components/shared/icons/libraries/i18n.svelte';
import ChartJs from '$lib/components/shared/icons/libraries/chart-js.svelte';
import Zod from '$lib/components/shared/icons/libraries/zod.svelte';
import Shadcn from '$lib/components/shared/icons/libraries/shadcn.svelte';
import Zustand from '$lib/components/shared/icons/libraries/zustand.svelte';
import Vitest from '$lib/components/shared/icons/libraries/vitest.svelte';
import Storybook from '$lib/components/shared/icons/libraries/storybook.svelte';
import Bootstrap from '$lib/components/shared/icons/libraries/bootstrap.svelte';

import Typescript from '$lib/components/shared/icons/libraries/typescript.svelte';
import Java from '$lib/components/shared/icons/libraries/java.svelte';
import Sql from '$lib/components/shared/icons/libraries/sql.svelte';

import Git from '$lib/components/shared/icons/libraries/git.svelte';
import Github from '$lib/components/shared/icons/libraries/github.svelte';
import GithubActions from '$lib/components/shared/icons/libraries/github-actions.svelte';
import VsCode from '$lib/components/shared/icons/libraries/vs-code.svelte';
import Vite from '$lib/components/shared/icons/libraries/vite.svelte';
import Pnpm from '$lib/components/shared/icons/libraries/pnpm.svelte';
import Turborepo from '$lib/components/shared/icons/libraries/turborepo.svelte';
import Playwright from '$lib/components/shared/icons/libraries/playwright.svelte';
import Vercel from '$lib/components/shared/icons/libraries/vercel.svelte';
import ChromeExtension from '$lib/components/shared/icons/libraries/chrome-extension.svelte';

export type Skill = {
	name: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any -- icon components have genuinely different Props shapes (some `color` is a tuple, some non-optional); only ever rendered via the common subset in SkillIcon
	icon: Component<any>;
	color?: string;
};

export type Technology = (typeof skills)[keyof typeof skills][number]['name'];
export type Framework = (typeof skills.frontend)[number]['name'];

const skills = {
	frontend: [
		{ name: 'React', icon: React },
		{ name: 'Next.js', icon: NextJS },
		{ name: 'Angular', icon: Angular },
		{ name: 'SolidJS', icon: SolidJS },
		{ name: 'Sveltekit', icon: Svelte },
		{ name: 'Preact', icon: Preact },
		{ name: 'React Native', icon: ReactNative },
		{ name: 'Expo', icon: Expo }
	],
	backend: [
		{ name: 'Node.js', icon: NodeJs },
		{ name: 'Spring Boot', icon: SpringBoot },
		{ name: 'AdonisJS', icon: AdonisJs },
		{ name: 'Supabase', icon: Supabase },
		{ name: 'Prisma', icon: Prisma },
		{ name: 'Drizzle', icon: Drizzle },
		{ name: 'MongoDB', icon: MongoDB }
	],
	css: [
		{ name: 'CSS Modules', icon: CSSModules },
		{ name: 'SCSS', icon: SCSS },
		{ name: 'Tailwind', icon: TailwindCSS },
		{ name: 'Styled Components', icon: StyledComponents }
	],
	libraries: [
		{ name: 'i18n', icon: I18n },
		{ name: 'Zod', icon: Zod },
		{ name: 'Zustand', icon: Zustand, color: 'white' },
		{ name: 'Shadcn/ui', icon: Shadcn },
		{ name: 'Bootstrap', icon: Bootstrap },
		{ name: 'Chart.js', icon: ChartJs },
		{ name: 'Vitest', icon: Vitest },
		{ name: 'Storybook', icon: Storybook }
	],
	languages: [
		{ name: 'Typescript', icon: Typescript },
		{ name: 'Java', icon: Java },
		{ name: 'SQL', icon: Sql }
	],
	tools: [
		{ name: 'Git', icon: Git },
		{ name: 'GitHub', icon: Github },
		{ name: 'GitHub Actions', icon: GithubActions },
		{ name: 'VS Code', icon: VsCode },
		{ name: 'Vite', icon: Vite },
		{ name: 'Pnpm', icon: Pnpm },
		{ name: 'Turborepo', icon: Turborepo },
		{ name: 'Playwright', icon: Playwright },
		{ name: 'Vercel', icon: Vercel },
		{ name: 'Chrome Extension', icon: ChromeExtension }
	]
} as const satisfies Record<string, Skill[]>;

export default skills;
