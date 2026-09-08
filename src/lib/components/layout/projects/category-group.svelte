<script lang="ts">
	import Shine from '$lib/components/shared/shine.svelte';
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
				<div class="flex flex-col items-center justify-center gap-1.5 p-1 sm:gap-3 sm:p-3">
					<div class="flex items-center gap-0.5 sm:gap-1.5">
						{#each category.icons as Icon, i (i)}
							<Icon class="size-5 sm:size-9" />
						{/each}
					</div>
					<p class="hidden text-center text-sm text-slate-200 sm:block">{category.label[lang]}</p>
				</div>
			</Shine>
		</ToggleGroup.Item>
	{/each}
</ToggleGroup.Root>
