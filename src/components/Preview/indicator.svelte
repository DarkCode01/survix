<script lang="ts">
  import IconNext from '~icons/mdi/arrow-right';
    
  interface Props {
    questionNumber: number;
  }

  let { questionNumber }: Props = $props();
</script>

<div class=" flex gap-1 items-center h-fit mt-1">
  <span class="text-[20px]  font-light text-[#4FB0AE]">Q{questionNumber}</span>
  <IconNext style="font-size: 15px; color: #4FB0AE;" />
</div>