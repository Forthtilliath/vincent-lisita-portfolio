import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import projectList from './projects';
import { filterProjects } from './filter-projects';
import Projects from './projects.svelte';

const PER_PAGE = 6;

// The section hides `planned` projects unless running in dev; the test env is not dev.
const publicProjects = filterProjects(projectList);

const visibleHeadings = () =>
	screen
		.getAllByRole('heading', { level: 5 })
		.map((h) => h.textContent?.trim())
		.filter(Boolean);

describe('projects section', () => {
	it('paginates the public project list, six cards per page', () => {
		render(Projects);

		expect(visibleHeadings()).toHaveLength(Math.min(PER_PAGE, publicProjects.length));
	});

	it('narrows the list to a single category when a filter is toggled', async () => {
		const user = userEvent.setup();
		render(Projects);

		await user.click(screen.getByRole('radio', { name: 'Filtrer par React / Next.js' }));

		const expected = filterProjects(projectList, { category: 'react' })
			.slice(0, PER_PAGE)
			.map((p) => p.name.fr);

		expect(visibleHeadings()).toEqual(expect.arrayContaining(expected));
		expect(visibleHeadings().length).toBeLessThanOrEqual(expected.length);
	});

	it('restores the full list when the filter is cleared', async () => {
		const user = userEvent.setup();
		render(Projects);

		const react = screen.getByRole('radio', { name: 'Filtrer par React / Next.js' });
		await user.click(react);
		await user.click(react);

		expect(visibleHeadings()).toHaveLength(Math.min(PER_PAGE, publicProjects.length));
	});

	it('goes back to page 1 after changing the filter', async () => {
		const user = userEvent.setup();
		render(Projects);

		const nav = screen.queryByRole('navigation', { name: 'pagination' });
		if (nav) {
			await user.click(within(nav).getByRole('button', { name: /go to next page/i }));
		}

		await user.click(screen.getByRole('radio', { name: 'Filtrer par Svelte / Solid' }));

		const firstExpected = filterProjects(projectList, { category: 'svelte-solid' })[0]?.name.fr;
		expect(visibleHeadings()).toContain(firstExpected);
	});

	it('does not render planned projects', () => {
		render(Projects);

		const planned = projectList.filter((p) => p.status === 'planned').map((p) => p.name.fr);
		for (const name of planned) {
			expect(screen.queryByRole('heading', { level: 5, name })).not.toBeInTheDocument();
		}
	});
});
