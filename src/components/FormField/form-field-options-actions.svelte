<script lang="ts">
	import { addOptionToField, fields } from '$lib/stores/store.svelte';
	import { modals } from 'svelte-modals';
	import IconAdd from '~icons/mdi/add-circle-outline';
	import IconBulk from '~icons/mdi/list-box-outline';
	import Modal from '../Modal/modal.svelte';

  interface Props extends Partial<HTMLDivElement> {
    fieldIndex: number;
    addMargin: boolean;
  }

  let { fieldIndex, addMargin }: Props = $props();

  function handleClick() {
    modals.open(
      Modal,
      {
        title: "Edit values",
        message: "Write or paste your choices below. Each choice must be on a separate line.",
        values: fields[fieldIndex].options.join('\n'),
        fieldIndex
      }
    );
  }
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
    onclick={handleClick}
  >
    <IconBulk style="font-size: 18px; color: #6672b7;" />

    <span class="font-light text-[#6672b7]">Add bulk</span>
  </button>
</div>