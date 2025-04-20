<script lang="ts">
	import '../app.css';
	import Header from '../components/layout/header.svelte';
	import Layout from '../components/layout/layout.svelte';
	import Main from '../components/layout/main.svelte';
	
	let { children } = $props();
</script>

<Layout>
	<Main>
		<!-- <Header /> -->
		{@render children()}
	</Main>
</Layout>
