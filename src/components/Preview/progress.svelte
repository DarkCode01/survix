<script lang="ts">
  interface Props {
    value: number;
  }

  let { value }: Props = $props();
</script>

<div
  class={[
    'w-full h-1 bg-[#4fb0ae5f] rounded',
    'overflow-hidden absolute top-0 left-0'
  ]}
>
  <div
    class="h-full bg-[#4FB0AE] transition-all duration-500"
    style="width: {value}%"
  ></div>
</div>