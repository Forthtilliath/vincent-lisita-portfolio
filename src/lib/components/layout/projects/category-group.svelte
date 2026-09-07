<script lang="ts">
	import Shine from '$lib/components/shared/shine.svelte';
	import SkillIcon from '$lib/components/shared/skill-icon.svelte';
	import * as ToggleGroup from '$lib/components/ui/toggle-group';
	import { t, locale, type Language } from '$lib/translations';
	import { projectCategories } from './project-categories';
	import type { ProjectCategory } from './projects';

	interface Props {
		value?: ProjectCategory | '';
	}

	let { value = $bindable('') }: Props = $props();

	let lang: Language = $derived($locale as Language);
</script>

<ToggleGroup.Root type="single" class="h-auto gap-3 sm:gap-5" size="auto" spacing={1} bind:value>
	{#each projectCategories as category (category.id)}
		<ToggleGroup.Item
			value={category.id}
			aria-label={`${$t('projects.filterBy')} ${category.label[lang]}`}
			class="size-14 border p-0 hover:border-white sm:size-28"
		>
			<Shine>
				<SkillIcon icon={category.icon} name={category.label[lang]} class="size-6 sm:size-12" />
			</Shine>
		</ToggleGroup.Item>
	{/each}
</ToggleGroup.Root>
