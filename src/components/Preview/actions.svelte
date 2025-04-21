<script lang="ts">
  	import IconNext from '~icons/mdi/arrow-right';
  	import IconPrev from '~icons/mdi/navigate-before';

    interface Props extends Partial<HTMLDivElement> {
      onNext?: () => void;
      onBack?: () => void;
    }

    let { onNext, onBack }: Props = $props();
</script>

<div class="flex items-center justify-between">
  <button
    class="w-fit cursor-pointer rounded bg-[#4FB0AE] px-4 py-2 text-2xl font-bold text-white shadow-2xl"
    onclick={onNext}
  >
    Continue
  </button>

  <div>
    <button
      class={[
        'w-fit rounded bg-[#4FB0AE] px-4 py-2 text-2xl',
        'cursor-pointer font-bold text-white shadow-2xl',
        'hover:bg-[#529796]'
      ]}
    >
      <IconPrev />
    </button>
    <button
      class={[
        'w-fit rounded bg-[#4FB0AE] px-4 py-2 text-2xl',
        'cursor-pointer font-bold text-white shadow-2xl',
        'hover:bg-[#529796] disabled:pointer-events-none disabled:cursor-not-allowed'
      ]}
      disabled={true}
      onclick={onBack}
    >
      <IconNext />
    </button>
  </div>
</div>