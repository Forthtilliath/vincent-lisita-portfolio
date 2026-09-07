import type { Component } from 'svelte';
import type { Language } from '$lib/translations';
import type { ProjectCategory } from './projects';

import React from '$lib/components/shared/icons/libraries/react.svelte';
import Svelte from '$lib/components/shared/icons/libraries/svelte.svelte';
import Angular from '$lib/components/shared/icons/libraries/angular.svelte';
import ReactNative from '$lib/components/shared/icons/libraries/react-native.svelte';
import Blocks from '@lucide/svelte/icons/blocks';

export type ProjectCategoryDef = {
	id: ProjectCategory;
	label: Record<Language, string>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any -- icon components have genuinely different Props shapes; only ever rendered via the common subset in SkillIcon
	icon: Component<any>;
};

export const projectCategories: ProjectCategoryDef[] = [
	{ id: 'react', label: { fr: 'React / Next.js', en: 'React / Next.js' }, icon: React },
	{ id: 'svelte-solid', label: { fr: 'Svelte / Solid', en: 'Svelte / Solid' }, icon: Svelte },
	{ id: 'angular-java', label: { fr: 'Angular / Java', en: 'Angular / Java' }, icon: Angular },
	{ id: 'react-native', label: { fr: 'React Native', en: 'React Native' }, icon: ReactNative },
	{ id: 'libs', label: { fr: 'Libs & extensions', en: 'Libs & extensions' }, icon: Blocks }
];
