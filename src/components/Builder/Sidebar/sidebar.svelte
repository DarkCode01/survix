<script lang="ts">
  import 'tippy.js/dist/tippy.css';

  import { addField } from '$lib/stores/store.svelte';
  import type { FieldElement } from '$lib/types/field-element';
  import IconExpand from '~icons/mdi/arrow-collapse-left';

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
  'p-6 pr-0 h-full',
  'transition-all duration-1000',
  {
    'w-1/4 max-w-[350px]': !isCollapsed,
    'w-[120px]': isCollapsed
  }
]}>
  <div class={[
    'w-full h-full bg-white max-h-full',
    'border-[#e4e4ed4]',
    'rounded-lg',
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
      {#each (sections as unknown as Array<FieldElement>) as fieldElement, index (fieldElement.id)}
        <div class="flex flex-col gap-2 px-4">
          <SidebarIconButton {...fieldElement} onclick={() => addField(fieldElement.id)} />
        </div>

        {#if (index + 1) === ((sections as unknown as Array<FieldElement>).length / 2)}
          <Divider />
        {/if}
      {/each}
    {/if}

    {#if !isCollapsed}
      <div class="mb-10 overflow-y-auto">
        {#each (sections as unknown as Array<Section>) as section (section.title)}
          <SidebarSection
            {...section}
            onclick={addField}
          />
        {/each}
      </div>
    {/if}

    {#if !isCollapsed}
      <button
        class={[
          'border px-4 py-2 mx-6 mt-auto rounded-lg border-[#7777775e]',
          'flex gap-2 items-center justify-center cursor-pointer',
          ' hover:bg-[#e4e4e467]'
        ]}
        onclick={toggle}
      >
        <IconExpand />
        <span>Collapse</span>
      </button>
    {/if}
  </div>
</div>