<script module lang="ts">
	import type { Field } from '$lib/types/field';
	import CheckboxPreview from './Form/checkbox-preview.svelte';
	import DropdownPreview from './Form/dropdown-preview.svelte';
	import EmailPreview from './Form/email-preview.svelte';
	import InputPreview from './Form/input-preview.svelte';
	import MultiSelectPreview from './Form/multi-select/multi-select-preview.svelte';
	import PhonePreview from './Form/phone-preview.svelte';
	import TextareaPreview from './Form/textarea-preview.svelte';
	import YesNoPreview from './Form/yes-or-no/yes-no-preview.svelte';
  
  export { Checkbox, Email, Input, MultiSelect, PhoneNumber, Select, TextArea, YesOrNo };
</script>

{#snippet Input(field: Field)}
  <InputPreview {...field} />
{/snippet}

{#snippet TextArea(field: Field)}
  <TextareaPreview {...field} />
{/snippet}

{#snippet Email(field: Field)}
  <EmailPreview {...field} />
{/snippet}

{#snippet PhoneNumber(field: Field)}
  <PhonePreview {...field} />
{/snippet}

{#snippet YesOrNo(field: Field)}
  <YesNoPreview {...field} />
{/snippet}

{#snippet MultiSelect(field: Field)}
  <MultiSelectPreview {...field} />
{/snippet}

{#snippet Select(field: Field)}
  <DropdownPreview  {...field} />
{/snippet}

{#snippet Checkbox(field: Field)}
  <CheckboxPreview {...field} />
{/snippet}
