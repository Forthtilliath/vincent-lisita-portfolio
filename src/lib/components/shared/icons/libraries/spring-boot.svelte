<script lang="ts">
	interface Props {
		size?: number;
		color?: string;
		class?: string | undefined;
	}

	let { size = 24, color = '#6DB33F', class: className = undefined }: Props = $props();

	let sizePx = $derived(`${size}px`);
</script>

<svg width={sizePx} height={sizePx} viewBox="0 0 24 24" class={className}>
	<path
		fill={color}
		d="M12 2a10 10 0 1 0 7.6 16.5l-1.5-1.3A8 8 0 1 1 12 4a8 8 0 0 1 5.7 2.4l1.4-1.4A10 10 0 0 0 12 2Z"
	/>
	<path fill={color} d="M4 20c1-6 5-10 16-12-3 9-8 12-14 12 3-1 6-3 8-6-3 2-6 4-10 6Z" />
	<circle cx="18" cy="6" r="1.6" fill={color} />
</svg>
