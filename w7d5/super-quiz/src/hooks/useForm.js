import { useState } from "react";

export default function useForm(initialValues, onSubmit) {
  const [formData, setFormData] = useState(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();

    for (const key in formData) {
      if (!formData[key]) {
        return;
      }
    }

    onSubmit(formData);

    setFormData(initialValues);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    console.log(formData, event.target.value);

    setFormData({ ...formData, [name]: value });
  };

  return { formData, handleChange, handleSubmit };
}
