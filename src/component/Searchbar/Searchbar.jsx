import { Component } from "react";
import styles from "./searchbar.module.css";

export default class Searchbar extends Component {
  state = {
    tagsName: " ",
  };
  //получаем значение в стейт
  hendleNameChange = (event) => {
    this.setState({ tagsName: event.currentTarget.value.toLowerCase() });
  };

  //записиваем значение в стейт
  hendleSubmit = (event) => {
    event.preventDefault();
    //проверка что не пустая строка
    if (this.state.tagsName.trim() === "") {
      alert("Введите даные для поиска");
      return;
    }
    this.props.onSubmit(this.state.tagsName);
    //очистка поля после сабмита
    this.setState({ tagsName: "" });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.hendleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.tagsName}
            onChange={this.hendleNameChange}
          />
        </form>
      </header>
    );
  }
}
