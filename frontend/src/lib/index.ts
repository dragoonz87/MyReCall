export type Flashcard = {
	id: number,
	key: string,
	definition: string,
};

export enum FlashcardSide {
	Front,
	Back,
}
