import i18n from 'sveltekit-i18n';
import type { Config } from 'sveltekit-i18n';
import { Languages } from '$lib/enums';

// Import translations

// English
import enBlogPostList from './en/blogPostList.json';
import enFooter from './en/footer.json';
import enNavBar from './en/navBar.json';
import enTagList from './en/tagList.json';
import enTagsTable from './en/tagsTable.json';
import enTagPosts from './en/tagPosts.json';

// Spanish
import esBlogPostList from './es/blogPostList.json';
import esFooter from './es/footer.json';
import esNavBar from './es/navBar.json';
import esTagList from './es/tagList.json';
import esTagsTable from './es/tagsTable.json';
import esTagPosts from './es/tagPosts.json';

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
			tagsTable: enTagsTable,
			tagPosts: enTagPosts,
			generic,
			languages
		},
		es: {
			navBar: esNavBar,
			footer: esFooter,
			blogPostList: esBlogPostList,
			tagList: esTagList,
			tagsTable: esTagsTable,
			tagPosts: esTagPosts,
			generic,
			languages
		}
	}
};

export const { loading, locale, locales, setLocale, setRoute, t, translations, l } = new i18n(
	config
);
