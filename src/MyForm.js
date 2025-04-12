// src/MyForm.js
import React from "react";
import useInput from "./useInput"; // Import the custom hook

function MyForm() {
  const nameInput = useInput(""); // Using the custom hook for the name input
  const emailInput = useInput(""); // Using the custom hook for the email input

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Name:", nameInput.value);
    console.log("Email:", emailInput.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        {...nameInput} // Using the custom hook to bind the input
      />
      <input
        type="email"
        placeholder="Enter your email"
        {...emailInput} // Using the custom hook to bind the input
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
