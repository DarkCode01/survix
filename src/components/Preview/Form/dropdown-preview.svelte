<script lang="ts">
	import { clickOutside } from '$lib/actions/click-outside.svelte';
	import type { Field } from '$lib/types/field';
	import { slide } from 'svelte/transition';
	
  import { triggerShake } from '$lib/stores/store.svelte';
  import IconDown from '~icons/mdi/chevron-down';
  import IconUp from '~icons/mdi/chevron-up';
  import IconTimes from '~icons/mdi/times';
  import MessageError from '../../Form/Messages/error.svelte';
  import MultiSelectButton from './multi-select/multi-select-button.svelte';
		
	
	interface Props
		extends Omit<
				Partial<HTMLInputElement>,
				'type' | 'checked' | 'name' | 'disabled' | 'placeholder' | 'required'
			>,
			Field {
				isInvalid?: boolean;
				message?: string;
			}

	let { name, isInvalid, message, options: items }: Props = $props();

  let showOptions = $state(false);
  let selected = $state('');
  let search = $state('');
  let notFound = $state(false);

  const options = $derived(
    items.filter(option => option.toLowerCase().includes(search.toLowerCase()))
  )

  const onclick = (e: Event) => {
    const newValue = (e.currentTarget as HTMLInputElement).value;

    if (newValue === selected) {
      clearSelection();
      return;
    };
    
    selected = search = newValue;
    showOptions = false;
  }

  const onSearch = (event: Event) => {
    search = (event.currentTarget as HTMLInputElement).value || '';
  }

  const clearSelection = () => {
    selected = search = '';
  }

  $effect(() => {
    notFound = options.length === 0 && search !== '';

    if (notFound) {
      triggerShake();
    }
  })
</script>

<div
  class="w-full relative"
  use:clickOutside
  onclick_outside={() => (showOptions = false)}
>
  <div class="w-full relative">
    <input
      {name}
      class={[
        'px-0 text-3xl font-light w-full',
        'text-[#4FB0AE] placeholder-[#d0e6e7]',
        'border-0 border-b border-[#d0e6e7]',
        'hover:border-b-2 hover:border-b-[#4FB0AE] focus:border-b-2 focus:border-[#4FB0AE]',
        'transition-colors duration-200 focus:outline-none',
        'focus:ring-0 pr-12',
      ]}
      bind:value={search}
      onchange={onSearch}
      onclick={() => showOptions = true}
    />

    {#if selected || search}
      <IconTimes
        class="absolute right-0 bottom-1 text-4xl text-[#4FB0AE] cursor-pointer"
        onclick={clearSelection}
      />
    {/if}

    {#if showOptions && !search}
      <IconUp class="absolute right-0 bottom-1 text-4xl text-[#4FB0AE]" />
    {/if}

    {#if !showOptions && !search}
      <IconDown class="absolute right-0 bottom-1 text-4xl text-[#4FB0AE]" />
    {/if}
  </div>

  <!-- options -->
  {#if showOptions && options.length > 0}
    <ul
      class={[
        'py-4 flex flex-col gap-1 sticky w-full',
        'border-b-2 border-b-[#d0e6e7] overflow-y-auto',
        'max-h-[300px] bg-white'
      ]}
      transition:slide={{
        duration: 600
      }}
    >
      {#each options as elementOption, index (`${index}_${elementOption}`)}
        <MultiSelectButton
          isSelected={selected === elementOption}
          {onclick}
          value={elementOption}
        />
      {/each}
    </ul>
  {/if}
</div>

{#if isInvalid || notFound}
	<MessageError>
    {#if notFound}
      No suggestions found
    {:else}
      {message}
    {/if}
	</MessageError>
{/if}
