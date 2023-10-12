import { useState } from "react";

export default function CityForm(props) {
  const initialValues = { city: "" };
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(formData);

    setFormData(initialValues);
  };
  return (
    <section className="CityForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="city"
          placeholder="Enter city name"
          value={formData.city}
          onChange={handleChange}
        />
        <button>Fetch Weather</button>
      </form>
    </section>
  );
}
