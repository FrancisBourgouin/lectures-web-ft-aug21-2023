import CurrentScore from "./components/CurrentScore";
import Header from "./components/Header";
import QuestionForm from "./components/QuestionForm";
import QuizForm from "./components/QuizForm";

import useMode from "./hooks/useMode";
import useQuiz from "./hooks/useQuiz";

import "./App.scss";

import { questionArr } from "./data/questions";
import { useReducer } from "react";
import quizReducer from "./reducers/quizReducer";

function App() {
  const { mode, changeMode } = useMode("CREATE");
  // const { currentQuestion, score, changeQuestion, createQuestion, checkQuestionAnswer } =
  //   useQuiz(questionArr);
  const initialState = {
    questions: questionArr,
    score: {
      points: 0,
      total: 0,
    },
    currentQuestionId: 0,
  };
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <>
      <Header changeMode={changeMode} />
      <main>
        {mode === "VIEW" && (
          <>
            <QuizForm
              question={state.questions[state.currentQuestionId].question}
              changeQuestion={() => dispatch({ type: "change" })}
              onSubmit={(formData) => dispatch({ type: "check", payload: formData })}
            />
            <CurrentScore {...state.score} />
          </>
        )}
        {mode === "CREATE" && (
          <QuestionForm
            onSubmit={(formData) => dispatch({ type: "create", payload: formData })}
          />
        )}
      </main>
    </>
  );
}

export default App;
