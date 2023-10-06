import useForm from "../hooks/useForm";

export default function QuizForm(props) {
  const { onSubmit, changeQuestion, question } = props;

  const initialValues = { answer: "" };
  const { formData, handleChange, handleSubmit } = useForm(initialValues, onSubmit);

  return (
    <section className="QuizForm">
      <form onSubmit={handleSubmit}>
        <p>{question}</p>
        <input
          type="text"
          name="answer"
          placeholder="Enter your answer"
          value={formData.answer}
          onChange={handleChange}
        />
        <div>
          <button>Answer</button>
          <button onClick={changeQuestion}>Skip</button>
        </div>
      </form>
    </section>
  );
}
