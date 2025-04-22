<script lang="ts">
	import { fade } from 'svelte/transition';
	import IconTimes from '~icons/mdi/times';
	import Textarea from '../Form/textarea.svelte';

  let {
    isOpen,
    close,
    title: defaultTitle,
    description: defaultDescription,
    onChange
  } = $props();

  let newTitle = $state(defaultTitle);
  let newDescription = $state(defaultDescription);

  $effect(() => {
    onChange({ title: newTitle, description: newDescription });
  })
</script>

{#if isOpen}
  <div
    role="dialog"
    class={[
      'fixed top-0 left-0 right-0 bottom-0',
      'flex justify-center items-center pointer-events-none z-100',
      'p-10'
    ]}
    transition:fade={{
      duration: 800
    }}
    >
    <div class={[
      'p-4 bg-white flex flex-col justify-between pointer-events-auto',
      'rounded-lg p-14 gap-6 relative'
    ]}
    >
      <button
        onclick={() => {
          close();
        }}
        class={[
          'rounded-full font-light p-2',
          'absolute right-5 top-5',
          'hover:bg-[#77777719] cursor-pointer'
        ]}
      >
        <IconTimes style="font-size: 25px; color: #777777;" />
      </button>

      <div class="flex flex-col gap-4">
        <Textarea
          bind:value={newTitle}
          placeholder="..."
          className="self-center text-center text-4xl font-light"
        />
        
        <Textarea
          bind:value={newDescription}
          placeholder="Description (optional)"
          className="self-center text-center text-2xl italic text-[#777777] font-light"
        />
      </div>
    </div>
  </div>
{/if}