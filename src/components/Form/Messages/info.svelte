<script lang="ts">
  let { children } = $props();
</script>

<div class="w-fit rounded flex items-center gap-1">
  <span class="text-[#6fb1b0] font-extralight text-sm">
    {@render children()}
  </span>
</div>