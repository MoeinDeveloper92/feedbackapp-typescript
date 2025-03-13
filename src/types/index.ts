export interface Feedback {
  id?: string;
  text: string;
  rating: number;
}

export interface CreateFeedbackDto {
  text: string;
  rating: number;
}

export interface GlobalState {
  feedbacks: Feedback[];
  feedbackEdit: EditableFeedback;
  addFeedback: (feedback: CreateFeedbackDto) => void;
  editFeedback: (item: Feedback) => void;
  deleteFeedback: (id: string) => void;
  updateFeedback: (id: string, updFeedback: Feedback) => void;
}

export interface EditableFeedback {
  item?: Feedback;
  edit?: boolean;
}
