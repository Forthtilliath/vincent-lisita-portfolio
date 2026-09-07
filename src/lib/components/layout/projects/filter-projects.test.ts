import { describe, expect, it } from 'vitest';
import { filterProjects } from './filter-projects';
import type { Project, ProjectCategory, ProjectStatus } from './projects';

function makeProject(
	name: string,
	category: ProjectCategory,
	status: ProjectStatus = 'done'
): Project {
	return {
		name: { fr: name, en: name },
		description: { fr: '', en: '' },
		tags: [],
		repo: `https://github.com/Forthtilliath/${name}`,
		status,
		category
	};
}

const reactDone = makeProject('react-done', 'react');
const reactPlanned = makeProject('react-planned', 'react', 'planned');
const svelteWip = makeProject('svelte-wip', 'svelte-solid', 'wip');
const libsDone = makeProject('libs-done', 'libs');

const allProjects = [reactDone, reactPlanned, svelteWip, libsDone];

describe('filterProjects', () => {
	it('returns every non-planned project when no category is selected', () => {
		expect(filterProjects(allProjects)).toEqual([reactDone, svelteWip, libsDone]);
	});

	it('keeps only the projects of the selected category', () => {
		expect(filterProjects(allProjects, { category: 'react' })).toEqual([reactDone]);
	});

	it('includes planned projects when includePlanned is set', () => {
		expect(filterProjects(allProjects, { includePlanned: true })).toEqual(allProjects);
	});

	it('combines category and planned filters', () => {
		expect(filterProjects(allProjects, { category: 'react', includePlanned: true })).toEqual([
			reactDone,
			reactPlanned
		]);
	});

	it('returns an empty array when no project matches the category', () => {
		expect(filterProjects(allProjects, { category: 'angular-java' })).toEqual([]);
	});

	it('does not mutate the original array', () => {
		const copy = [...allProjects];
		filterProjects(allProjects, { category: 'react' });
		expect(allProjects).toEqual(copy);
	});

	it('returns an empty array when there are no projects', () => {
		expect(filterProjects([], { category: 'react' })).toEqual([]);
	});

	it('treats an empty category string as "all categories"', () => {
		expect(filterProjects(allProjects, { category: '' })).toEqual([reactDone, svelteWip, libsDone]);
	});
});
