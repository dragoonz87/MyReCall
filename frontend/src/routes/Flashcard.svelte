<script lang="ts">
	import { FlashcardSide, type Flashcard } from '$lib';

	const flipFlashcard = () => {
		switch (flashcardSide) {
			case FlashcardSide.Front:
				flashcardSide = FlashcardSide.Back;
				break;
			case FlashcardSide.Back:
				flashcardSide = FlashcardSide.Front;
				break;
		}
	};

	/*
	const deleteFlashcard = async (id: number) => {
		await fetch(`http://0.0.0.0:8000/delete/${id}`);
		invalidateAll();
	};
	*/

	export let flashcard: Flashcard;
	export let flashcardSide: FlashcardSide = FlashcardSide.Front;
</script>

<div
	class="card text-center place-content-center px-8 py-4 min-w-4 min-h-2 m-2"
	on:click={flipFlashcard}
	role={`flashcard ${flashcard.key}`}
>
	{#if flashcardSide == FlashcardSide.Front}
		<p class="pt-20p">{flashcard.key}</p>
	{:else}
		<p class="pt-20p">{flashcard.definition}</p>
	{/if}
	<!--
	<button
		class="btn variant-filled-primary"
		on:click|stopPropagation={() => deleteFlashcard(flashcard.id)}>Delete</button
	>
		-->
</div>
