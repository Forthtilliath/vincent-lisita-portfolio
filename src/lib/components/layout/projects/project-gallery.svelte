<script lang="ts">
	import ChevronLeft from '@lucide/svelte/icons/chevron-left';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import { t } from '$lib/translations';

	interface Props {
		images: string[];
		/** Project name, used to describe each screenshot */
		name: string;
	}

	let { images, name }: Props = $props();

	let current = $state(0);
	let total = $derived(images.length);

	function go(index: number) {
		// Wraps around both ends so prev/next never dead-end.
		current = (index + total) % total;
	}

	function onkeydown(event: KeyboardEvent) {
		if (event.key === 'ArrowLeft') go(current - 1);
		else if (event.key === 'ArrowRight') go(current + 1);
		else return;
		event.preventDefault();
	}

	const navButton =
		'focus-visible:ring-app-blue absolute top-1/2 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80 focus-visible:ring-2 focus-visible:outline-none';
</script>

<!-- Focusable so the arrow keys can browse screenshots (carousel pattern). -->
<!-- min-w-0: as a grid item of the dialog, the gallery would otherwise grow to the
     thumbnails' full width instead of letting their row scroll horizontally. -->
<!-- svelte-ignore a11y_no_noninteractive_tabindex, a11y_no_noninteractive_element_interactions -->
<section
	class="flex min-w-0 flex-col gap-2"
	aria-roledescription="carousel"
	aria-label={$t('projects.gallery', { name })}
	tabindex={total > 1 ? 0 : undefined}
	{onkeydown}
>
	<div class="relative">
		<img
			src={images[current]}
			alt={total > 1 ? $t('projects.screenshot', { name, index: current + 1, total }) : name}
			width="1280"
			height="720"
			loading="lazy"
			class="aspect-video w-full rounded-lg object-cover"
		/>
		{#if total > 1}
			<button
				type="button"
				class="{navButton} left-2"
				aria-label={$t('projects.previousScreenshot')}
				onclick={() => go(current - 1)}
			>
				<ChevronLeft class="size-5" />
			</button>
			<button
				type="button"
				class="{navButton} right-2"
				aria-label={$t('projects.nextScreenshot')}
				onclick={() => go(current + 1)}
			>
				<ChevronRight class="size-5" />
			</button>
		{/if}
	</div>

	{#if total > 1}
		<div
			class="flex [scrollbar-width:thin] [scrollbar-color:var(--color-app-blue)_transparent] gap-2 overflow-x-auto p-0.5 pb-2"
		>
			{#each images as src, index (src)}
				<button
					type="button"
					class="focus-visible:ring-app-blue w-20 shrink-0 cursor-pointer overflow-hidden rounded-md ring-2 transition focus-visible:outline-none {index ===
					current
						? 'ring-app-blue'
						: 'opacity-60 ring-transparent hover:opacity-100'}"
					aria-label={$t('projects.showScreenshot', { index: index + 1, total })}
					aria-current={index === current}
					onclick={() => go(index)}
				>
					<img {src} alt="" loading="lazy" class="aspect-video w-full object-cover" />
				</button>
			{/each}
		</div>
	{/if}
</section>
