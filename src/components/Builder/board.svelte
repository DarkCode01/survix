<script lang="ts">
  let { children } = $props();
</script>

<div class="flex w-full max-w-[2000px] flex-col items-center justify-center gap-6 p-10">
  {@render children()}
</div>