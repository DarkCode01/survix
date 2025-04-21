<script lang="ts">
	
	import Preview from '../../../components/Preview/preview.svelte';

	// Props
	let { data: formInformation } = $props();

	// Manage form flow
	let visible = $state(true);
	let currentQuestion: number = $state(0);
	let _prevQuestion: number = $state(-1);
	let field = $derived(formInformation.fields[currentQuestion]);
	let isLast = $derived(currentQuestion === formInformation.fields.length - 1);
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
		<div class="flex flex-col items-center gap-10">
			<div class="flex w-full flex-col items-center gap-2 text-center">
				<h1 class="flex items-center gap-2 text-center text-3xl font-normal text-[#3D3D3D]">
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
		<Preview
			{field}
			onBack={() => console.log('back')}
			onNext={() => {
				if (!isLast) {
					nextQuestion();
					return;
				}

				alert(isLast);
			}}
		/>
	{/if}
</div>
