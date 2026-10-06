import { describe, expect, it } from 'vitest';
import { FACES, faceWordIndex, mod } from './dice-faces';

describe('mod', () => {
	it('stays positive for negative numbers', () => {
		expect(mod(-1, 4)).toBe(3);
		expect(mod(5, 4)).toBe(1);
	});
});

describe('faceWordIndex', () => {
	const visibleFace = (step: number) => mod(step, FACES.length);

	it('shows the word of the current step on the visible face', () => {
		for (let step = 0; step < 20; step++) {
			expect(faceWordIndex(visibleFace(step), step, 6)).toBe(step % 6);
		}
	});

	it('keeps the outgoing and incoming words in place during a flip', () => {
		for (let step = 1; step < 20; step++) {
			const outgoing = visibleFace(step - 1);
			expect(faceWordIndex(outgoing, step, 6)).toBe(faceWordIndex(outgoing, step - 1, 6));
			const incoming = visibleFace(step);
			expect(faceWordIndex(incoming, step, 6)).toBe(faceWordIndex(incoming, step - 1, 6));
		}
	});

	it('wraps around fewer words than faces', () => {
		expect([0, 1, 2, 3].map((face) => faceWordIndex(face, 0, 2))).toEqual([0, 1, 0, 1]);
	});
});
