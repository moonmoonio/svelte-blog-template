# svelte-blog-template

`svelte-blog-template` is a template for a simple static blog site. It included tagging functionality and internationalization support.

## Developing

Install dependencies with `npm install` (or `pnpm install` or `yarn`) and start the development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

To preview the production build, use `npm run preview`.

## Publishing

Publish the generated `build/` directory to your static site hosting service of preference.

## Making it your own

### Set up a website name

Modify `src/lib/translations/generic.json` and replace `"Test Site"` with your own website name.

### Update the about me page

Modify the files contained in `src/lib/blog/about/` (you may delete the translations for any language you do not wish to use). This project uses mdsvex which has support for front matter in its files, so make sure to update those fields too.

### Adding blog posts

Add any new blog post to its own directory (which will be used as the post's slug) under `src/lib/blog/posts/`. Name your post file with the language it's written in. E.g., en.svx for english posts, and es.svx for posts written in spanish.

The available front matter fields for blog posts are the following:

```
	publishDate: string | Date; // I tend to write them in the YYYY-MM-DD format.
	summary?: string; // Optional summary of the blog post, displayed in the list of all blog posts.
	tags?: string[]; // Optional array of tags associated with this post.
	title: string;
```

### Tags

Tags are automatically taken from all blog posts and put in a table to easily find posts that share tags.

### Adding or removing locales

Locale information is mostly contained within `src/lib/translations/`.

- Each language has its own directory containing all associated translation files for it under `src/lib/translations/[langugage]`.
- An enum containing all available locales is defined in `src/lib/enums.ts`. Update it to add or remove languages.
- Translations are registered in `src/lib/translations/index.ts`, so make sure to update that file to register or remove languages.
- I tried to keep translations of individual components in separate files, so the contents of `src/lib/translations/[langugage]` are translation files for each UI component of the site.

### Site config file

The file located at `src/lib/config/site.ts` sets up links to social media and it declares the copyright owner specified in the site's footer.

The available icons for the social media links are found in https://flowbite-svelte.com/icons/solid-icons

### Home page

I suggest you update the home page to make it your own thing :)
