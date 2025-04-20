<script lang="ts">
	import IconEye from '~icons/mdi/eye';
  
	let { onclick }: HTMLButtonElement = <HTMLButtonElement>$props();
</script>

<button
	class={[
		'fixed right-8 bottom-8 h-14 w-14 cursor-pointer border bg-[#69aead]',
		'flex items-center justify-center rounded-full text-white shadow-2xl',
		'border-[#69aead]'
	]}
	{onclick}
>
	<IconEye style="font-size: 20px;" />
</button>
