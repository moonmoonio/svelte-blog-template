import i18n from 'sveltekit-i18n';
import type { Config } from 'sveltekit-i18n';
import { Languages } from '$lib/enums';

// Import translations

// English
import enNavBar from './en/navBar.json';

// Spanish
import esNavBar from './es/navBar.json';

export const defaultLocale: string = Languages.EN;

export const config: Config = {
	initLocale: 'en',
	translations: {
		en: { navBar: enNavBar },
		es: { navBar: esNavBar }
	}
};

export const { loading, locale, locales, setLocale, setRoute, t, translations, l } = new i18n(
	config
);