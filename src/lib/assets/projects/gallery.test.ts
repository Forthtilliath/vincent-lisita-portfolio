import { describe, expect, it } from 'vitest';
import { gallery } from './gallery';

describe('gallery', () => {
	it("returns a project's screenshots in file-name order", () => {
		const images = gallery('forme');

		expect(images).toHaveLength(8);
		expect(images[0]).toContain('01-marbre');
		expect(images.at(-1)).toContain('08-mobile');
	});

	it('only returns the screenshots of the requested project', () => {
		expect(gallery('forme').every((src) => src.includes('/forme/'))).toBe(true);
	});

	it('throws on an unknown project so a typo cannot hide a gallery', () => {
		expect(() => gallery('does-not-exist')).toThrow(/does-not-exist/);
	});
});
