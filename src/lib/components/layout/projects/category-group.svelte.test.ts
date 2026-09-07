import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { projectCategories } from './project-categories';
import CategoryGroup from './category-group.svelte';

const labels = projectCategories.map((c) => `Filtrer par ${c.label.fr}`);

describe('category-group', () => {
	it('renders one toggle per project category', () => {
		render(CategoryGroup);

		for (const label of labels) {
			expect(screen.getByRole('radio', { name: label })).toBeInTheDocument();
		}
	});

	it('starts with no category selected', () => {
		render(CategoryGroup);

		for (const label of labels) {
			expect(screen.getByRole('radio', { name: label })).toHaveAttribute('aria-checked', 'false');
		}
	});

	it('selects a category on click', async () => {
		const user = userEvent.setup();
		render(CategoryGroup);

		const react = screen.getByRole('radio', { name: 'Filtrer par React / Next.js' });
		await user.click(react);

		expect(react).toHaveAttribute('aria-checked', 'true');
	});

	it('is single-select: choosing another category clears the previous one', async () => {
		const user = userEvent.setup();
		render(CategoryGroup);

		const react = screen.getByRole('radio', { name: 'Filtrer par React / Next.js' });
		const svelte = screen.getByRole('radio', { name: 'Filtrer par Svelte / Solid' });
		await user.click(react);
		await user.click(svelte);

		expect(react).toHaveAttribute('aria-checked', 'false');
		expect(svelte).toHaveAttribute('aria-checked', 'true');
	});

	it('toggles off when the active category is clicked again', async () => {
		const user = userEvent.setup();
		render(CategoryGroup);

		const react = screen.getByRole('radio', { name: 'Filtrer par React / Next.js' });
		await user.click(react);
		await user.click(react);

		expect(react).toHaveAttribute('aria-checked', 'false');
	});
});
