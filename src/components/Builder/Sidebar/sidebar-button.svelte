<script lang="ts">
	import type { FieldElement } from "$lib/types/field-element";

  interface Props extends Partial<HTMLButtonElement> {
    text: string;
    CustomIcon: FieldElement['icon'];
  }

  let { onclick, text, CustomIcon }: Props = $props();
</script>

<button
  {onclick}
  class={[
    'text-black font-light cursor-pointer hover:bg-[#4fb0ae5f]',
    'col-span-1 h-[120px] rounded-lg bg-[#f0f7f7]',
    'border hover:border-2 border-[#c1dddd] flex items-center',
    'justify-center flex-col gap-1 hover:border-[#69aead]'
  ]}
>
  <!-- svelte-ignore element_invalid_self_closing_tag -->
  <CustomIcon style="font-size: 20px;" />
  <h3 class="text-base">{text}</h3>
</button>