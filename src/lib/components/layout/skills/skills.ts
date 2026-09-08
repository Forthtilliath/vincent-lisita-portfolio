import type { Component } from 'svelte';

// https://icon-icons.com/
// https://seeklogo.com/

import React from '$lib/components/shared/icons/libraries/react.svelte';
import SolidJS from '$lib/components/shared/icons/libraries/solid-js.svelte';
import Svelte from '$lib/components/shared/icons/libraries/svelte.svelte';
import NextJS from '$lib/components/shared/icons/libraries/next-js.svelte';
import ReactNative from '$lib/components/shared/icons/libraries/react-native.svelte';
import Angular from '$lib/components/shared/icons/libraries/angular.svelte';
import SpringBoot from '$lib/components/shared/icons/libraries/spring-boot.svelte';

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

import Typescript from '$lib/components/shared/icons/libraries/typescript.svelte';
import Java from '$lib/components/shared/icons/libraries/java.svelte';
import Sql from '$lib/components/shared/icons/libraries/sql.svelte';

import AdonisJs from '$lib/components/shared/icons/libraries/adonis-js.svelte';
import Bootstrap from '$lib/components/shared/icons/libraries/bootstrap.svelte';
import Preact from '$lib/components/shared/icons/libraries/preact.svelte';
import ChromeExtension from '$lib/components/shared/icons/libraries/chrome-extension.svelte';
import Expo from '$lib/components/shared/icons/libraries/expo.svelte';

import Git from '$lib/components/shared/icons/libraries/git.svelte';
import Github from '$lib/components/shared/icons/libraries/github.svelte';
import VsCode from '$lib/components/shared/icons/libraries/vs-code.svelte';
import Prisma from '$lib/components/shared/icons/libraries/prisma.svelte';
import Drizzle from '$lib/components/shared/icons/libraries/drizzle.svelte';
import MongoDB from '$lib/components/shared/icons/libraries/mongo-db.svelte';
import Vite from '$lib/components/shared/icons/libraries/vite.svelte';
import Pnpm from '$lib/components/shared/icons/libraries/pnpm.svelte';
import Turborepo from '$lib/components/shared/icons/libraries/turborepo.svelte';
import Supabase from '$lib/components/shared/icons/libraries/supabase.svelte';
import NodeJs from '$lib/components/shared/icons/libraries/node-js.svelte';
import Storybook from '$lib/components/shared/icons/libraries/storybook.svelte';

export type Skill = {
	name: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any -- icon components have genuinely different Props shapes (some `color` is a tuple, some non-optional); only ever rendered via the common subset in SkillIcon
	icon: Component<any>;
	color?: string;
};

export type Technology = (typeof skills)[keyof typeof skills][number]['name'];
export type Framework = (typeof skills.frameworks)[number]['name'];

const skills = {
	frameworks: [
		{
			name: 'React',
			icon: React
		},
		{
			name: 'Next.js',
			icon: NextJS
		},
		{
			name: 'Angular',
			icon: Angular
		},
		{
			name: 'SolidJS',
			icon: SolidJS
		},
		{
			name: 'Sveltekit',
			icon: Svelte
		},
		{
			name: 'React Native',
			icon: ReactNative
		},
		{
			name: 'Spring Boot',
			icon: SpringBoot
		}
	],
	css: [
		{
			name: 'CSS Modules',
			icon: CSSModules
		},
		{
			name: 'SCSS',
			icon: SCSS
		},
		{
			name: 'Tailwind',
			icon: TailwindCSS
		},
		{
			name: 'Styled Components',
			icon: StyledComponents
		}
	],
	libraries: [
		{
			name: 'i18n',
			icon: I18n
		},
		{
			name: 'Shadcn/ui',
			icon: Shadcn
		},
		{
			name: 'Zod',
			icon: Zod
		},
		{
			name: 'Chart.js',
			icon: ChartJs
		},
		{
			name: 'Storybook',
			icon: Storybook
		},
		{
			name: 'Zustand',
			icon: Zustand,
			color: 'white'
		},
		{
			name: 'Vitest',
			icon: Vitest
		},
		{
			name: 'AdonisJS',
			icon: AdonisJs
		},
		{
			name: 'Bootstrap',
			icon: Bootstrap
		},
		{
			name: 'Preact',
			icon: Preact
		},
		{
			name: 'Chrome Extension',
			icon: ChromeExtension
		},
		{
			name: 'Expo',
			icon: Expo
		}
	],
	languages: [
		{
			name: 'Typescript',
			icon: Typescript
		},
		{
			name: 'Java',
			icon: Java
		},
		{
			name: 'SQL',
			icon: Sql
		}
	],
	tools: [
		{
			name: 'Git',
			icon: Git
		},
		{
			name: 'GitHub',
			icon: Github
		},
		{
			name: 'VS Code',
			icon: VsCode
		},
		{
			name: 'Node.js',
			icon: NodeJs
		},
		{
			name: 'Prisma',
			icon: Prisma
		},
		{
			name: 'Drizzle',
			icon: Drizzle
		},
		{
			name: 'MongoDB',
			icon: MongoDB
		},
		{
			name: 'Pnpm',
			icon: Pnpm
		},
		{
			name: 'Turborepo',
			icon: Turborepo
		},
		{
			name: 'Vite',
			icon: Vite
		},
		{
			name: 'Supabase',
			icon: Supabase
		}
	]
} as const satisfies Record<string, Skill[]>;

export default skills;
