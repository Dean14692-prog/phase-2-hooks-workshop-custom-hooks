import { act } from "react"; // ✅ Use this, NOT from 'react-dom/test-utils'
import { render, screen, fireEvent } from "@testing-library/react";
import MyForm from "../MyForm";

test("it captures form input values using act", () => {
  let nameInput, emailInput;

  act(() => {
    render(<MyForm />);
    nameInput = screen.getByPlaceholderText("Enter your name");
    emailInput = screen.getByPlaceholderText("Enter your email");

    fireEvent.change(nameInput, { target: { value: "John" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
  });

  expect(nameInput.value).toBe("John");
  expect(emailInput.value).toBe("john@example.com");
});
