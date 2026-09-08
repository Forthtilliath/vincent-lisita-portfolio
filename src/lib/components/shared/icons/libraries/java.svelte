<script lang="ts">
	interface Props {
		size?: number;
		color?: [string, string];
		class?: string | undefined;
	}

	let { size = 24, color = ['#E76F00', '#5382A1'], class: className = undefined }: Props = $props();

	let sizePx = $derived(`${size}px`);
	let [steam, cup] = $derived(Array.isArray(color) ? color : [color, color]);
</script>

<svg width={sizePx} height={sizePx} viewBox="0 0 24 24" class={className}>
	<g fill="none" stroke={steam} stroke-width="1.6" stroke-linecap="round">
		<path d="M10 2.5c-1.4 1.6-1.4 3 0 4.6" />
		<path d="M13.4 1.5c-1.4 1.6-1.4 3 0 4.6" />
	</g>
	<path
		fill={cup}
		d="M5 9h11v4.5A4.5 4.5 0 0 1 11.5 18h-2A4.5 4.5 0 0 1 5 13.5V9Zm11 1h1.3a2.3 2.3 0 0 1 0 4.6H16z"
	/>
	<path fill={steam} d="M4.5 20.2c3.4 1.2 9.6 1.2 13 0l-1 1.6c-2.8.8-8.2.8-11 0z" />
</svg>
