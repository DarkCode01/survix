<script lang="ts">
	import IconCheckbox from '~icons/mdi/checkbox-outline';
	import IconDown from '~icons/mdi/chevron-down';
	import IconEmail from '~icons/mdi/email-outline';

	import IconPhone from '~icons/mdi/phone-outline';
	import IconRadio from '~icons/mdi/radiobox-blank';
	import IconSlide from '~icons/mdi/slideshow';
	import IconText from '~icons/mdi/text';

	import { FieldElementId } from '$lib/enums/element-id';
	import { fields } from '$lib/store.svelte';
	import ButtonPreview from '../components/Builder/button-preview.svelte';
	import WelcomeField from '../components/Builder/welcome-field.svelte';
	import FormField from '../components/FormField/form-field.svelte';
	import Sidebar from '../components/layout/sidebar.svelte';

	let title = $state('Form title');
	let description = $state('');
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
						id: FieldElementId.RADIO,
						icon: IconRadio,
						description: 'Yes / No'
					},
					{
						id: FieldElementId.CHECKBOX,
						icon: IconCheckbox,
						description: 'Checkbox'
					},
					{
						id: FieldElementId.DROPDOWN,
						icon: IconDown,
						description: 'Dropdown'
					}
				]
			},
			{
				title: 'Other',
				elements: [
					{
						id: FieldElementId.WELCOME,
						icon: IconSlide,
						description: 'Welcome Screen'
					}
				]
			},
		]}
	/>

	<div class="h-full w-full bg-[#f7f6f9] relative overflow-y-scroll flex items-center flex-col">
		<div class="flex flex-col items-center justify-center gap-6 p-6 max-w-[1370px] w-full">
			<WelcomeField bind:title bind:description />

			<!-- render fields -->
			{#each fields as field (field.name)}
				<FormField
					{...field}
					bind:label={field.label}
					bind:type={field.type}
					bind:required={field.required}
					bind:description={field.description}
				/>
			{/each}
		</div>

			<ButtonPreview
				onclick={() => {
					const paylaod = {
						title,
						description,
						fields
					}
					const encrypted = btoa(JSON.stringify(paylaod));

					window.open(`/preview/${encodeURIComponent(encrypted)}`, '_blank');
				}}
			/>
	</div>
</div>
