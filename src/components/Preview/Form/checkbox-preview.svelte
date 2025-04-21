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

	let { name, required, isInvalid, message, placeholder, checked }: Props = $props();
</script>

<div class="flex gap-2 items-start">
  <input
    {name}
    {required}
    id={name}
    placeholder="Type your answer here..."
    class={[
      'p-3 cursor-pointer rounded',
      'border border-[#4FB0AE] hover:bg-[#4fb0ae5f]',
      'focus:ring-0 checked:bg-[#4FB0AE] checked:hover:bg-[#4FB0AE]',
    ]}
    type="checkbox"
    bind:checked
  />

  <label
    for={name}
    class="cursor-pointer font-extralight text-lg text-[#505050]"
  >
    {placeholder}
  </label>
</div>

{#if isInvalid}
	<MessageError>
		{message}
	</MessageError>
{/if}