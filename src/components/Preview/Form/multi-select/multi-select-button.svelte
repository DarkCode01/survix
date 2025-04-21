<script lang="ts">
  interface Props extends Omit<Partial<HTMLButtonElement>, 'children'> {
    isSelected: boolean;
    value: string;
    order?: number
  }

  let { isSelected, onclick, value, order, name }: Props = $props();
</script>

<div class="flex items-center gap-2 text-[#69ae49]">
  <button
    {value}
    {onclick}
    {name}
    class={[
      'flex items-center gap-2 text-[#4FB0AE]  w-full',
      'border-2 rounded p-2 text-2xl font-light',
      'cursor-pointer hover:border-2 hover:border-[#4FB0AE] hover:bg-[#4fb0ae5f]',
      {
        'bg-[#f0f7f7] border-[#c1dddd]': !isSelected,
        'border-[#4FB0AE] bg-[#4fb0ae5f]': isSelected
      }
    ]}
  >
    {#if order !== undefined}
      <span class={[
        'bg-white border-2 border-[#c1dddd]',
        'text-lg py-3 px-2 leading-0 rounded'
      ]}>
        {order}
      </span>
    {/if}

    {value}
  </button>
</div>