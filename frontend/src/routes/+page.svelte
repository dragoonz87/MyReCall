<script lang="ts">
	import type { PageData } from './$types';
	import Flashcard from './Flashcard.svelte';

	export let data: PageData;
</script>

<div class="container h-full mx-auto mt-16">
	<h1 class="h1 text-center">Flashcards</h1>

	<form action="http://0.0.0.0:8000/create/0" method="POST">
		<input class="input" name="key" type="text" placeholder="Key" />
		<input class="input" name="definition" type="text" placeholder="definition" />
		<input type="submit" />
	</form>

	<div class="container mx-auto w-full flex flex-wrap items-center">
		{#each data.flashcards as flashcard}
			<Flashcard {flashcard} />
		{/each}
	</div>
</div>
