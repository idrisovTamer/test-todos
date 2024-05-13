/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './TaskTodo.module.css';
import EditTaskModal from '../EditTaskModal/EditTaskModal';
const TaskTodo = ({ todo, removeTodo, handleSaveTask }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const checkInput = () => setIsChecked(!isChecked);

  const favorite = () => setIsFavorite(!isFavorite);

  const openEditModal = () => setIsEdit(true);

  const closeEditModal = () => setIsEdit(false);

  const handleUpdateTask = (updatedTask) => {
    handleSaveTask(updatedTask);
    closeEditModal();
  };

  return (
    <div className={styles.task}>
      <button
        onClick={favorite}
        className={`${styles.favoriteBtn} ${isFavorite ? styles.active : ''}`}
      >
        ★
      </button>
      <input checked={isChecked} onChange={checkInput} type="checkbox" />
      <span
        style={{
          textDecoration: isChecked ? 'line-through' : 'none',
          color: isFavorite ? 'gold' : 'black',
        }}
      >
        {todo.title}
      </span>
      <button onClick={openEditModal} className={styles.editBtn}>
        ✍🏻
      </button>
      <button onClick={removeTodo} className={styles.deleteBtn}>
        ✖️
      </button>
      {isEdit && (
        <EditTaskModal
          todo={todo}
          closeEditModal={closeEditModal}
          updateTask={handleUpdateTask}
        />
      )}
    </div>
  );
};

export default TaskTodo;
