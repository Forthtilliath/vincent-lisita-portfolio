import { afterEach, describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import ProjectCard from './project-card.svelte';
import type { Project } from './projects';

const baseProject: Project = {
	name: { fr: 'Mon Projet', en: 'My Project' },
	description: { fr: 'Une description française.', en: 'An English description.' },
	image: '/img/demo.webp',
	tags: ['React', 'Tailwind', 'Typescript'],
	url: 'https://example.com',
	repo: 'https://github.com/Forthtilliath/demo',
	status: 'done',
	category: 'react'
};

function renderCard(overrides: Partial<Project> = {}) {
	return render(ProjectCard, { props: { ...baseProject, ...overrides } });
}

// bits-ui locks outside interaction by setting `pointer-events: none` on <body>
// while a dialog is open; unmount during test teardown does not always flush that,
// so clear it between tests to keep later clicks from being swallowed.
afterEach(() => {
	document.body.style.pointerEvents = '';
});

describe('project-card', () => {
	it('shows the localized name and description (French by default)', () => {
		renderCard();

		expect(screen.getByRole('heading', { name: 'Mon Projet' })).toBeInTheDocument();
		expect(screen.getByText('Une description française.')).toBeInTheDocument();
	});

	it('renders every tag of the project', () => {
		renderCard({ tags: ['React', 'Zod', 'Vitest'] });

		for (const tag of ['React', 'Zod', 'Vitest']) {
			expect(screen.getByText(tag)).toBeInTheDocument();
		}
	});

	it('caps the visible tags at 7 and shows a "+N" overflow badge', () => {
		renderCard({
			tags: [
				'React',
				'Tailwind',
				'Typescript',
				'Zod',
				'Vitest',
				'Zustand',
				'Vite',
				'GraphQL',
				'SQL'
			]
		});

		expect(screen.getByText('+2')).toBeInTheDocument();
		expect(screen.queryByText('SQL')).not.toBeInTheDocument();
	});

	it('links the repo button to the GitHub repository', () => {
		renderCard();

		const repoLinks = screen.getAllByRole('link', { name: 'Voir le repo' });
		expect(repoLinks[0]).toHaveAttribute('href', 'https://github.com/Forthtilliath/demo');
	});

	it('opens the detail dialog when the card surface is clicked', async () => {
		const user = userEvent.setup();
		renderCard();

		await user.click(screen.getByRole('button', { name: /Ouvrir le projet : Mon Projet/ }));

		expect(await screen.findByRole('dialog')).toBeInTheDocument();
	});

	it('exposes the live project link inside the dialog', async () => {
		const user = userEvent.setup();
		renderCard();

		await user.click(screen.getByRole('button', { name: 'Voir plus' }));

		const dialog = await screen.findByRole('dialog');
		const liveLink = within(dialog).getByRole('link', { name: 'Voir en ligne' });
		expect(liveLink).toHaveAttribute('href', 'https://example.com');
		expect(liveLink).toHaveAttribute('target', '_blank');
		expect(liveLink).toHaveAttribute('rel', expect.stringContaining('noopener'));
	});

	it('opens a dialog with the full project details, image described by its name', async () => {
		const user = userEvent.setup();
		renderCard();

		await user.click(screen.getByRole('button', { name: 'Voir plus' }));

		const dialog = await screen.findByRole('dialog');
		expect(within(dialog).getByRole('heading', { name: 'Mon Projet' })).toBeInTheDocument();
		expect(within(dialog).getByRole('img')).toHaveAccessibleName('Mon Projet');
	});

	it('does not render a live link in the dialog when the project has no url', async () => {
		const user = userEvent.setup();
		renderCard({ url: undefined });

		await user.click(screen.getByRole('button', { name: 'Voir plus' }));

		const dialog = await screen.findByRole('dialog');
		expect(within(dialog).queryByRole('link', { name: 'Voir en ligne' })).not.toBeInTheDocument();
	});

	it('shows the status badge with the localized label', () => {
		renderCard({ status: 'wip' });

		expect(screen.getByText('En cours')).toBeInTheDocument();
	});

	it('does not render a repo button when the project has no repo', () => {
		renderCard({ repo: undefined });

		expect(screen.queryByRole('link', { name: 'Voir le repo' })).not.toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Voir plus' })).toBeInTheDocument();
	});
});
