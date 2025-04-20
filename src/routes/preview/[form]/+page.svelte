<script lang="ts">
	import { FieldElementId } from '$lib/enums/element-id';
	import { fly } from 'svelte/transition';
	import {
		Checkbox,
		Email,
		Input,
		PhoneNumber,
		Radio,
		Select,
		TextArea
	} from '../../../components/Preview/handler.svelte';

	import IconPrev from '~icons/mdi/navigate-before';
	import IconNext from '~icons/mdi/navigate-next';

	// Props
	let { data: formInformation } = $props();

	// Manage form flow
	let visible = $state(true);
	let currentQuestion: number = $state(0);
	let _prevQuestion: number = $state(-1);
	let field = $derived(formInformation.fields[currentQuestion]);
	let isLast = $derived(currentQuestion === (formInformation.fields.length - 1));
	let showWelcome = $state(!!formInformation.title);

	const nextQuestion = () => {
		const nextQuestion = currentQuestion + 1;
		const temp = currentQuestion;

		_prevQuestion = temp;
		currentQuestion = nextQuestion;

		startTransition();
	};

	const prevQuestion = () => {
		const newPrev = _prevQuestion - 1;

		if (newPrev > -1) {
			currentQuestion = _prevQuestion;
			_prevQuestion = newPrev;
		}

		startTransition();
	};

	const startTransition = () => {
		// slide out curren last question
		visible = false;

		// auto display the next question
		setTimeout(() => (visible = true), 1000);
	};
</script>

<div class="relative flex h-full w-full items-center justify-center bg-white p-6">
	<div class="absolute top-0 h-1 w-full bg-[#4FB0AE]"></div>

	{#if showWelcome}
		<div class="flex flex-col gap-10 items-center">
			<div class="flex flex-col gap-2 w-full text-center items-center">
				<h1
					class="flex text-center items-center gap-2 text-3xl font-normal text-[#3D3D3D]"
				>
					{formInformation.title}
				</h1>

				{#if formInformation.description}
					<p class="text-2xl font-light text-[#777777]">{formInformation.description}</p>
				{/if}
			</div>

			<div class="flex items-center justify-between">
				<button
					class="w-fit cursor-pointer rounded bg-[#4FB0AE] px-4 py-2 text-2xl font-bold text-white shadow-2xl"
					onclick={() => {
						showWelcome = false;
					}}
				>
					Start
				</button>
				</div>
			</div>
	{/if}

	{#if !showWelcome && visible}
		<div
			class="relative flex min-w-1/2 flex-col gap-10 rounded-lg"
			in:fly={{ x: 300, duration: 800 }}
			out:fly={{ x: -200, duration: 800 }}
		>
			<div class="flex flex-col gap-6">
				<div class="flex flex-col">
					<div class="col-span-2 flex flex-col gap-10">
						<div class="flex flex-col gap-2 w-full">
							<label
								for={field.name}
								class="flex items-center gap-2 text-3xl font-normal text-[#3D3D3D]"
							>
								{field.label}

								{#if field.required}
									<span class="text-red-500">*</span>
								{/if}
							</label>

							{#if field.description}
								<span class="text-2xl font-light text-[#777777]">{field.description}</span>
							{/if}
						</div>

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
					</div>
				</div>

				<div class="flex items-center justify-between">
					<button
						class="w-fit cursor-pointer rounded bg-[#4FB0AE] px-4 py-2 text-2xl font-bold text-white shadow-2xl"
						onclick={() => {
							// conso
							if (!isLast) {
								nextQuestion();
								return
							}

							alert(isLast);
						}}
					>
						Continue
					</button>

					<div>
						<button
							class={[
								'w-fit rounded bg-[#4FB0AE] px-4 py-2 text-2xl',
								'cursor-pointer font-bold text-white shadow-2xl',
								'hover:bg-[#529796]'
							]}
						>
							<IconPrev />
						</button>
						<button
							class={[
								'w-fit rounded bg-[#4FB0AE] px-4 py-2 text-2xl',
								'cursor-pointer font-bold text-white shadow-2xl',
								'hover:bg-[#529796] disabled:pointer-events-none disabled:cursor-not-allowed'
							]}
							disabled={true}
						>
							<IconNext />
						</button>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
