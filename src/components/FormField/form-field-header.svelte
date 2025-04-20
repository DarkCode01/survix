<script lang="ts">
	import type { FieldElementId } from '$lib/enums/element-id';
	import Input from '../Form/input.svelte';

	import { ELEMENTS } from '$lib/constant/elements';
	import { changeFieldType } from '$lib/store.svelte';
	import IconNext from '~icons/mdi/arrow-right';
	import IconDown from '~icons/mdi/chevron-down';
	import Select from '../Form/select.svelte';

	interface Props extends Partial<HTMLDivElement> {
		displayBorder: boolean;
		fieldIndex: number;
		fieldType: FieldElementId;
		fieldLabel: string;
		fieldPlaceholder: string;
	}

	let { fieldIndex, displayBorder, onclick, fieldType, fieldLabel, fieldPlaceholder }: Props =
		$props();
</script>

<div
	class={[
		'flex items-center gap-4 rounded-t-lg',
		'border-b-[#e4e4e4] bg-white px-8 py-4',
		displayBorder ? 'border-b-1' : 'rounded-b-lg border-b-0'
	]}
>
	<div class="flex items-center gap-2">
		<span class="text-2xl text-[#3D3D3D]">{fieldIndex + 1}</span>
		<IconNext style="font-size: 15px; color: #3D3D3D;" />
	</div>
	<Input id="{fieldIndex}_label" value={fieldLabel} placeholder={fieldPlaceholder} />
  <Select
		id="{fieldIndex}_type"
		options={ELEMENTS}
		defaultValue={fieldType}
		onchange={(option) => changeFieldType(fieldIndex, option as FieldElementId)}
	/>

	<button
		class="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full border border-[#e4e4e4]"
		{onclick}
	>
		<IconDown style="font-size: 25px;" />
	</button>
</div>
