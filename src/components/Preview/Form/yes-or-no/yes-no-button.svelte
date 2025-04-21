<script lang="ts">
	import type { Snippet } from "svelte";

  interface Props extends Omit<Partial<HTMLButtonElement>, 'children'> {
    isSelected: boolean;
    value: string;
    children: Snippet;
  }

  let { children, isSelected, onclick, value }: Props = $props();
</script>

<button
  class={[
    'flex items-center gap-2 text-[#4FB0AE]',
    'border-2  rounded px-2 py-1 text-2xl font-light',
    'cursor-pointer',
    'hover:border-2 hover:border-[#4FB0AE] hover:bg-[#4fb0ae5f]',
    {
      'border-[#4FB0AE] bg-[#4fb0ae5f]': isSelected,
      'border-[#c1dddd] bg-[#f0f7f7]': !isSelected
    }
  ]}
  {value}
  {onclick}
>
  {@render children()}
</button>