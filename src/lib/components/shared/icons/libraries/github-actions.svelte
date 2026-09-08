<script lang="ts">
	interface Props {
		size?: number;
		color?: string;
		class?: string | undefined;
	}

	let { size = 24, color = '#2088FF', class: className = undefined }: Props = $props();

	let sizePx = $derived(`${size}px`);
</script>

<svg width={sizePx} height={sizePx} viewBox="0 0 24 24" class={className}>
	<path
		fill="none"
		stroke={color}
		stroke-width="2.4"
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3M17.3 3.3v3.5h-3.5"
	/>
	<circle cx="12" cy="12" r="2.7" fill={color} />
</svg>
