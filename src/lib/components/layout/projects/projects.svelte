<script lang="ts">
	import { dev } from '$app/environment';
	import Section from '$lib/components/shared/section.svelte';
	import SectionTitle from '$lib/components/shared/section-title.svelte';
	import ProjectCard from './project-card.svelte';
	import projects from './projects';
	import type { ProjectCategory } from './projects';
	import CategoryGroup from './category-group.svelte';
	import Pagination from '$lib/components/shared/pagination.svelte';
	import { t } from '$lib/translations';
	import { filterProjects } from './filter-projects';

	let filterCategory = $state<ProjectCategory | ''>('');

	let filteredProjects = $derived(
		filterProjects(projects, { category: filterCategory, includePlanned: dev })
	);
</script>

<Section className="flex items-center justify-start flex-col" id="projects">
	<SectionTitle>{$t('projects.title')}</SectionTitle>

	<div class="pb-4">
		<p class="p-3 text-center text-slate-200">{$t('projects.radio-description')}</p>
		<CategoryGroup bind:value={filterCategory} />
	</div>

	<Pagination data={filteredProjects} perPage={6} siblingCount={2}>
		{#snippet card({ itemData })}
			<article class="mx-auto w-full">
				<ProjectCard {...itemData} />
			</article>
		{/snippet}
	</Pagination>
</Section>
