<script lang="ts">
	import { Modals } from 'svelte-modals';
	import '../app.css';
	import Layout from '../components/layout/layout.svelte';
	import Main from '../components/layout/main.svelte';
	
	let { children } = $props();
</script>

<Layout>
	<Modals>
  <!-- shown when any modal is opened -->
			<!-- svelte-ignore element_invalid_self_closing_tag -->
			{#snippet backdrop({ close })}
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					class="fixed top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.50)] z-50"
					onclick={() => close()}
				/>
			{/snippet}
		</Modals>

	<Main>
		<!-- <Header /> -->
		{@render children()}
	</Main>
</Layout>
