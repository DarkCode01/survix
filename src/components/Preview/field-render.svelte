<script lang="ts">
	import { FieldElementId } from "$lib/enums/element-id";
	import type { Field } from "$lib/types/field";
	import { Checkbox, Email, Input, MultiSelect, PhoneNumber, Select, TextArea, YesOrNo } from "./handler.svelte";

  interface Props extends Field {};

  let { ...field }: Props = $props();
</script>

{#if field.type === FieldElementId.SHORT_TEXT}
  {@render Input(field)}
{/if}

{#if field.type === FieldElementId.LARGE_TEXT}
  {@render TextArea(field)}
{/if}

{#if field.type === FieldElementId.EMAIL}
  {@render Email(field)}
{/if}

{#if field.type === FieldElementId.PHONE_NUMBER}
  {@render PhoneNumber(field)}
{/if}

{#if field.type === FieldElementId.RADIO}
  {@render YesOrNo(field)}
{/if}

{#if field.type === FieldElementId.MULTI_SELECT}
  {@render MultiSelect(field)}
{/if}

{#if field.type === FieldElementId.DROPDOWN}
  {@render Select(field)}
{/if}

{#if field.type === FieldElementId.CHECKBOX}
  {@render Checkbox(field)}
{/if}