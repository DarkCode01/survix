<script lang="ts">
  import { fade } from 'svelte/transition';

  import IconCheck from '~icons/mdi/check-circle';
  import IconDown from '~icons/mdi/chevron-down';
  import IconSearch from '~icons/mdi/search';

  import { clickOutside } from '$lib/actions/click-outside.svelte';

  interface Props extends Omit<Partial<HTMLSelectElement>, 'onchange' | 'options'> {
    options: Array<{ value: string | any; text: string }>;
    defaultValue: string | any;
    onchange?: (option: string | any) => void;
  }

  let { id, options, defaultValue, onchange }: Props = $props();

  let search = $state('');
  let showOptions = $state(false);
  let selected: { value: string | any; text: string } = $state(options.find(option => option.value === defaultValue) || options[0]);
  let optionsFiltered = $derived(
    options.filter(option => option.text.toLowerCase().includes(search.toLowerCase()))
  )

  const toggle = () => (showOptions = !showOptions);

  $effect(() => {
    if (showOptions) {
      const inputSearch: HTMLDivElement = <HTMLDivElement>document.querySelector(`#search_${id}`);

      if (inputSearch) inputSearch.focus();
    }
  });
</script>


<div class="flex-1 min-w-[280px]" id="wrapper_{id}">
  {#if !showOptions}
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div onclick={toggle} class="w-full cursor-pointer border-1 border-[#e4e4e4] rounded-lg flex items-center justify-between gap-2 px-2 py-[5px]">
      <span class="text-[#3D3D3D] font-light">{selected.text}</span>

      <IconDown style="font-size: 25px;" />
    </div>
  {:else}
    <div
      class="options relative top-0 z-100"
      use:clickOutside
      onclick_outside={toggle}
    >
      <div class="header relative border-[#4FB0AE] border-t-2 border-l-2 border-r-2 rounded-t-lg border-b-none bg-gray-100">
        <input bind:value={search} class="focus:ring-0 border-none focus:border-none font-light  w-full rounded-lg pl-8 pr-2  bg-gray-100" id="search_{id}" />
        <IconSearch style="font-size: 18px; color: #777777;" class="absolute top-[10px] left-2" />
      </div>

      <!-- body options -->
      <ul
        class={[
          'body absolute bg-white w-full',
          'border-l-2 border-r-2 border-b-2 border-[#4FB0AE]',
          'rounded-b-lg p-2 flex gap-2 flex-col',
          'max-h-[500px] overflow-y-auto'
        ]}
        in:fade={{ duration: 300 }}
      >
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        {#each optionsFiltered as option (option)}
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <li
            class={[
              'font-light rounded-lg p-2 text-[#3D3D3D]',
              selected.value === option.value
                ? 'bg-gray-100 cursor-not-allowed flex justify-between items-center'
                : 'cursor-pointer hover:bg-gray-100'
            ]}
            onclick={() => {
              selected = option;
              onchange?.(option.value);
              toggle();
            }}
          >
            {option.text}

            {#if selected.value === option.value}
              <IconCheck style="color: #4FB0AE;" />
            {/if}
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>