<script lang="ts">
	interface Props {
		size?: number;
		color?: string;
		class?: string | undefined;
	}

	let { size = 24, color = '#FF4785', class: className = undefined }: Props = $props();

	let sizePx = $derived(`${size}px`);
</script>

<svg width={sizePx} height={sizePx} viewBox="0 0 24 24" class={className}>
	<path
		fill={color}
		d="M4.6 2.6 18.8 1.8a1.5 1.5 0 0 1 1.6 1.4l.8 17.4a1.5 1.5 0 0 1-1.4 1.6l-13.5.9A1.5 1.5 0 0 1 4.7 23L3.1 4.2a1.5 1.5 0 0 1 1.5-1.6Z"
	/>
	<path
		fill="#fff"
		d="M15.2 1.9 15.4 5l-1.5-1.1-1.3 1L12.5 2zM13.4 9.3c0 .6 4 .3 4.6-.2 0-3.6-1.9-5.5-5.4-5.5-3.6 0-5.5 2-5.5 4.9 0 5.1 6.9 5.2 6.9 8 0 .8-.4 1.2-1.2 1.2-1.1 0-1.6-.6-1.5-2.5 0-.4-4.2-.5-4.3 0-.3 4 2.2 5.2 5.9 5.2 3.5 0 6.3-1.9 6.3-5.3 0-5.5-7-5.4-7-8 0-1 .8-1.2 1.2-1.2.5 0 1.4.1 1.3 2.6Z"
	/>
</svg>
