<script>
  import IconSearch from '~icons/mdi/search';
  import Input from "../../Form/input.svelte";
</script>
<div class="relative px-6">
  <Input
    className="pl-8 text-base border-[#7777775e] focus:border-[#4FB0AE] border-1 py-2 pr-2 rounded-lg focus:ring-0"
    placeholder="Search element"
    id="search_elements"
  />

  <IconSearch class="absolute top-3 left-8" />
</div>