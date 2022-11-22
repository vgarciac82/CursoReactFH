import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory  }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChanged = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

  
    onNewCategory(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar..."
        value={inputValue}
        onChange={onInputChanged}
      />
    </form>
  );
};


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}