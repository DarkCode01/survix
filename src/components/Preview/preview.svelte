<script lang="ts">
	import { fly } from 'svelte/transition';
	
	import type { Field } from '$lib/types/field';
	import Actions from './actions.svelte';
	import FieldRender from './field-render.svelte';
	import Indicator from './indicator.svelte';
	import Question from './question.svelte';

  interface Props extends Partial<HTMLDivElement> {
    field: Field;
    onNext?: () => void;
    onBack?: () => void;
		withoutActions: boolean;
  }

	// Props
	let {
    field,
    onBack,
    onNext,
		withoutActions
  }: Props = $props();
</script>

<div
	class="flex min-w-1/2 gap-2 items-start"
	in:fly={{ x: 300, duration: 800 }}
	out:fly={{ x: -200, duration: 800 }}
>
	<Indicator questionNumber={field.index + 1} />	

	<div class="flex flex-col gap-6 max-w-[666px] break-all">
		<div class="flex flex-col">
			<div class="col-span-2 flex flex-col gap-10">				
				<Question {...field} />

				<FieldRender {...field} />
			</div>
		</div>

		{#if !withoutActions}
			<Actions {onNext} {onBack} />
		{/if}
	</div>
</div>
