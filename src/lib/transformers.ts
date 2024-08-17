export function hrefConverter(href: string, locale: string): string {
	/**
	 * Returns an href converted from a generic reference to one
	 * with the locale provided prepended.
	 *
	 * @param href - The href to modify
	 * @param locale - The locale to prepend to the href
	 * @returns Modified href with locale prepended to it
	 */
	if (!href.startsWith(`/${locale}`)) {
		href = `/${locale}${href}`;
	}
	return href;
}
