<script lang="ts">
  import IconExpand from '~icons/mdi/arrow-collapse-right';
  
  let { onclick } = $props();
</script>

<button
  {onclick}
  class={[
    'flex items-center rounded-lg',
    'p-4 text-[#777777] hover:bg-[#e4e4e467]',
    'cursor-pointer px-4'
  ]}
>
  <IconExpand />
</button>