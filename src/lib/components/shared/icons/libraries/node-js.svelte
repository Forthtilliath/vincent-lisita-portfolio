<script lang="ts">
	interface Props {
		size?: number;
		color?: string;
		class?: string | undefined;
	}

	let { size = 24, color = '#539E43', class: className = undefined }: Props = $props();

	let sizePx = $derived(`${size}px`);
</script>

<svg width={sizePx} height={sizePx} viewBox="0 0 24 24" class={className}>
	<path fill={color} d="M12 1.3 21.4 6.7v10.6L12 22.7 2.6 17.3V6.7L12 1.3Z" />
	<path
		fill="#fff"
		opacity="0.9"
		d="M12 6.6c1.9 0 3.1.5 3.1 1.8v.6h-1.7v-.5c0-.5-.4-.7-1.4-.7-1.1 0-1.5.3-1.5.8 0 .5.3.7 1.7.9 2.3.3 3.2.8 3.2 2.3 0 1.5-1.2 2.2-3.3 2.2-2.2 0-3.3-.7-3.3-2.1v-.6h1.7v.5c0 .6.5.9 1.6.9 1.1 0 1.6-.3 1.6-.9 0-.5-.3-.7-1.7-.9-2.2-.3-3.2-.9-3.2-2.3 0-1.4 1.2-2.1 3.2-2.1Z"
	/>
</svg>
