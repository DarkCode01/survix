<script lang="ts">
	import { addField } from '$lib/stores/store.svelte';
	import type { FieldElement } from '$lib/types/field-element';
  	
  let { sections }: { sections: Array<{ title: string; elements: Array<FieldElement>}>  }= $props();
</script>

<div class="w-1/5 shadow-md max-w-[300px]">
  <div class="w-full h-full">
    {#each sections as section (section.title)}
      <h1 class="uppercase px-4 pt-4 text-[#4FB0AE]">
        {section.title}
      </h1>
      <div class="grid grid-cols-2 p-4  gap-4">
        {#each section.elements as fieldElement, i (fieldElement.id, i)}
          <button
            onclick={() => addField(fieldElement.id)}
            class="text-black font-light cursor-pointer hover:bg-[#4fb0ae5f] col-span-1 h-[80px] w-[120px] rounded-[3px] bg-[#f0f7f7] border hover:border-2 border-[#c1dddd] flex items-center justify-center flex-col gap-1 hover:border-[#69aead]"
          >
            <fieldElement.icon style="font-size: 20px;" />
            <h3 class="text-xs">{fieldElement.description}</h3>
          </button>
        {/each}
      </div>
    {/each}
  </div>
</div>