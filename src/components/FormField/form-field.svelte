<script lang="ts">
	import { FieldElementId } from '$lib/enums/element-id';
	import type { Field } from '$lib/types/field';

	import Input from '../Form/input.svelte';
	import FormFieldFooter from './form-field-footer.svelte';
	import FormFieldHeader from './form-field-header.svelte';
	import FormFieldOptions from './form-field-options.svelte';

	let {
		label = $bindable(),
		type = $bindable(),
		required = $bindable(),
		description = $bindable(),
		placeholder,
		options,
		index: fieldIndex
	}: Field = $props();

	// toggle information
	let show = $state(true);
</script>

<div
	class={[
		'relative flex w-full flex-col',
		'rounded-lg border-2 border-[#e4e4e4] bg-white',
		'hover:border-[#69aead] hover:shadow-md'
	]}
>
	<FormFieldHeader
		displayBorder={show}
		fieldLabel={label}
		fieldType={type}
		fieldPlaceholder={placeholder}
		{fieldIndex}
		onclick={() => (show = !show)}
	/>

	{#if show}
		<div class="flex flex-col gap-4 px-8 py-4">
			<div class="flex w-full items-center gap-4">
				<Input
					id="{fieldIndex}_description"
					placeholder="Description (optional)"
					value={description}
					className="text-lg italic"
				/>
			</div>
		</div>

		{#if [FieldElementId.CHECKBOX, FieldElementId.DROPDOWN].includes(type)}
			<FormFieldOptions {fieldIndex} {options} />
		{/if}

		<FormFieldFooter {fieldIndex} {required} />
	{/if}
</div>
