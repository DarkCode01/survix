<script lang="ts">
	import IconCheckbox from '~icons/mdi/checkbox-outline';
	import IconDown from '~icons/mdi/chevron-down';
	import IconEmail from '~icons/mdi/email-outline';
	import IconPhone from '~icons/mdi/phone-outline';
	import IconRadio from '~icons/mdi/radiobox-blank';
	import IconText from '~icons/mdi/text';

	import { FieldElementId } from '$lib/enums/element-id';
	import { fields } from '$lib/stores/store.svelte';
	import ButtonPreview from '../components/Builder/button-preview.svelte';
	import WelcomeField from '../components/Builder/welcome-field.svelte';
	import FormField from '../components/FormField/form-field.svelte';
	import Sidebar from '../components/layout/sidebar.svelte';

	let title = $state('Form title');
	let description = $state('');

	const preview = () => {
		const paylaod = {
			title,
			description,
			fields
		};	
		const encrypted = btoa(JSON.stringify(paylaod));
	
		window.open(`/preview/${encodeURIComponent(encrypted)}`, '_blank');
	}

	$effect(() => {
		console.log($state.snapshot(fields));
	});
</script>

<!-- panel elements -->
<div class="flex h-full">
	<Sidebar
		sections={[
			{
				title: 'text',
				elements: [
					{
						id: FieldElementId.SHORT_TEXT,
						icon: IconText,
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
						icon: IconDown,
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

	<div class="relative flex h-full w-full flex-col items-center overflow-y-scroll bg-[#f7f6f9]">
		<div class="flex w-full max-w-[1370px] flex-col items-center justify-center gap-6 p-6">
			<WelcomeField bind:title bind:description />

			<!-- render fields -->
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

		<ButtonPreview onclick={preview} />
	</div>
</div>
