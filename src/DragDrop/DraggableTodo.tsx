import { useDrag } from "react-dnd";

interface DraggableTodoProps {
  id: number;
  text: string;
  completed: boolean;
}

const DraggableTodo = ({ id, text, completed }: DraggableTodoProps) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "TODO",
    item: { id, completed },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <p
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: "8px",
        margin: "5px",
        backgroundColor: completed ? "#90EE90" : "#FFCCCB",
        border: "1px solid black",
        cursor: "grab",
      }}
    >
      {text}
    </p>
  );
};

export default DraggableTodo;
