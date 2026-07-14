import { toHast } from 'mdast-util-to-hast';
import { toHtml } from 'hast-util-to-html';

export default function content() {
	return async function transformer(tree, vFile) {
		const hast = toHast(tree, { allowDangerousHtml: true });
		const html = toHtml(hast, { allowDangerousHtml: true });
		vFile.data.fm.content = html;
	};
}
