<!-- https://codepen.io/pawelmalak/pen/KRKxdJ?editors=0110 -->
<script lang="ts">
	import FlipDiceFace from './flip-dice-face.svelte';
	import { FACES, faceWordIndex, type FlipWord } from './dice-faces';

	interface Props {
		/** One letter per word, in the same order as `words`. */
		letters: string[];
		words: FlipWord[];
		step: number;
		/** Delay before this die flips, in ms. */
		delay: number;
	}

	let { letters, words, step, delay }: Props = $props();

	let faces = $derived(
		FACES.map((face, k) => {
			const index = faceWordIndex(k, step, words.length);
			return { face, letter: letters[index], color: words[index].color };
		})
	);
</script>

<div class="dice-wrapper">
	<div class="dice" style:transform="rotateX({step * 90}deg)" style:transition-delay="{delay}ms">
		{#each faces as { face, letter, color } (face)}
			<FlipDiceFace {face} {letter} {color} />
		{/each}
	</div>
</div>

<style lang="scss">
	.dice-wrapper {
		width: var(--size);
		height: var(--size);
		perspective: calc(var(--size) * 20);
		flex-shrink: 0;
	}

	.dice {
		position: relative;
		width: 100%;
		height: 100%;
		transform-style: preserve-3d;
		transition: transform 0.7s cubic-bezier(0.65, 0, 0.35, 1);
		will-change: transform;

		@media (prefers-reduced-motion: reduce) {
			transition: none;
		}
	}
</style>
