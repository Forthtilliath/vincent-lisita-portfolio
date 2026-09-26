import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import ProjectGallery from './project-gallery.svelte';

const images = ['/img/one.webp', '/img/two.webp', '/img/three.webp'];

function renderGallery(list = images) {
	return render(ProjectGallery, { props: { images: list, name: 'Mon Projet' } });
}

function mainImage() {
	return screen.getByRole('img', { name: /Mon Projet/ });
}

describe('project-gallery', () => {
	it('shows the first screenshot, described by its position', () => {
		renderGallery();

		expect(mainImage()).toHaveAttribute('src', '/img/one.webp');
		expect(mainImage()).toHaveAccessibleName('Mon Projet, capture 1 sur 3');
	});

	it('moves forward and backward, wrapping around both ends', async () => {
		const user = userEvent.setup();
		renderGallery();

		await user.click(screen.getByRole('button', { name: 'Capture précédente' }));
		expect(mainImage()).toHaveAttribute('src', '/img/three.webp');

		await user.click(screen.getByRole('button', { name: 'Capture suivante' }));
		expect(mainImage()).toHaveAttribute('src', '/img/one.webp');
	});

	it('jumps to a screenshot from its thumbnail and marks it as current', async () => {
		const user = userEvent.setup();
		renderGallery();

		const thumb = screen.getByRole('button', { name: 'Afficher la capture 2 sur 3' });
		await user.click(thumb);

		expect(mainImage()).toHaveAttribute('src', '/img/two.webp');
		expect(thumb).toHaveAttribute('aria-current', 'true');
	});

	it('navigates with the arrow keys', async () => {
		const user = userEvent.setup();
		renderGallery();

		screen.getByRole('region', { name: "Captures d'écran du projet Mon Projet" }).focus();
		await user.keyboard('{ArrowRight}{ArrowRight}');
		expect(mainImage()).toHaveAttribute('src', '/img/three.webp');

		await user.keyboard('{ArrowLeft}');
		expect(mainImage()).toHaveAttribute('src', '/img/two.webp');
	});

	it('hides the navigation controls for a single screenshot', () => {
		renderGallery(['/img/one.webp']);

		expect(mainImage()).toHaveAccessibleName('Mon Projet');
		expect(screen.queryByRole('button')).not.toBeInTheDocument();
	});
});
