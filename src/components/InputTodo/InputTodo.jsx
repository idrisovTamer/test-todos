/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './InputTodo.module.css';

const InputTodo = ({ addTask }) => {
  const [userInput, setUserInput] = useState('');

  const todoText = (e) => setUserInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.container}>
        <input
          onChange={todoText}
          value={userInput}
          type="text"
          placeholder="Введите текст..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Добавить
        </button>
      </form>
    </>
  );
};

export default InputTodo;
