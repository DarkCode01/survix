<script lang="ts">
	
	import IconDown from '~icons/mdi/arrow-down-drop-circle-outline';
	import IconCheckbox from '~icons/mdi/checkbox-outline';
	import IconEmail from '~icons/mdi/email-outline';
	import IconMultiSelect from '~icons/mdi/format-list-checks';
	import IconFormat from '~icons/mdi/format-text';
	import IconPhone from '~icons/mdi/phone-outline';
	import IconRadio from '~icons/mdi/radiobox-blank';
	import IconText from '~icons/mdi/text';

	import { FieldElementId } from '$lib/enums/element-id';
	import { fields } from '$lib/stores/store.svelte';
	import Board from '../components/Builder/board.svelte';
	import Sidebar from '../components/Builder/Sidebar/sidebar.svelte';
	import TopBar from '../components/Builder/top-bar.svelte';
	import FormField from '../components/FormField/form-field.svelte';

	let title = $state('Form title...');
	let description = $state('');

	$effect(() => {
		console.log($state.snapshot(fields));
	});
</script>

<!-- panel elements -->
<div class="flex h-full bg-[#f7f6f9]">
	<Sidebar
		sections={[
			{
				title: 'text',
				elements: [
					{
						id: FieldElementId.SHORT_TEXT,
						icon: IconFormat,
						description: 'Short text'
					},
					{
						id: FieldElementId.LARGE_TEXT,
						icon: IconText,
						description: 'Large text'
					},
					{
						id: FieldElementId.EMAIL,
						icon: IconEmail,
						description: 'Email'
					},
					{
						id: FieldElementId.PHONE_NUMBER,
						icon: IconPhone,
						description: 'Phone number'
					}
				]
			},
			{
				title: 'selection',
				elements: [
					{
						id: FieldElementId.MULTI_SELECT,
						icon: IconMultiSelect,
						description: 'Multi Select'
					},
					{
						id: FieldElementId.DROPDOWN,
						icon: IconDown,
						description: 'Dropdown'
					},
					{
						id: FieldElementId.RADIO,
						icon: IconRadio,
						description: 'Yes / No'
					},
					{
						id: FieldElementId.CHECKBOX,
						icon: IconCheckbox,
						description: 'Checkbox'
					}
				]
			},
			// {
			// 	title: 'Other',
			// 	elements: [
			// 		{
			// 			id: FieldElementId.WELCOME,
			// 			icon: IconSlide,
			// 			description: 'Welcome Screen'
			// 		}
			// 	]
			// }
		]}
	/>

	<div class="relative flex h-full w-full flex-col items-center overflow-y-auto">
		<Board>
			<TopBar bind:title bind:description />

			<div
				class="w-full flex flex-col gap-6"
			>
				{#each fields as field (field.name)}
					<FormField
						{...field}
						bind:label={field.label}
						bind:type={field.type}
						bind:required={field.required}
						bind:description={field.description}
						bind:placeholder={field.placeholder}
					/>
				{/each}
			</div>
		</Board>
	</div>

	<!-- <Attributes /> -->
</div>
