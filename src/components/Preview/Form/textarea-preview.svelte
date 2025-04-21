<script lang="ts">
	import type { Field } from '$lib/types/field';
	import { resize } from '$lib/utils/resize.svelte';
	import MessageError from '../../Form/Messages/error.svelte';
	import MessageInfo from '../../Form/Messages/info.svelte';

	
	interface Props
		extends Omit<
				Partial<HTMLTextAreaElement>,
				'type' | 'checked' | 'name' | 'disabled' | 'placeholder' | 'required'
			>,
			Field {
				isInvalid?: boolean;
				message?: string;
			}

	let { name, required, isInvalid, message }: Props = $props();
</script>

<div class="w-full flex flex-col gap-2">
  <textarea
    id={name}
    placeholder="Type your answer here..."
    class={[
      'text-3xl px-0 font-light w-full',
      'text-[#4FB0AE] placeholder-[#d0e6e7]',
      'border-0 border-b border-[#d0e6e7]',
      'hover:border-b-2 hover:border-b-[#4FB0AE] focus:border-b-2 focus:border-[#4FB0AE]',
      'focus:outline-none transition-colors duration-200',
      'focus:ring-0 font-light resize-none overflow-hidden'
    ]}
    required={required}
    oninput={resize}
    rows="1"
  ></textarea>

  <MessageInfo>
    <span class="font-semibold">Enter</span> ↵ to make a line break
  </MessageInfo>
</div>


{#if isInvalid}
  <MessageError>
    {message}
  </MessageError>
{/if}