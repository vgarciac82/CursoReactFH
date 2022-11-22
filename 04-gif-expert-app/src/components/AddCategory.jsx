<<<<<<< HEAD
import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}



AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
=======
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
>>>>>>> 00db8db4b2d38759da756ea7a85e019058b99618
}