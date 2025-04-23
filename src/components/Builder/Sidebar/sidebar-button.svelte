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
    'text-black font-light cursor-pointer',
    'col-span-2 rounded-lg',
    'flex items-center hover:bg-[#f0f7f7]',
    'hover:border-[#69aead] py-2 gap-2 px-2'
  ]}
>
  <!-- svelte-ignore element_invalid_self_closing_tag -->
  <div class="p-1 bg-[#4fb0ae5f] rounded-lg">
    <CustomIcon style="font-size: 20px; color: #3D3D3D;" />
  </div>
  <h3 class="text-base text-[#3D3D3D]">{text}</h3>
</button>