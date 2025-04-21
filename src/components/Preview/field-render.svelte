<script lang="ts">
	import { FieldElementId } from "$lib/enums/element-id";
	import type { Field } from "$lib/types/field";
	import { Checkbox, Email, Input, PhoneNumber, Radio, Select, TextArea } from "./handler.svelte";

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
  {@render Radio(field)}
{/if}

{#if field.type === FieldElementId.CHECKBOX}
  {@render Checkbox(field)}
{/if}

{#if field.type === FieldElementId.DROPDOWN}
  {@render Select(field)}
{/if}