import Header from './components/Header/Header';
import InputTodo from './components/InputTodo/InputTodo';
import TaskTodo from './components/TaskTodo/TaskTodo';
import { useState, useEffect, useCallback } from 'react';
import './App.css';
import Card from './components/Card/Card';
import { mySort } from './utils/mySort';

function App() {
  const [todos, setTodos] = useState([]);
    // JSON.parse(localStorage.getItem('todolist') || []),
  // );
  const [removedTodos, setRemovedTodos] = useState([]);
    // JSON.parse(localStorage.getItem('removedTodos') || []),
  // );
  const addTask = useCallback((userInput) => {
    if (userInput) {
      const newItem = {
        title: userInput,
        id: Math.round(Math.random() * 1000).toString(),
        completed: false,
      };
      setTodos((prevState) => mySort([...prevState, newItem]));
    }
  },[])

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('removedTodos', JSON.stringify(removedTodos));
  }, [removedTodos]);

  const removeTodo = useCallback((todo) => {
    // так как метод фильтр возвращает массив мы сравниваем и возвращает только
    // тот item которого id не равен нажатому
    setTodos(todos.filter((item) => item.id !== todo.id));
    setRemovedTodos((prevState) => [...prevState, todo]);
  }, []);

  const restoreTodo = useCallback((todo) => {
    setRemovedTodos(prevRemoveTodos=> prevRemoveTodos.filter((item) => item.id !== todo.id));
    setTodos((prevState) => [...prevState, todo]);
  },[])

  const handleSaveTask = useCallback((updatedTask) => {
    setTodos((todos)=> todos.map((task) =>
      task.id === updatedTask.id ? updatedTask : task,
    ));
  },[])

  return (
    <div className="app">
      <Header todos={todos} />
      <InputTodo addTask={addTask} />
      {todos.length ? (
        <div className="flex-todos">
          {todos.map((todo) => (
            <TaskTodo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              handleSaveTask={handleSaveTask}
            />
          ))}
        </div>
      ) : (
        <h1 className="list">Список пуст</h1>
      )}

      <div className="removed-todos">
        <h1>Card: {removedTodos.length}</h1>
        {removedTodos.map((todo) => (
          <Card
            key={todo.id}
            todo={todo}
            restoreTodo={restoreTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
