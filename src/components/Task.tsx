import { useContext } from "react";
import { Context, ContextValues } from "./TasksContext";

interface ITaskProps {
  description: string;
  index: number;
  done: boolean;
}

const Task = ({ description, index, done }: ITaskProps) => {
  const { removeTask, toggleStatus } = useContext(Context) as ContextValues;

  return <div className="flex items-center justify-between px-7 py-5 bg-white rounded w-full shadow-sm">
    <div className="flex items-center">
      <input
        checked={done}
        onChange={() => toggleStatus(index)}
        className="mr-3 rounded text-blue-500 h-5 w-5"
        type="checkbox" />
      {description}
    </div>
    <button onClick={() => removeTask(index)}>
      <svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </button>
  </div>;
}

export default Task;
