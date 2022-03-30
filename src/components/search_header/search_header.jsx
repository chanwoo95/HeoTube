import React, { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = ({ onChange }) => {
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;
    onChange(value);
    inputRef.current.value = "";
  };

  return (
    <header className={styles.header}>
      <div className={styles.home}>
        <img className={styles.logo} src="images/logo.png" alt="logo" />
        <h2 className={styles.title}>HeoTube</h2>
      </div>
      <form className={styles.form} onSubmit={onSubmit}>
        <input className={styles.input} ref={inputRef} type="search" />
        <button className={styles.button} type="submit">
          <img className={styles.search} src="images/search.png" alt="" />
        </button>
      </form>
      <a href="https://github.com/chanwoo95" target="_blank">
        <img className={styles.profile} src="images/profile.jpg" alt="" />
      </a>
    </header>
  );
};

export default SearchHeader;
