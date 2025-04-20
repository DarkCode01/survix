<script lang="ts">
	import { updateOptionByIndex } from '$lib/store.svelte';
	import type { FieldOption } from '$lib/types/field-option';

	type Props = {
		index: number;
		fieldIndex: number;
		value: FieldOption;
	};

	let { value, index, fieldIndex }: Props = $props();
</script>

<div class="grid grid-cols-3 gap-4">
	<div class="col-span-3 flex flex-col gap-2">
		<label for={value} class="font-light">Option {index + 1}</label>
		<input
			id={value}
			placeholder="Add option text"
			class={[
				'w-full rounded-lg border-1 border-[#e4e4e4] font-light',
				'hover:border-[#6672b7] focus:border-[#6672b7]'
			]}
			onblur={(e) => updateOptionByIndex({
				fieldIndex,
				optionIndex: index,
				text: e?.target?.value || value
			})}
			{value}
		/>
	</div>
</div>
