<script lang="ts">
  import 'tippy.js/dist/tippy.css';

  import { addField } from '$lib/stores/store.svelte';
  import type { FieldElement } from '$lib/types/field-element';

  import type { Section } from '$lib/types/section';
  import Divider from '../../divider.svelte';
  import SidebarCollapse from './sidebar-collapse.svelte';
  import SidebarIconButton from './sidebar-icon-button.svelte';
  import SidebarSearch from './sidebar-search.svelte';
  import SidebarSection from './sidebar-section.svelte';
  	
  let { sections: elementsWithSections }: { sections: Array<Section> } = $props();

  let isCollapsed = $state(false);
  const sections = $derived(
    elementsWithSections.map((elem) => {
      if (isCollapsed) {
        return elem.elements;
      }

      return elem;
    })
    .reduce((stored, curr) => {
      if (isCollapsed) {
        return [...stored, ...curr]
      }

      return [...stored, curr];
    }, [])
  );

  const toggle = () => isCollapsed = !isCollapsed;
</script>

<div class={[
  'p-10 pr-0',
  'transition-all duration-1000',
  {
    'w-1/4 max-w-[350px]': !isCollapsed,
    'w-[120px]': isCollapsed
  }
]}>
  <div class={[
    'w-full h-full bg-white',
    'border-[#e4e4ed4] border-d2',
    'rounded-lg overflow-y-auto',
    'flex flex-col',
    {
      'py-10': !isCollapsed,
      'py-4 items-center': isCollapsed
    }
  ]}>
    {#if !isCollapsed}
      <SidebarSearch />
    {:else}
      <SidebarCollapse onclick={toggle} />
    {/if}

    {#if isCollapsed}
      <Divider />
    {/if}

    {#if isCollapsed}
      <div class="flex flex-col gap-2 px-6 ">
        {#each (sections as unknown as Array<FieldElement>) as fieldElement (fieldElement.id)}
          <SidebarIconButton {...fieldElement} onclick={() => addField(fieldElement.id)} />
        {/each}
      </div>
    {/if}

    {#if !isCollapsed}
      <div>
        {#each (sections as unknown as Array<Section>) as section (section.title)}
          <SidebarSection
            {...section}
            onclick={addField}
          />
        {/each}
      </div>
    {/if}

    <button class="absolute bottom-0">Collapse</button>
  </div>
</div>