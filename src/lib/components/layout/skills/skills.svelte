<script lang="ts">
	import Section from '$lib/components/shared/section.svelte';
	import SectionTitle from '$lib/components/shared/section-title.svelte';
	import { t } from '$lib/translations';

	import skills, { type Skill } from './skills';
	import SkillBox from './tilt-box.svelte';
	import { sortStringsByKey } from '$lib/methods/sort';

	// Front-end leads; the rest fills the remaining masonry space so the
	// columns stay balanced.
	const groups: { key: string; list: readonly Skill[] }[] = [
		{ key: 'frontend', list: skills.frontend },
		{ key: 'libraries', list: skills.libraries },
		{ key: 'tools', list: skills.tools },
		{ key: 'backend', list: skills.backend },
		{ key: 'css', list: skills.css },
		{ key: 'languages', list: skills.languages }
	];
</script>

<Section className="flex items-center justify-center flex-col" id="skills">
	<SectionTitle>
		{$t('skills.title')}
	</SectionTitle>

	<!-- Masonry (CSS multi-column): cards keep their natural height and pack
	     tightly, so a 3-item group no longer leaves a gap next to a 10-item one. -->
	<div class="w-full gap-4 md:columns-2 xl:columns-3">
		{#each groups as { key, list } (key)}
			<div class="mb-4 break-inside-avoid">
				<SkillBox title={$t(`skills.${key}`)} list={list.toSorted(sortStringsByKey('name'))} />
			</div>
		{/each}
	</div>
</Section>
