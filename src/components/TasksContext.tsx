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
  createTask?: (description: string) => void
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
    updateTasks([...tasks, { description, createdAt: Date.now(), done: false }])
  }

  return <Context.Provider value={{
    tasks,
    createTask,
  }}>
    {children}
  </Context.Provider>;
};

export default TasksContext;
