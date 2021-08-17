import React, { useState } from "react";
import { useHistory } from "react-router-dom";

/**
 *
 */
function ColorForm({ addColor }) {
  const [formData, setFormData] = useState({
    colorCode: "#ffffff",
    colorName: "white",
  });
  const history = useHistory();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    history.push("/colors");
    addColor({"colorName": formData.colorName, "colorCode": formData.colorCode});
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group" style={{ textAlign: "center" }}>
        <label for="colorCode">Color Code</label>
        <input
          type="color"
          name="colorCode"
          value={formData.colorCode}
          onChange={handleChange}
        />

        <label for="colorName">Color Name</label>
        <input
          type="text"
          name="colorName"
          value={formData.colorName}
          required
          onChange={handleChange}
        />

        <button>Add Color</button>
      </div>
    </form>
  );
}

export default ColorForm;
