<script lang="ts">
	interface Props {
		size?: number;
		color?: string;
		class?: string | undefined;
	}

	let { size = 24, color = '#2D3B45', class: className = undefined }: Props = $props();

	let sizePx = $derived(`${size}px`);
</script>

<svg width={sizePx} height={sizePx} viewBox="0 0 24 24" class={className}>
	<circle cx="12" cy="12" r="10" fill={color} />
	<path
		fill="#ffffff"
		d="M16 5.2c-4.2-.3-7.7 3-8 7.4-.3 4.1 2.6 7.6 6.6 8.2-3-1.6-4.8-4.9-4.5-8.5.3-3.5 2.6-6.4 5.9-7.1z"
	/>
	<circle cx="15.4" cy="8.2" r="2.1" fill="#2EAD33" />
	<circle cx="14.2" cy="15.4" r="1.7" fill="#E2574C" />
</svg>
