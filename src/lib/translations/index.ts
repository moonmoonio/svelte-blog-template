import i18n from 'sveltekit-i18n';
import type { Config } from 'sveltekit-i18n';
import { Languages } from '$lib/enums';

// Import translations

// English
import enNavBar from './en/navBar.json';
import enFooter from './en/footer.json';
import enBlogPostList from './en/blogPostList.json';
import enTagList from './en/tagList.json';

// Spanish
import esNavBar from './es/navBar.json';
import esFooter from './es/footer.json';
import esBlogPostList from './es/blogPostList.json';
import esTagList from './es/tagList.json';

// Language agnostic
import generic from './generic.json';
import languages from './languages.json';

export const defaultLocale: string = Languages.EN;

export const config: Config = {
	initLocale: 'en',
	translations: {
		en: {
			navBar: enNavBar,
			footer: enFooter,
			blogPostList: enBlogPostList,
			tagList: enTagList,
			generic,
			languages
		},
		es: {
			navBar: esNavBar,
			footer: esFooter,
			blogPostList: esBlogPostList,
			tagList: esTagList,
			generic,
			languages
		}
	}
};

export const { loading, locale, locales, setLocale, setRoute, t, translations, l } = new i18n(
	config
);
