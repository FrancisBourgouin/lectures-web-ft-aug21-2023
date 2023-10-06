import { useState } from "react";
import useWow from "./useWow";

export default function useQuiz(initialQuestions) {
  const [questions, setQuestions] = useState(initialQuestions);
  const [score, setScore] = useState({ points: 0, total: 0 });
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const { sayWow } = useWow();

  const currentQuestion = questions[currentQuestionId];

  const changeQuestion = () => {
    const maxValue = questions.length - 1;

    const randomIndex = Math.round(Math.random() * maxValue);

    setCurrentQuestionId(randomIndex);
  };

  const createQuestion = (formData) => {
    const { question, answer } = formData;
    const id = questions.length + 1;

    setQuestions([...questions, { id, question, answer }]);
  };

  const checkQuestionAnswer = (formData) => {
    const { answer } = formData;
    if (answer === currentQuestion.answer) {
      setScore({ ...score, points: score.points + 1, total: score.total + 1 });
      sayWow();
    } else {
      setScore({ ...score, total: score.total + 1 });
    }

    changeQuestion();
  };

  return { currentQuestion, score, changeQuestion, createQuestion, checkQuestionAnswer };
}
