<script lang="ts">
	import { addOptionToField } from '$lib/store.svelte';
	import IconAdd from '~icons/mdi/add-circle-outline';

  interface Props extends Partial<HTMLDivElement> {
    fieldIndex: number;
    addMargin: boolean;
  }


  let { fieldIndex, addMargin }: Props = $props();
</script>


<div class="flex items-center gap-8">
  <button
    class={[
      'flex cursor-pointer items-center gap-2',
      addMargin ? 'mt-4' : 'mt-1'
    ]}
    onclick={() => addOptionToField(fieldIndex)}
  >
    <IconAdd style="font-size: 18px; color: #6672b7;" />

    <span class="font-light text-[#6672b7]">Add another option</span>
  </button>

  <button
    class={[
      'flex cursor-pointer items-center gap-2',
      addMargin ? 'mt-4' : 'mt-1'
    ]}
    onclick={() => addOptionToField(fieldIndex)}
  >
    <IconAdd style="font-size: 18px; color: #6672b7;" />

    <span class="font-light text-[#6672b7]">Add bulk</span>
  </button>
</div>