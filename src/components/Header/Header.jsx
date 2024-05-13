/* eslint-disable react/prop-types */
import styles from './Header.module.css';

const Header = ({ todos }) => {
  return (
    <div className={styles.header}>
      <h1>Список задач: {todos.length}</h1>
    </div>
  );
};

export default Header;
