import { useState, useEffect } from "react";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

const TodoApi = () => {
  const [todo, setTodo] = useState<Todo[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://dummyjson.com/todos?limit=30");
      const data = await response.json();
      setTodo(data.todos);
    };
    getData();
  }, []);

  return { todo, setTodo };
};

export default TodoApi;
