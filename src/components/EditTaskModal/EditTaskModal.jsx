import React, { useState } from 'react';
import styles from './EditTaskModal.module.css';

const EditTaskModal = React.memo(({ closeEditModal, todo, updateTask }) => {
  const [newTitle, setNewTitle] = useState(todo.title);

  const todoText = (e) => setNewTitle(e.target.value);

  const onSave = (e) => {
    e.preventDefault();
    const updatedTask = { ...todo, title: newTitle };
    updateTask(updatedTask);
    closeEditModal();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Редактировать</h2>
        <input
          onChange={todoText}
          type="text"
          placeholder="введите текст..."
          className={styles.input}
          value={newTitle}
        />
        <div className={styles.buttonContainer}>
          <button onClick={onSave} className={styles.saveButton}>
            Сохранить
          </button>
          <button onClick={closeEditModal} className={styles.cancelButton}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
})

export default EditTaskModal;
