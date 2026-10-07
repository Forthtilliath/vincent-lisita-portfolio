<script lang="ts">
	import { onMount } from 'svelte';
	import RocketIcon from '@lucide/svelte/icons/rocket';
	import { t } from '$lib/translations';

	interface Props {
		/** Reveal the rocket once the page is scrolled at least this far (px). */
		showAfter?: number;
	}

	let { showAfter = 600 }: Props = $props();

	let pastThreshold = $state(false);
	let footerInView = $state(false);
	let launching = $state(false);

	// Keep the rocket up while it launches, but otherwise stay clear of the footer
	// so it never sits on top of the social links.
	let visible = $derived(launching || (pastThreshold && !footerInView));

	onMount(() => {
		let frame = 0;

		const read = () => {
			frame = 0;
			pastThreshold = window.scrollY > showAfter;
		};
		const onScroll = () => {
			if (frame === 0) frame = requestAnimationFrame(read);
		};

		read();
		window.addEventListener('scroll', onScroll, { passive: true });

		const footer = document.querySelector('footer');
		const observer = footer
			? new IntersectionObserver(([entry]) => (footerInView = entry.isIntersecting), {
					rootMargin: '0px 0px 80px 0px'
				})
			: null;
		observer?.observe(footer as Element);

		return () => {
			window.removeEventListener('scroll', onScroll);
			observer?.disconnect();
			if (frame !== 0) cancelAnimationFrame(frame);
		};
	});

	const prefersReducedMotion = () =>
		typeof window.matchMedia === 'function' &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	function launch() {
		if (launching) return;

		if (prefersReducedMotion()) {
			window.scrollTo({ top: 0, behavior: 'auto' });
			return;
		}

		launching = true;
		window.scrollTo({ top: 0, behavior: 'smooth' });

		// Let the rocket clear the viewport before it can reappear.
		window.setTimeout(() => (launching = false), 850);
	}
</script>

{#if visible}
	<button
		type="button"
		aria-label={$t('ui.backToTop')}
		onclick={launch}
		class={[
			'rocket fixed right-5 bottom-5 z-30 grid size-12 place-items-center rounded-full',
			'border-app-blue/40 bg-app-black/70 text-app-blue shadow-app-blue/20 border shadow-lg backdrop-blur-sm',
			'transition-[transform,color,border-color] duration-300 ease-out',
			'hover:border-app-blue hover:-translate-y-1 hover:text-white',
			'focus-visible:outline-app-blue focus-visible:outline-2 focus-visible:outline-offset-2',
			launching && 'is-launching'
		]}
	>
		<span
			class={[
				'tooltip pointer-events-none absolute top-1/2 right-full mr-3 -translate-y-1/2 rounded-md px-2.5 py-1',
				'border-app-blue/40 bg-app-black/90 border text-xs whitespace-nowrap text-white shadow-lg'
			]}
			aria-hidden="true"
		>
			{$t('ui.backToTop')}
		</span>
		<span class="flame" aria-hidden="true"></span>
		<span class="icon">
			<RocketIcon class="size-5" />
		</span>
	</button>
{/if}

<style>
	.rocket {
		animation: enter 0.25s ease-out;
	}

	.icon {
		display: grid;
		place-items: center;
		rotate: -45deg;
		animation: bob 3.5s ease-in-out infinite;
	}

	.rocket:hover .icon {
		animation-play-state: paused;
	}

	.tooltip {
		opacity: 0;
		transition: opacity 150ms ease-out;
	}

	.rocket:hover .tooltip,
	.rocket:focus-visible .tooltip {
		opacity: 1;
	}

	.is-launching .tooltip {
		display: none;
	}

	.flame {
		position: absolute;
		bottom: 0.4rem;
		left: 50%;
		width: 7px;
		height: 10px;
		translate: -50% 0;
		border-radius: 50% 50% 60% 60%;
		background: linear-gradient(#fff, #ffcf6b 35%, #ff7a1a 70%, transparent);
		opacity: 0;
		filter: blur(0.5px);
	}

	.is-launching {
		animation: launch 0.85s cubic-bezier(0.45, 0, 0.7, 0) forwards;
		pointer-events: none;
	}

	.is-launching .flame {
		opacity: 1;
		animation: flare 0.1s linear infinite alternate;
	}

	@keyframes enter {
		from {
			transform: translateY(20px);
			opacity: 0;
		}
	}

	@keyframes bob {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-3px);
		}
	}

	@keyframes launch {
		0% {
			transform: translateY(0) scale(1);
		}
		12% {
			transform: translateY(4px) scale(0.94);
		}
		100% {
			transform: translateY(-135vh) scale(0.7);
			opacity: 0;
		}
	}

	@keyframes flare {
		from {
			height: 9px;
			opacity: 0.75;
		}
		to {
			height: 16px;
			opacity: 1;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.rocket,
		.icon,
		.is-launching,
		.is-launching .flame {
			animation: none;
		}
	}
</style>
