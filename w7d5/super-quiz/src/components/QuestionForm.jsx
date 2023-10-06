import useForm from "../hooks/useForm";

export default function QuestionForm(props) {
  const initialValues = { question: "", answer: "" };

  const { formData, handleChange, handleSubmit } = useForm(initialValues, props.onSubmit);

  return (
    <section className="QuestionForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="question"
          placeholder="Enter your question"
          onChange={handleChange}
          value={formData.question}
        />
        <input
          type="text"
          name="answer"
          placeholder="Enter your answer"
          onChange={handleChange}
          value={formData.answer}
        />
        <button>Add the question</button>
      </form>
    </section>
  );
}
