<script lang="ts">
	import Section from '$lib/components/shared/section.svelte';
	import SectionTitle from '$lib/components/shared/section-title.svelte';
	import { t } from '$lib/translations';

	import skills from './skills';
	import SkillBox from './tilt-box.svelte';
	import { sortStringsByKey } from '$lib/methods/sort';
	let { frontend, backend, css, libraries, languages, tools } = $derived(skills);
</script>

<Section className="flex items-center justify-center flex-col" id="skills">
	<SectionTitle>
		{$t('skills.title')}
	</SectionTitle>

	<div class="grid w-full gap-4 md:grid-cols-[repeat(auto-fit,minmax(26rem,1fr))]">
		<SkillBox title={$t('skills.frontend')} list={frontend.toSorted(sortStringsByKey('name'))} />
		<SkillBox title={$t('skills.backend')} list={backend.toSorted(sortStringsByKey('name'))} />
		<SkillBox title={$t('skills.css')} list={css.toSorted(sortStringsByKey('name'))} />
		<SkillBox title={$t('skills.libraries')} list={libraries.toSorted(sortStringsByKey('name'))} />
		<SkillBox title={$t('skills.languages')} list={languages.toSorted(sortStringsByKey('name'))} />
		<SkillBox title={$t('skills.tools')} list={tools.toSorted(sortStringsByKey('name'))} />
	</div>
</Section>
