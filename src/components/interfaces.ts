export interface FlashCardProps {
  id: number;
  question: string;
  answer: string;
  mustKnow?: boolean;
}

export interface FlashCardTableProps {
  flashCards: FlashCardProps[];
}
