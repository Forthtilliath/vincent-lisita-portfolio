export type FlipWord = {
	label: string;
	/** Background of the die faces while this word is shown. */
	color: string;
};

/** Faces a die turns through when rotating around its X axis, in rotation order. */
export const FACES = ['front', 'top', 'back', 'bottom'] as const;
export type Face = (typeof FACES)[number];

/** Positive modulo: `mod(-1, 4) === 3`. */
export function mod(n: number, m: number): number {
	return ((n % m) + m) % m;
}

/**
 * Index of the word shown by a die face at a given step.
 *
 * Face `k` faces the viewer when `step ≡ k (mod 4)`. It holds the word of the step in
 * `[step - 1, step + 2]` sharing that residue: the outgoing and incoming faces keep their
 * word during the flip while the face hidden at the back is refilled, which lets a
 * four-faced die cycle through any number of words.
 */
export function faceWordIndex(face: number, step: number, wordCount: number): number {
	const faceStep = step - 1 + mod(face - step + 1, FACES.length);
	return mod(faceStep, wordCount);
}
