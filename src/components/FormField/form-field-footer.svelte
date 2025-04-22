<script lang="ts">
	import { fields, removeField } from '$lib/stores/store.svelte';
	import IconTrash from '~icons/mdi/trash-outline';

  interface Props extends Partial<HTMLDivElement> {
    fieldIndex: number;
    required: boolean;
  }


  let { fieldIndex, required = $bindable() }: Props = $props();
</script>

<div class="flex items-center gap-4 border-t border-t-[#e4e4e4] px-8 py-4">
  <div class="flex cursor-pointer items-center justify-center gap-2 text-gray-500">
    <input
      bind:checked={required}
      type="checkbox"
      id="field-required-{fieldIndex}"
      class="cursor-pointer rounded checked:bg-[#69aead] focus:ring-[#69aead]"
    />
    <label for="field-required-{fieldIndex}" class="text-md cursor-pointer font-light text-[#3D3D3D]"
      >This field is required</label
    >
  </div>
  
  {#if fields.length > 1}
    <span class="text-lg">|</span>

    <button
      onclick={() => removeField(fieldIndex)}
      class="cursor-pointer rounded-lg p-1 hover:bg-red-100"
    >
      <IconTrash style="font-size: 20px; color: red;" />
    </button>
  {/if}
</div>