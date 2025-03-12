export interface Feedback {
  id: number;
  text: string;
  rating: number;
}

export interface CreateFeedbackDto {
  text: string;
  rating: number;
}

export interface GlobalState {
  feedbacks: Feedback[];
  deleteFeedback: (id: number) => void;
  addFeedback: (feedback: CreateFeedbackDto) => void;
}
