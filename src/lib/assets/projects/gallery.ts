// Screenshots live in one folder per project (`<slug>/01-name.webp`, `<slug>/02-name.webp`…):
// dropping a file in the folder is enough, its numeric prefix sets its place in the gallery.
const screenshots = import.meta.glob<string>('./*/*.webp', { eager: true, import: 'default' });

/** Screenshots of a project's folder, in file-name order. Throws on an unknown/empty folder so a
 * typo in a slug fails loudly instead of silently showing no gallery. */
export function gallery(slug: string): string[] {
	const images = Object.keys(screenshots)
		.filter((path) => path.startsWith(`./${slug}/`))
		.sort()
		.map((path) => screenshots[path]);
	if (images.length === 0) throw new Error(`No screenshots found for project "${slug}"`);
	return images;
}
