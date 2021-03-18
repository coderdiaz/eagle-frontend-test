import { createContext, ReactNode, useState } from "react";

interface ITasksContext {
  children?: ReactNode;
}

interface ITask {
  description: string;
  createdAt: number;
  done: boolean;
}

export type ContextValues = {
  tasks?: ITask[];
  createTask?: (description: string) => void;
  removeTask?: (idx: number) => void;
  toggleStatus?: (idx: number) => void;
};

export const Context = createContext<ContextValues>({});

const TasksContext = ({ children }: ITasksContext) => {
  const [tasks, updateTasks] = useState<ITask[]>([{
    description: 'An example task using React',
    createdAt: Date.now(),
    done: false
  }, {
    description: 'Buy a Apple Watch for Mom',
    createdAt: Date.now(),
    done: false
  }, {
    description: 'Create an account in Apple.com',
    createdAt: Date.now(),
    done: false
  }]);

  const createTask = (description: string) => {
    updateTasks([...tasks, { description, createdAt: Date.now(), done: false }]);
  }

  const removeTask = (idx: number) => {
    updateTasks(tasks.filter((_, index) => index !== idx));
  }

  const toggleStatus = (idx: number) => {
    const newArray = [...tasks];
    const task = tasks[idx];
    task.done = !task.done;

    newArray.splice(idx, 1, task);
    updateTasks(newArray);
  }

  return <Context.Provider value={{
    tasks,
    createTask,
    removeTask,
    toggleStatus,
  }}>
    {children}
  </Context.Provider>;
};

export default TasksContext;
