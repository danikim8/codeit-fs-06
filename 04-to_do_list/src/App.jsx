import { useState } from "react";
import NewToDoForm from "./components/NewToDoForm";
import ToDo from "./components/ToDo";

function App() {
  const [todos, setTodos] = useState([]);
  const sortedTodos = [...todos].sort((a, b) => b.id - a.id);

  const addNewTodo = (content) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), content }]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const updateTodo = (id, content) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, content } : todo
    );

    setTodos(updatedTodos);
  };

  return (
    <div className="p-10">
      <h1 className="font-bold text-2xl bg-yellow-400 text-center py-1 rounded-lg mb-5">
        할 일 관리
      </h1>

      <NewToDoForm addNewTodo={addNewTodo} />

      <ol className="flex flex-col gap-y-4 mt-10">
        {sortedTodos.map((todo) => (
          <li key={todo.id}>
            <ToDo todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
