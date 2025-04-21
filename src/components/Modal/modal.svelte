<script lang="ts">
	import { addBulkValues } from "$lib/stores/store.svelte";

  const {
    // provided by <Modals />
    isOpen,
    close,

    // your props
    title,
    message,
    values,
    fieldIndex
  } = $props();

  let options = $state(values);

</script>

{#if isOpen}
  <div role="dialog" class="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center pointer-events-none z-100">
    <div class={[
      'min-w-[240px] p-4 bg-white flex flex-col justify-between pointer-events-auto',
      'rounded-lg p-10 max-w-1/2 w-full gap-6'
    ]}>
      <div class="header flex flex-col gap-2">
        <h1 class="text-[#3D3D3D] text-2xl font-light">{title}</h1>
        <p class="text-[#777777] text-base font-light italic">
          {message}
        </p>
      </div>
      <div class="body">
        <textarea
          class={[
            'w-full rounded-lg h-[400px] border-2 border-[#69aead]',
            'focus:ring-[#69aead] resize-none',
            'font-light text-[#3D3D3D]'
          ]}
          bind:value={options}
        ></textarea>
      </div>
      <div class="footer flex w-full items-center justify-end gap-2">
        <button
          onclick={() => close()}
          class={[
            'bg-[#e6e6e6] px-3 py-1 cursor-pointer',
            'rounded text-black font-light'
          ]}
        >
          Cancel
        </button>
        <button
          onclick={() => {
            if (options) {
              const newValues = options
                .split('\n')
                .filter((char: string) => !!char)
                .map((char: string) => char.trim());

              // add bulk values
              addBulkValues({
                fieldIndex,
                values: newValues
              })
            }

            close();
          }}
          class={[
            'bg-[#69aead] px-3 py-1 cursor-pointer',
            'rounded text-white font-light'
          ]}
        >
          Add values
        </button>
      </div>
    </div>
  </div>
{/if}