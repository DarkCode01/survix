<script lang="ts">
	import type { Field } from '$lib/types/field';
	import MultiSelectButton from './multi-select-button.svelte';
	
	
	interface Props
		extends Omit<
				Partial<HTMLInputElement>,
				'type' | 'checked' | 'name' | 'disabled' | 'placeholder' | 'required'
			>,
			Field {
				isInvalid?: boolean;
				message?: string;
			}

	let { name, isInvalid, message, options }: Props = $props();
  let selected: Array<string> = $state([]);

  const onclick = (e: Event) => {
    const newValue = e.currentTarget.value as string;

    if (selected.includes(newValue)) {
      selected = selected.filter(value => value !== newValue);
      return;
    }

    selected.push(newValue);
  }
</script>

<div class="flex flex-col gap-2">
  {#each options as option, index (`${index}_${option}`)}
    <MultiSelectButton
      isSelected={selected.includes(option)}
      order={index + 1}
      value={option}
      {onclick}
    />
  {/each}
</div>