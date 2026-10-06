import { describe, expect, it } from 'vitest';
import { transposeWords } from './transposeWords';

describe('transposeWords', () => {
	it('transposes words of equal length', () => {
		expect(transposeWords(['abc', 'def'])).toEqual([
			['a', 'd'],
			['b', 'e'],
			['c', 'f']
		]);
	});

	it('centers shorter words with spaces to match the longest word', () => {
		expect(transposeWords(['a', 'bcd'])).toEqual([
			[' ', 'b'],
			['a', 'c'],
			[' ', 'd']
		]);
	});

	it('puts the odd padding space on the right', () => {
		expect(transposeWords(['ab', 'cdefg']).map((letters) => letters[0])).toEqual([
			' ',
			'a',
			'b',
			' ',
			' '
		]);
	});

	it('handles a single word', () => {
		expect(transposeWords(['hi'])).toEqual([['h'], ['i']]);
	});
});
