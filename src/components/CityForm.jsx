// Question: What is a controlled form?
// Answer: A controlled form is a form where the form data is handled by the component's state.

import { useState } from "react";
function CityForm({ handleUpdateCity }) {
  const [formData, setFormData] = useState({
    name: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Question: Why should we use a callback here?
    // Answer: Because we are updating state based on the previous state.
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateCity(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>City Name:</label>
      <input name="name" value={formData.name} onChange={handleChange}></input>
      <label>Latitude:</label>
      <input
        name="latitude"
        value={formData.latitude}
        onChange={handleChange}
      ></input>
      <label>Longitude:</label>
      <input
        name="longitude"
        value={formData.longitude}
        onChange={handleChange}
      ></input>
      <input type="submit" value="Add City"></input>
    </form>
  );
}

export default CityForm;
