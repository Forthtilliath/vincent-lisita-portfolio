import i18n, { type Parser } from 'sveltekit-i18n';
import { browser } from '$app/environment';
import kleur from 'kleur';
import lang from './lang.json';

type TradArguments = {
	lang: string;
};

// https://github.com/sveltekit-i18n/lib/tree/master/examples/one-page/src
export const config: import('sveltekit-i18n').Config<TradArguments> = {
	translations: {
		en: { lang },
		fr: { lang }
	},
	loaders: [
		{
			locale: 'en',
			key: '',
			loader: async () => (await import('./en/content.json')).default
		},
		{
			locale: 'fr',
			key: '',
			loader: async () => (await import('./fr/content.json')).default
		}
	]
};

type Params = {
	name?: string;
	lang?: string;
	index?: number;
	total?: number;
};

export const { t, loading, locales, locale, loadTranslations } = new i18n<Parser.Params<Params>>(
	config
);

export type Language = 'en' | 'fr';

const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/** Change la langue active et mémorise le choix dans un cookie (survit au reload). */
export const setLocale = (lang: Language) => {
	locale.set(lang);

	if (browser) {
		document.cookie = `locale=${lang};path=/;max-age=${LOCALE_COOKIE_MAX_AGE};samesite=lax`;
		document.documentElement.lang = lang;
	}
};

// Log serveur uniquement : `kleur` colore avec des séquences ANSI, illisibles
// dans la console du navigateur, et ce message n'a pas d'intérêt côté client.
if (!browser) {
	loading.subscribe(
		($loading) =>
			$loading &&
			console.log(kleur.yellow().bold('[i18n] ') + 'Loading translations for the main instance...')
	);
}
