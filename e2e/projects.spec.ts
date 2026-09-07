import { expect, test, type Page } from '@playwright/test';
import { gotoHydrated } from './helpers';

const cards = (page: Page) =>
	page.locator('#projects article').filter({ has: page.getByRole('heading', { level: 5 }) });

const reactToggle = (page: Page) =>
	page.getByRole('radio', { name: 'Filtrer par React / Next.js', exact: true });

test.describe('projects section', () => {
	test('shows a paginated grid of project cards', async ({ page }) => {
		await gotoHydrated(page);
		await expect(cards(page).first()).toBeVisible();
		expect(await cards(page).count()).toBeGreaterThan(0);
		expect(await cards(page).count()).toBeLessThanOrEqual(6);
	});

	test('filters the grid when a category toggle is selected', async ({ page }) => {
		await gotoHydrated(page);

		const before = await cards(page).count();
		await reactToggle(page).click();
		await expect(reactToggle(page)).toHaveAttribute('aria-checked', 'true');

		const after = await cards(page).count();
		expect(after).toBeLessThanOrEqual(before);
		expect(after).toBeGreaterThan(0);
	});

	test('clears the filter when the active toggle is pressed again', async ({ page }) => {
		await gotoHydrated(page);

		await reactToggle(page).click();
		await expect(reactToggle(page)).toHaveAttribute('aria-checked', 'true');
		await reactToggle(page).click();
		await expect(reactToggle(page)).toHaveAttribute('aria-checked', 'false');
	});

	test('paginates to the next page of projects', async ({ page }) => {
		await gotoHydrated(page);

		const next = page.getByRole('button', { name: /go to next page/i });
		await expect(next).toBeVisible();

		const firstTitle = await cards(page).first().getByRole('heading', { level: 5 }).textContent();
		await next.click();

		await expect(cards(page).first().getByRole('heading', { level: 5 })).not.toHaveText(
			firstTitle ?? ''
		);
		expect(await cards(page).count()).toBeGreaterThan(0);
	});

	test('opens the project detail dialog and closes it again', async ({ page }) => {
		await gotoHydrated(page);

		await cards(page).first().getByRole('button', { name: 'Voir plus' }).click();
		const dialog = page.getByRole('dialog');
		await expect(dialog).toBeVisible();

		await dialog.getByRole('button', { name: 'Fermer' }).click();
		await expect(dialog).not.toBeVisible();
	});
});
