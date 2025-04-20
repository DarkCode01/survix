<script lang="ts">
	import Input from "../Form/input.svelte";

  let { title = $bindable(), description = $bindable()} = $props();
</script>
<div
  class={[
    'relative flex w-full flex-col gap-2 rounded-lg border-2 ',
    'border-[#e4e4e4] bg-white p-10',
    'items-center justify-center'
  ]}
>
  <Input
    bind:value={title}
    placeholder="..."
    className="self-center text-center text-4xl"
  />
  
  <Input
    bind:value={description}
    placeholder="Description (optional)"
    className="self-center text-center text-2xl italic text-[#777777]"
  />
</div>