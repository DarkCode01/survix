<script lang="ts">
  import type { Field } from "$lib/types/field";

  interface Props extends Pick<Field, 'name' | 'label' | 'required' | 'description'> {};

  let { ...field }: Props = $props();
</script>

<div class="flex w-full flex-col gap-2 mb-4">
  <label
    for={field.name}
    class="flex items-center gap-2 text-3xl font-light text-[#3D3D3D]"
  >
    {field.label}

    {#if field.required}
      <span class="text-red-500">*</span>
    {/if}
  </label>
  

  {#if field.description}
    <span class="text-2xl italic font-light text-[#777777]">{field.description}</span>
  {/if}
</div>