<script lang="ts">
  import IconWarning from '~icons/mdi/warning-outline';


  let { children } = $props();
</script>

<div class="bg-[#f4e7e6] w-fit rounded px-4 py-1 flex items-center gap-1">
  <IconWarning style="font-size: 15px; color: #98443d;" />
  <span class="text-[#98443d] font-normal">
    {@render children()}
  </span>
</div>