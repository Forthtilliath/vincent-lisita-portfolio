/**
 * Transposes an array of words into a 2D array with each word's characters as elements.
 * Shorter words are centered with spaces (an odd remainder goes to the right).
 *
 * @param {string[]} arr - The array of words to be transposed
 * @return {string[][]} The transposed 2D array of characters
 */
export function transposeWords(arr: string[]): string[][] {
	const largerWord = Math.max(...arr.map((word) => word.length));
	const wordsWithSameLength = arr.map((word) =>
		word.padStart(word.length + Math.floor((largerWord - word.length) / 2)).padEnd(largerWord)
	);
	return Array.from({ length: largerWord }, (_, i) => wordsWithSameLength.map((row) => row[i]));
}
