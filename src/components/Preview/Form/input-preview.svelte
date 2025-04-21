<script lang="ts">
	import type { Field } from '$lib/types/field';

	import MessageError from '../../Form/Messages/error.svelte';

	interface Props
		extends Omit<
				Partial<HTMLInputElement>,
				'type' | 'checked' | 'name' | 'disabled' | 'placeholder' | 'required'
			>,
			Field {
				isInvalid?: boolean;
				message?: string;
			}

	let { name, required, isInvalid, message }: Props = $props();
</script>

<input
  {name}
	{required}
	id={name}
	placeholder="Type your answer here..."
	class={[
		'px-0 text-3xl font-light',
		'text-[#4FB0AE] placeholder-[#d0e6e7]',
		'border-0 border-b border-[#d0e6e7]',
		'hover:border-b-2 hover:border-b-[#4FB0AE] focus:border-b-2 focus:border-[#4FB0AE]',
		'transition-colors duration-200 focus:outline-none',
		'focus:ring-0',
	]}
/>

{#if isInvalid}
	<MessageError>
		{message}
	</MessageError>
{/if}