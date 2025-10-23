import { Groupings } from '$lib/enums';

export function match(param: string): boolean {
	param = param.toLocaleLowerCase();
	return Object.values(Groupings).reduce((accum, curr) => curr === param || accum, false);
}
