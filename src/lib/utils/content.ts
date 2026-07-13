import { toHast } from 'mdast-util-to-hast';
import { toHtml } from 'hast-util-to-html';

export default function content() {
	return async function transformer(tree, vFile) {
		const hast = toHast(tree);
		const html = toHtml(hast);
		vFile.data.fm.content = html;
	};
}
