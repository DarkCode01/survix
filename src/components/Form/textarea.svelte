<script lang="ts">
	import { resize } from "$lib/utils/resize.svelte";

  let { className = '', placeholder, value = $bindable(), id = '' } = $props();
</script>

<div class="w-full m-0 items-center flex" id="wrapper_{id}">
  <textarea
    {id}
    {placeholder}
    class={[
      'font-light',
      'border-0',
      'focus:outline-none transition-colors duration-200 ',
      'focus:ring-0 py-0 px-0 w-full text-[#3D3D3D] text-2xl',
      'resize-none overflow-hidden',
      className
    ]}
    bind:value
    rows="1"
    oninput={resize}
  ></textarea>
</div>