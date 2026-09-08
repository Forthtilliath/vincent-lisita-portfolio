<script lang="ts">
	interface Props {
		size?: number;
		color?: string;
		class?: string | undefined;
	}

	let { size = 24, color = '#C5F74F', class: className = undefined }: Props = $props();

	let sizePx = $derived(`${size}px`);
</script>

<svg width={sizePx} height={sizePx} viewBox="0 0 24 24" class={className}>
	<g stroke={color} stroke-width="2.4" stroke-linecap="round">
		<line x1="4" y1="10.5" x2="10.5" y2="6.5" />
		<line x1="3" y1="17" x2="9.5" y2="13" />
		<line x1="13.5" y1="10.5" x2="20" y2="6.5" />
		<line x1="12.5" y1="17" x2="19" y2="13" />
	</g>
</svg>
