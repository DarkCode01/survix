
<script lang="ts">
	import type { FieldOption as FieldOptionType } from "$lib/types/field-option";
	import { fade } from "svelte/transition";
	import FieldOption from "./field-option.svelte";
	import FormFieldOptionsActions from "./form-field-options-actions.svelte";

  interface Props extends Partial<HTMLDivElement> {
    fieldIndex: number;
    options: Array<FieldOptionType>;
  }


  let { fieldIndex, options }: Props = $props();
</script>


<div class="flex flex-col gap-4 px-8 py-4" in:fade={{ duration: 800 }}>
  <h1 class="text-2xl">Options</h1>

  {#each options as option, index (`${index}_${option}`)}
    <FieldOption {index} {fieldIndex} value={option} />
  {/each}

  <FormFieldOptionsActions {fieldIndex} addMargin={options.length !== 0} />
</div>