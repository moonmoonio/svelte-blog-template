export function match(param: string): boolean {
	return /^[\p{L}\p{Nd}_\- ]+$/u.test(param);
}
