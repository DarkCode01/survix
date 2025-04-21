<script lang="ts">
	import { fade } from 'svelte/transition';
	import IconTimes from '~icons/mdi/times';
	import Preview from "../Preview/preview.svelte";

  const {
    isOpen,
    close,
    field
  } = $props();
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
      'w-10/12 p-4 bg-white flex flex-col justify-between pointer-events-auto',
      'rounded-lg p-14 gap-6 h-10/12 relative'
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

      <div class="flex items-center justify-center h-full">
        <Preview
          {field}
          withoutActions={true}
        />
      </div>
    </div>
  </div>
{/if}