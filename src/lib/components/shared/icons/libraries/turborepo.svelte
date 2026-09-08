<script lang="ts">
	interface Props {
		size?: number;
		color?: [string, string];
		class?: string | undefined;
	}

	let { size = 24, color = ['#0096FF', '#FF1E56'], class: className = undefined }: Props = $props();

	let sizePx = $derived(`${size}px`);
	let [from, to] = $derived(Array.isArray(color) ? color : [color, color]);
	let gradientId = `turbo-${Math.random().toString(36).slice(2, 9)}`;
</script>

<svg width={sizePx} height={sizePx} viewBox="0 0 24 24" class={className}>
	<defs>
		<linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
			<stop offset="0" stop-color={from} />
			<stop offset="1" stop-color={to} />
		</linearGradient>
	</defs>
	<circle cx="12" cy="12" r="9" fill="none" stroke={`url(#${gradientId})`} stroke-width="2.6" />
	<circle cx="12" cy="12" r="3.4" fill={`url(#${gradientId})`} />
</svg>
