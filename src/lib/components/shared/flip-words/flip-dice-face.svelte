<script lang="ts">
	import type { Face } from './dice-faces';

	interface Props {
		face: Face;
		letter: string;
		color: string;
	}

	let { face, letter, color }: Props = $props();
</script>

<div class="face {face}" style:--bg-color={color}>
	<span>{letter}</span>
</div>

<style lang="scss">
	.face {
		position: absolute;
		inset: 0;
		display: grid;
		place-items: center;
		border: 2px solid #fff;
		border-radius: 0.25rem;
		background-color: var(--bg-color);
		backface-visibility: hidden;

		&.front {
			transform: translateZ(calc(var(--size) / 2));
		}

		&.top {
			transform: translateY(calc(var(--size) / 2)) rotateX(-90deg);
		}

		&.back {
			transform: translateZ(calc(var(--size) / -2)) rotateY(180deg) rotateZ(180deg);
		}

		&.bottom {
			transform: translateY(calc(var(--size) / -2)) rotateX(90deg);
		}
	}

	span {
		font-size: calc(var(--size) * 0.7);
		line-height: 1;
		text-transform: uppercase;
		color: #fff;
		// Capitals sit low in the line box
		transform: translateY(-0.05em);
		font-family:
			'Overpass',
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Fira Sans',
			'Droid Sans',
			'Helvetica Neue',
			sans-serif;
	}
</style>
