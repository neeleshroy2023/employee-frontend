import { useDrop } from "react-dnd";
import TodoApi from "./TodoApi";
import DraggableTodo from "./DraggableTodo";
import "../css/App.css";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

const Todolist = () => {
  const { todo, setTodo } = TodoApi();

  const handleDrop = (id: number, completed: boolean) => {
    setTodo((prevTodos: Todo[]) =>
      prevTodos.map((t: Todo) =>
        t.id === id ? { ...t, completed: !completed } : t
      )
    );
  };

  const [{ isOver: isOverIncomplete }, dropIncomplete] = useDrop(() => ({
    accept: "TODO",
    drop: (item: { id: number; completed: boolean }) =>
      handleDrop(item.id, item.completed),
    collect: (monitor: any) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const [{ isOver: isOverCompleted }, dropCompleted] = useDrop(() => ({
    accept: "TODO",
    drop: (item: { id: number; completed: boolean }) =>
      handleDrop(item.id, item.completed),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div className="container">
      <div
        className="div1"
        ref={dropIncomplete}
        style={{ background: isOverIncomplete ? "#ddd" : "white" }}
      >
        <h2>Incomplete Todo</h2>
        {todo
          .filter((t: Todo) => !t.completed)
          .map((t: Todo) => (
            <DraggableTodo
              key={t.id}
              id={t.id}
              text={t.todo}
              completed={t.completed}
            />
          ))}
      </div>

      <div
        className="div2"
        ref={dropCompleted}
        style={{ background: isOverCompleted ? "#ddd" : "white" }}
      >
        <h2>Completed Todo</h2>
        {todo
          .filter((t: Todo) => t.completed)
          .map((t: Todo) => (
            <DraggableTodo
              key={t.id}
              id={t.id}
              text={t.todo}
              completed={t.completed}
            />
          ))}
      </div>
    </div>
  );
};

export default Todolist;
