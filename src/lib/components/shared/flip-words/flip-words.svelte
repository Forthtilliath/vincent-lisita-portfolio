<script lang="ts">
	import { onMount } from 'svelte';
	import FlipDice from './flip-dice.svelte';
	import { transposeWords } from './transposeWords';
	import type { FlipWord } from './dice-faces';
	import { cn } from '$lib/utils';

	interface Props {
		words: FlipWord[];
		/** Time between two words, in ms. */
		interval?: number;
		/** Delay between two neighbouring dice, in ms. */
		stagger?: number;
		/** Largest die size, in px. */
		maxSize?: number;
		className?: string;
	}

	let { words, interval = 2800, stagger = 90, maxSize = 100, className = '' }: Props = $props();

	let letters = $derived(transposeWords(words.map((word) => word.label)));
	let step = $state(0);

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		const id = setInterval(() => {
			if (!document.hidden) step++;
		}, interval);
		return () => clearInterval(id);
	});
</script>

<!--
@component
Spells each word with one letter per die, then flips the dice to the next word.
Any number of words is supported; shorter ones are centered between blank dice.
Dice shrink with the container width, up to `maxSize`.

```svelte
<FlipWords
	words={[
		{ label: 'react', color: '#149eca' },
		{ label: 'svelte', color: '#ff3e00' }
	]}
/>
```
-->
<div
	class={cn('flip-words', className)}
	style:--count={letters.length}
	style:--max-size="{maxSize}px"
>
	<span class="sr-only">{words.map((word) => word.label).join(', ')}</span>
	<div class="row" aria-hidden="true">
		{#each letters as dieLetters, nth (nth)}
			<FlipDice letters={dieLetters} {words} {step} delay={nth * stagger} />
		{/each}
	</div>
</div>

<style lang="scss">
	.flip-words {
		container-type: inline-size;
		width: 100%;
	}

	.row {
		// count × size + (count − 1) × gap fills the width, with gap = size / 8
		--size: min(var(--max-size), 100cqi / (var(--count) + (var(--count) - 1) / 8));
		display: flex;
		justify-content: center;
		gap: calc(var(--size) / 8);
		// Room for the corners while a die turns
		padding-block: calc(var(--size) / 4);
	}
</style>
