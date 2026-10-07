import { afterEach, describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import BackToTop from './back-to-top.svelte';

const realMatchMedia = window.matchMedia;
const realIntersectionObserver = window.IntersectionObserver;

function setScrollY(value: number) {
	Object.defineProperty(window, 'scrollY', { configurable: true, value });
	window.dispatchEvent(new Event('scroll'));
}

/** Swap in an IntersectionObserver whose callback we can fire by hand. */
function stubIntersectionObserver() {
	let callback: IntersectionObserverCallback = () => {};
	class Stub {
		constructor(cb: IntersectionObserverCallback) {
			callback = cb;
		}
		observe = vi.fn();
		unobserve = vi.fn();
		disconnect = vi.fn();
		takeRecords = vi.fn(() => []);
	}
	window.IntersectionObserver = Stub as unknown as typeof IntersectionObserver;
	return {
		setFooterInView: (isIntersecting: boolean) =>
			callback([{ isIntersecting } as IntersectionObserverEntry], {} as IntersectionObserver)
	};
}

afterEach(() => {
	window.matchMedia = realMatchMedia;
	window.IntersectionObserver = realIntersectionObserver;
	document.querySelector('footer')?.remove();
	setScrollY(0);
});

describe('shared/back-to-top', () => {
	it('stays out of the DOM while the page is at the top', () => {
		render(BackToTop);

		expect(screen.queryByRole('button', { name: /retour en haut/i })).not.toBeInTheDocument();
	});

	it('reveals the rocket once the page is scrolled past the threshold', async () => {
		render(BackToTop, { props: { showAfter: 300 } });

		setScrollY(400);

		expect(await screen.findByRole('button', { name: /retour en haut/i })).toBeInTheDocument();
	});

	it('explains what the rocket does in a tooltip', async () => {
		render(BackToTop, { props: { showAfter: 300 } });

		setScrollY(400);
		const button = await screen.findByRole('button', { name: /retour en haut/i });

		expect(button).toHaveTextContent(/retour en haut de la page/i);
	});

	it('flies the page back to the top when clicked', async () => {
		const user = userEvent.setup();
		render(BackToTop, { props: { showAfter: 300 } });

		setScrollY(400);
		await user.click(await screen.findByRole('button', { name: /retour en haut/i }));

		expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
	});

	it('skips the launch animation when the user prefers reduced motion', async () => {
		window.matchMedia = vi
			.fn()
			.mockReturnValue({ matches: true }) as unknown as typeof window.matchMedia;

		const user = userEvent.setup();
		render(BackToTop, { props: { showAfter: 300 } });

		setScrollY(400);
		await user.click(await screen.findByRole('button', { name: /retour en haut/i }));

		expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'auto' });
	});

	it('hides while the footer is in view so it never covers the social links', async () => {
		const io = stubIntersectionObserver();
		document.body.insertAdjacentHTML('beforeend', '<footer>footer</footer>');

		render(BackToTop, { props: { showAfter: 300 } });
		setScrollY(400);
		await screen.findByRole('button', { name: /retour en haut/i });

		io.setFooterInView(true);
		await waitFor(() =>
			expect(screen.queryByRole('button', { name: /retour en haut/i })).not.toBeInTheDocument()
		);

		io.setFooterInView(false);
		expect(await screen.findByRole('button', { name: /retour en haut/i })).toBeInTheDocument();
	});
});
