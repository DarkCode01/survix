<script lang="ts">
  let { className = '', placeholder, value = $bindable(), id = '' } = $props();
</script>


<div class="w-full" id="wrapper_{id}">
  <input
    {id}
    {placeholder}
    class={[
      'font-light',
      'border-0',
      'focus:outline-none transition-colors duration-200 ',
      'focus:ring-0 py-1 px-0 w-full text-[#3D3D3D] text-2xl',
      className
    ]}
    bind:value={value}
  />
</div>