import React, { useState } from "react";

const Question = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [customInput, setCustomInput] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    if (option !== "Other") {
      setCustomInput(""); // Clear custom input if "Other" is not selected
      onAnswer(option); // Send the selected option to the parent
    }
  };

  const handleCustomInputChange = (e) => {
    const value = e.target.value;
    setCustomInput(value);
    onAnswer(value); // Send the custom input value to parent
  };

  return (
    <div
      style={{
        marginBottom: "20px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <p>{question.text}</p>
      {question.type === "dropdown" ? (
        <select
          value={selectedOption}
          onChange={(e) => handleOptionChange(e.target.value)}
          style={{
            marginTop: "10px",
            padding: "5px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <option value="" disabled>
            Select an option
          </option>
          {question.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        question.options.map((option, index) => (
          <label key={index} style={{ display: "block", marginBottom: "5px" }}>
            <input
              type={question.type === "checkbox" ? "checkbox" : "radio"}
              name={question.type === "radio" ? question.text : undefined}
              value={option}
              onChange={() => handleOptionChange(option)}
              checked={selectedOption === option}
            />
            {option}
          </label>
        ))
      )}
      {/* Show custom input for "Other" option */}
      {selectedOption === "Other" && (
        <input
          type="text"
          placeholder="Please specify"
          value={customInput}
          onChange={handleCustomInputChange}
          style={{
            marginTop: "10px",
            padding: "5px",
            width: "100%",
            boxSizing: "border-box",
          }}
        />
      )}
      {/* Show input field for text type questions */}
      {question.type === "text" && (
        <input
          type="text"
          placeholder="Your answer"
          value={customInput}
          onChange={handleCustomInputChange}
          style={{
            marginTop: "10px",
            padding: "5px",
            width: "100%",
            boxSizing: "border-box",
          }}
        />
      )}
    </div>
  );
};

export default Question;
