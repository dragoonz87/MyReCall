import type { PageLoad } from "./$types";
import type { Flashcard } from "$lib";

export const load: PageLoad = async () => {
	const flashcards: Flashcard[] = await fetch("http://0.0.0.0:8000").then(data => data.json());

	return {
		flashcards,
	};
}
