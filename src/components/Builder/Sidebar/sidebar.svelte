<script lang="ts">
  import 'tippy.js/dist/tippy.css';

  import { addField } from '$lib/stores/store.svelte';
  import type { FieldElement } from '$lib/types/field-element';
  import tippy from 'tippy.js';

  import type { Section } from '$lib/types/section';
  import IconExpand from '~icons/mdi/arrow-collapse-right';
  import IconSearch from '~icons/mdi/search';
  import Input from '../../Form/input.svelte';
  import SidebarButton from './sidebar-button.svelte';
  	
  let { sections: elementsWithSections }: { sections: Array<Section> } = $props();

  let isCollapsed = $state(true);
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

  function tooltip(node, fn) {
		$effect(() => {
			const tooltip = tippy(node, fn());

			return tooltip.destroy;
		});
	}
</script>

<div class={[
  'p-10 pr-0 max-w-[500px]',
  'transition-all duration-1000',
  {
    'w-1/2': !isCollapsed,
    'w-[120px]': isCollapsed
  }
]}>
  <div class={[
    'w-full h-full bg-white',
    'border-[#e4e4ed4] border-d2',
    'rounded-lg px-6',
    'flex flex-col',
    {
      'py-10': !isCollapsed,
      'py-4 items-center': isCollapsed
    }
  ]}>
    {#if !isCollapsed}
      <div class="relative">
        <Input
          className="pl-8 text-base border-[#7777775e] focus:border-[#4FB0AE] border-1 py-2 pr-2 rounded-lg focus:ring-0"
          placeholder="Search element"
          id="search_elements"
        />

        <IconSearch class="absolute top-3 left-2" />
      </div>
    {:else}
      <button
        onclick={toggle}
        class={[
          'flex items-center rounded-lg',
          'p-4 text-[#777777] hover:bg-[#e4e4e467]',
          'cursor-pointer'
        ]}
      >
        <IconExpand />
      </button>
    {/if}

    {#if isCollapsed}
      <hr class="w-full text-[#777777] rounded-lg border-1 my-4" />
    {/if}

    {#if isCollapsed}
      <div class="flex flex-col gap-2">
        {#each (sections as unknown as Array<FieldElement>) as fieldElement (fieldElement.id)}
          <button
            onclick={() => addField(fieldElement.id)}
            class={[
              'flex items-center rounded-lg',
              'p-4 hover:bg-[#e4e4e467]',
              'cursor-pointer'
            ]}
            use:tooltip={() => ({
              content: fieldElement.description,
              placement: 'right'
            })}
          >
            <fieldElement.icon />
          </button>
        {/each}
      </div>
    {/if}

    {#if !isCollapsed}
      {#each (sections as unknown as Array<Section>) as section (section.title)}
        <h1 class="uppercase mt-10 text] font-light">
          {section.title}
        </h1>
        <div class="grid grid-cols-2 pt-2 gap-6">
          {#each section.elements as fieldElement, i (fieldElement.id, i)}
            <SidebarButton
              onclick={() => addField(fieldElement.id)}
              text={fieldElement.description}
              CustomIcon={fieldElement.icon}
            />
          {/each}
        </div>
      {/each}
    {/if}
  </div>
</div>