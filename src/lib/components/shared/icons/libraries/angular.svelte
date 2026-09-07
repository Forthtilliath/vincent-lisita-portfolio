<script lang="ts">
	interface Props {
		size?: number;
		color?: [string, string];
		class?: string | undefined;
	}

	let { size = 24, color = ['#DD0031', '#C3002F'], class: className = undefined }: Props = $props();

	let sizePx = $derived(`${size}px`);
	let [color1, color2] = $derived(Array.isArray(color) ? color : [color, color]);
</script>

<svg width={sizePx} height={sizePx} viewBox="0 0 256 272" class={className}>
	<path fill={color1} d="M128 0 8.2 42.7l18.3 158.6L128 272l101.5-70.7 18.3-158.6z" />
	<path fill={color2} d="M128 0v30.2-.1V272l101.5-70.7 18.3-158.6z" />
	<path fill="#FFF" d="M128 30.1 52.7 199h28.1l15.1-37.8h64l15.1 37.8h28.1zm22 108h-44l22-52.9z" />
</svg>
