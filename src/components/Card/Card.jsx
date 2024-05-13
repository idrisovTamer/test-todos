/* eslint-disable react/prop-types */
import styles from './Card.module.css'
const Card = ({ todo, restoreTodo }) => {



  return (
    <div className={styles.Card}>
    <span className={styles.span} >{todo.title}
    <button onClick={restoreTodo} className={styles.button}>восстановить</button>
    </span>
    </div>
  )
}

export default Card;