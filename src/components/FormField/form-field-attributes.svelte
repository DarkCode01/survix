<script lang="ts">
	import Input from "../Form/input.svelte";

  interface Props extends Partial<HTMLDivElement> {
    fieldIndex: number;
    placeholder: string;
  }


  let { fieldIndex, placeholder = $bindable() }: Props = $props();
</script>

<div class="flex flex-col gap-4 px-8 py-4">
  <div class="flex w-full gap-4 border-t-2 border-[#e4e4e4] pt-2 flex-col">
    <h1 class="text-2xl">Attributes</h1>
    
    <div class="flex items-center gap-4">
      <label for="{fieldIndex}_placeholder" class="text-lg">Label</label>
      <Input
        id="{fieldIndex}_placeholder"
        placeholder="Checkbox default label"
        bind:value={placeholder}
        className="text-lg italic"
      />
    </div>
  </div>
</div>