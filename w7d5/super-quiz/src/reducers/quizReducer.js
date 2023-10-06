export default function quizReducer(state, action) {
  // Actions: change,create,check

  switch (action.type) {
    case "change":
      const maxValue = state.questions.length - 1;
      const randomIndex = Math.round(Math.random() * maxValue);

      return { ...state, currentQuestionId: randomIndex };
    case "create":
      var { question, answer } = action.payload;
      const id = state.questions.length + 1;

      return { ...state, questions: [...state.questions, { id, question, answer }] };

    case "check":
      var { answer } = action.payload;
      if (answer === state.questions[state.currentQuestionId].answer) {
        return {
          ...state,
          score: { points: state.score.points + 1, total: state.score.total + 1 },
        };
      } else {
        return { ...state, score: { ...state.score, total: state.score.total + 1 } };
      }

    default:
      break;
  }
}
