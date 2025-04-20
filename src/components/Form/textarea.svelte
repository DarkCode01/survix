<script lang="ts">
  let { className = '', placeholder, value = $bindable(), id = '' } = $props();

  const resize = (event: Event) => {
    const texarea = event.currentTarget as HTMLTextAreaElement;
    
    texarea.style.height = 'auto';
    texarea.style.height = texarea.scrollHeight + 'px';
  }
</script>

<div class="w-full" id="wrapper_{id}">
  <textarea
    {id}
    {placeholder}
    class={[
      'font-light',
      'border-0',
      'focus:outline-none transition-colors duration-200 ',
      'focus:ring-0 py-1 px-0 w-full text-[#3D3D3D] text-2xl',
      'resize-none overflow-hidden',
      className
    ]}
    bind:value
    oninput={resize}
  ></textarea>
</div>