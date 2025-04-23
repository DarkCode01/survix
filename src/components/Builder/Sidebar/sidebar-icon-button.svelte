<script lang="ts">
	import { tooltip } from "$lib/actions/tooltip.svelte";
	import type { FieldElement } from "$lib/types/field-element";

  interface Props extends FieldElement {
    onclick: () => void;
  }

  let { onclick, description, icon: Icon }: Props = $props()
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button
  {onclick}
  class={[
    'flex items-center rounded-lg',
    'p-4 hover:bg-[#e4e4e467]',
    'cursor-pointer'
  ]}
  use:tooltip={() => ({
    content: description,
    placement: 'right'
  })}
>
  <!-- svelte-ignore element_invalid_self_closing_tag -->
  <Icon />
</button>