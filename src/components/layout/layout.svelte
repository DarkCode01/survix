<script>
  let { children } = $props()
</script>

<div
  class="flex flex-wrap content-start w-full h-full relative"
>
  {@render children()}
</div>
