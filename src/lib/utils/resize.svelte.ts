export const resize = (event: Event) => {
	const node = event.currentTarget as HTMLTextAreaElement;

	node.style.height = 'auto';
	node.style.height = node.scrollHeight + 'px';
};