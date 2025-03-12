import React from 'react';

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
  setFeedbacks: React.Dispatch<React.SetStateAction<Feedback[]>>;
}
