<script lang="ts">
	import Section from '$lib/components/shared/section.svelte';
	import SectionTitle from '$lib/components/shared/section-title.svelte';
	import Text3d from '$lib/components/shared/text-3d.svelte';
	import FlipWords from '$lib/components/shared/flip-words/flip-words.svelte';
	import type { FlipWord } from '$lib/components/shared/flip-words/dice-faces';
	import { t } from '$lib/translations';

	// Ordered so that close colours never follow each other, wrap-around included
	const stacks: FlipWord[] = [
		{ label: 'react', color: '#149eca' },
		{ label: 'svelte', color: '#ff3e00' },
		{ label: 'java', color: '#5382a1' },
		{ label: 'angular', color: '#dd0031' },
		{ label: 'next.js', color: '#000000' }
	];

	let clientWidth: number = $state(0);

	let depthMax: number = $derived(getDepth(clientWidth));

	function getDepth(width: number): number {
		if (width < 640) return 4;
		if (width < 768) return 6;
		return 8;
	}
</script>

<Section className="flex items-center justify-center flex-col" id="hero">
	<SectionTitle className="text-white text-center mb-6">
		<span class="text-4xl md:text-5xl">{$t('hero.name')}</span>
		<Text3d
			tag="span"
			className="text-3xl md:text-7xl block md:inline-block"
			color="#fff"
			shadowOptions={{ color: '#149eca', depth: depthMax }}
		>
			Vincent LISITA !
		</Text3d>
	</SectionTitle>

	<Text3d
		tag="h2"
		className="text-center font-extrabold tracking-tight text-[clamp(3rem,5vw,5rem)] md:text-6xl lg:text-7xl text-balance"
		color="#149eca"
		shadowOptions={{ color: '#fff', depth: depthMax, to: { luminosity: 30, saturate: 0 } }}
	>
		{$t('hero.job')}
	</Text3d>

	<div class="mt-6 w-full" bind:clientWidth>
		<FlipWords words={stacks} />
	</div>
</Section>
