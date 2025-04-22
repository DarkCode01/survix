<script lang="ts">
	import type { FieldElementId } from '$lib/enums/element-id';
	
	import { ELEMENTS } from '$lib/constant/elements';
	import { changeFieldType } from '$lib/stores/store.svelte';
	import IconNext from '~icons/mdi/arrow-right';
	import IconDown from '~icons/mdi/chevron-down';
	import Select from '../Form/select.svelte';
	import Textarea from '../Form/textarea.svelte';

	interface Props extends Partial<HTMLDivElement> {
		displayBorder: boolean;
		fieldIndex: number;
		fieldType: FieldElementId;
		fieldLabel: string;
		fieldPlaceholder: string;
		onPreview: () => void;
	}

	let { fieldIndex, displayBorder, onclick, fieldType, fieldLabel = $bindable(), fieldPlaceholder, onPreview}: Props =
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
		<span class="text-2xl text-[#3D3D3D]">Q{fieldIndex + 1}</span>
		<IconNext style="font-size: 15px; color: #3D3D3D;" />
	</div>
	<Textarea
		id="{fieldIndex}_label"
		bind:value={fieldLabel}
		placeholder={fieldPlaceholder}
		className="font-light"
	/>
	<button
		class={[
			'group-hover:opacity-100 opacity-0 flex',
			'cursor-pointer items-center justify-center',
			'mr-3 transition-opacity duration-600',
			'text-[#69aead] px-2 py-1',
			'hover:bg-[#f0f7f7] rounded',
		]}
		onclick={onPreview}
	>
		Preview
	</button>
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
