import { Languages } from '$lib/enums';

export function match(param: string): boolean {
	const languages: Array<string> = Object.values(Languages);
	return languages.includes(param);
}
