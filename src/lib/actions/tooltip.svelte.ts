import tippy, { type Props } from "tippy.js";

export function tooltip(node: HTMLElement, fn: () => Partial<Props> | undefined) {
	$effect(() => {
		const tooltip = tippy(node, fn());

		return tooltip.destroy;
	});
}
