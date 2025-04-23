<script lang="ts">
	import type { FieldElementId } from "$lib/enums/element-id";
	import type { Section } from "$lib/types/section";
	import SidebarButton from "./sidebar-button.svelte";

  interface Props extends Section {
    onclick: (id: FieldElementId) => void;
  }

  let { title, elements, onclick }: Props = $props();
</script>

<div class="bg-gray-100/50 mx-6 rounded-lg py-2 h-fit mt-10">
  <h1 class="font-medium capitalize px-4 text-lg">
    {title}
  </h1>
  <div class="grid grid-cols-2 pt-2 gap-1 -mx-2 px-4">
    {#each elements as fieldElement, i (fieldElement.id, i)}
      <SidebarButton
        onclick={() => onclick(fieldElement.id)}
        text={fieldElement.description}
        CustomIcon={fieldElement.icon}
      />
    {/each}
  </div>
</div>