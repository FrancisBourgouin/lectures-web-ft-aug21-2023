// State: formData
// Props: addReplyToTopic(reply, topicId) => onSubmit(reply, topicId)

import { useState } from "react";

export default function ReplyForm(props) {
  // const [reply, setReply] = useState("")
  const { onSubmit } = props;

  const initialValues = { reply: "" };
  const [formData, setFormData] = useState(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formData);
    setFormData(initialValues);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="ReplyForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your reply"
        name="reply"
        onChange={handleChange}
        value={formData.reply}
      />
      <button>Add reply</button>
    </form>
  );
}
