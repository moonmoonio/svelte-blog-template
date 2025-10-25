import i18n from 'sveltekit-i18n';
import type { Config } from 'sveltekit-i18n';
import { Languages } from '$lib/enums';

// Import translations

// English
import enBlogPost from './en/blogPost.json';
import enBlogPostList from './en/blogPostList.json';
import enErrors from './en/errors.json';
import enFooter from './en/footer.json';
import enHome from './en/home.json';
import enNavBar from './en/navBar.json';
import enRss from './en/rss.json';
import enTags from './en/tags.json';
import enCategories from './en/categories.json';
import enSeries from './en/series.json';

// Spanish
import esBlogPost from './es/blogPost.json';
import esBlogPostList from './es/blogPostList.json';
import esErrors from './es/errors.json';
import esFooter from './es/footer.json';
import esHome from './es/home.json';
import esNavBar from './es/navBar.json';
import esRss from './es/rss.json';
import esTags from './es/tags.json';
import esCategories from './es/categories.json';
import esSeries from './es/series.json';

// Language agnostic
import generic from './generic.json';
import languages from './languages.json';

export const defaultLocale: string = Languages.EN;

export const config: Config = {
	initLocale: 'en',
	translations: {
		en: {
			blogPost: enBlogPost,
			blogPostList: enBlogPostList,
			errors: enErrors,
			footer: enFooter,
			home: enHome,
			navBar: enNavBar,
			rss: enRss,
			tags: enTags,
			categories: enCategories,
			series: enSeries,
			generic,
			languages
		},
		es: {
			blogPost: esBlogPost,
			blogPostList: esBlogPostList,
			errors: esErrors,
			footer: esFooter,
			home: esHome,
			navBar: esNavBar,
			rss: esRss,
			tags: esTags,
			categories: esCategories,
			series: esSeries,
			generic,
			languages
		}
	}
};

export const { loading, locale, locales, setLocale, setRoute, t, translations, l } = new i18n(
	config
);
