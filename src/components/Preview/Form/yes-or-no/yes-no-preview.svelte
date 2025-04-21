<script lang="ts">
	import type { Field } from '$lib/types/field';
	import YesNoButton from './yes-no-button.svelte';

	
	interface Props
		extends Omit<
				Partial<HTMLInputElement>,
				'type' | 'checked' | 'name' | 'disabled' | 'placeholder' | 'required'
			>,
			Field {
				isInvalid?: boolean;
				message?: string;
			}

	let { name, isInvalid, message }: Props = $props();
  let selected = $state('');

  const onclick = (e: Event) => {
    const newValue = e.currentTarget.value;

    if (newValue === selected) {
      selected = ''
      return;
    };
    
    selected = newValue;
  }
</script>

<div class="flex flex-col gap-2 w-full" role="radiogroup">
  <YesNoButton
    {name}
    isSelected={selected === 'yes'}
    {onclick}
    value="yes"
  >
    Yes
  </YesNoButton>

  <YesNoButton
    {name}
    isSelected={selected === 'no'}
    {onclick}
    value="no"
  >
    No
  </YesNoButton>
</div>

{#if isInvalid}
	<MessageError>
		{message}
	</MessageError>
{/if}