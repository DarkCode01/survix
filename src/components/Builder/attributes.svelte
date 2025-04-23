<script lang="ts">
	import { ELEMENTS } from "$lib/constant/elements";
	import Select from "../Form/select.svelte";

</script>

<div class={[
  'p-10 pl-0 w-1/4 ',
  'transition-all duration-1000',
  // {
  //   'max-w-[350px]': !isCollapsed,
  //   'w-[120px]': isCollapsed
  // }
]}>
  <div class={[
    'w-full h-full bg-white',
    'border-[#e4e4ed4]',
    'rounded-lg',
    'flex flex-col px-6 py-10 gap-4'
  ]}>
    <div class="flex flex-col gap-2">
      <h1 class="text-lg font-light">Question type</h1>
      <Select
        id="_type"
        options={ELEMENTS}
        defaultValue={undefined}
      />
    </div>

    <div class="flex flex-col gap-2">
      <h1 class="text-lg font-light">Attributes</h1>
      
      <div class="flex cursor-pointer items-center gap-2 text-gray-500">
        <input
          type="checkbox"
          id="field-required-"
          class="cursor-pointer rounded checked:bg-[#69aead] focus:ring-[#69aead]"
        />
        <label for="field-required-" class="text-md cursor-pointer font-light text-[#3D3D3D]"
          >This field is required</label
        >
      </div>

      <div class="flex cursor-pointer items-center gap-2 text-gray-500">
        <input
          type="checkbox"
          id="field-required-"
          class="cursor-pointer rounded checked:bg-[#69aead] focus:ring-[#69aead]"
        />
        <label for="field-required-" class="text-md cursor-pointer font-light text-[#3D3D3D]"
          >This field is required</label
        >
      </div>
    </div>
  </div>
</div>