import { useState } from "react";
import style from "./Searchbar.module.css";
import propTypes from "prop-types";

function Searchbar({ onSubmit }) {
  const [text, setText] = useState("");

  function handleInputChange(event) {
    setText(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    onSubmit(text);
  }

  return (
    <header className={style.Searchbar}>
      <form className="SearchForm" onSubmit={handleFormSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          name="text"
          value={text}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: propTypes.func,
};

export default Searchbar;
