import React from "react";
import styled from "styled-components";

const RadioGroup = styled.div`
  label {
    display: block;
    margin-bottom: 10px;
  }
`;

const TextInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Dropdown = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const AnswerElement = ({ inputType, options, onChange }) => {
  switch (inputType) {
    case "radio":
      return (
        <RadioGroup>
          {options.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name="answer"
                value={option}
                onChange={(e) => onChange(e.target.value)}
              />
              {option}
            </label>
          ))}
        </RadioGroup>
      );
    case "text":
      return (
        <TextInput
          type="text"
          placeholder="Enter your answer"
          onChange={(e) => onChange(e.target.value)}
        />
      );
    case "dropdown":
      return (
        <Dropdown onChange={(e) => onChange(e.target.value)}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Dropdown>
      );
    default:
      return null;
  }
};

export default AnswerElement;
