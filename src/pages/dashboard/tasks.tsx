import Task from "@/components/Task";
import { Context, ContextValues } from "@/components/TasksContext";
import DefaultLayout from "@/layouts/Default";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  description: string;
}

const TasksPage = () => {
  const [tabSelected, setTabSelected] = useState<null|false|true>(null);
  const { tasks, createTask } = useContext(Context) as ContextValues;
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    createTask(data.description);
    reset();
  }

  const selectOption = (option: null|false|true) => setTabSelected(option);

  return <>
    <section className="px-6">
      <div className="block">
        <div className="align-middle inline-block min-w-full border-b border-gray-200">
          <div className="flex space-x-3">
            <div className="w-80">
              <ul className="flex flex-col space-y-3 mb-6">
                <li>
                  <button onClick={() => selectOption(null)} className={`flex w-full rounded items-center space-x-6 font-semibold px-4 py-3 hover:bg-blueGray-500 hover:bg-opacity-30 ${ tabSelected === null ? 'bg-blueGray-300': null}`}>
                    <svg className="w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    Todas
                  </button>
                </li>
                <li>
                  <button onClick={() => selectOption(false)} className={`flex w-full rounded items-center space-x-6 font-semibold px-4 py-3 hover:bg-blueGray-500 hover:bg-opacity-30 ${ tabSelected === false ? 'bg-blueGray-300': null}`}>
                    <svg className="w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Por hacer
                  </button>
                </li>
                <li>
                  <button onClick={() => selectOption(true)} className={`flex w-full rounded items-center space-x-6 font-semibold px-4 py-3 hover:bg-blueGray-500 hover:bg-opacity-30 ${ tabSelected ? 'bg-blueGray-300': null}`}>
                    <svg className="w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Completadas
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-3 px-3 h-screen w-full border-l border-blueGray-300">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center space-x-3">
                  <input
                    name="description"
                    ref={register({ required: true })}
                    className="flex flex-1 w-full px-4 py-3 rounded"
                    type="text"
                    placeholder="??Qu?? vas a hacer hoy?" />
                  <button type="submit" className="px-6 py-3 text-center shadow-sm bg-gray-500 text-gray-50 font-semibold rounded">Crear tarea</button>
                </div>
              </form>
              { tabSelected === null
                  ? tasks.map((task, index) => <Task 
                    key={index}
                    index={index}
                    done={task.done}
                    description={task.description}
                   />)
                  : tasks.filter(task => task.done === tabSelected)
                      .map((task, index) => <Task 
                        key={index}
                        index={index}
                        description={task.description}
                        done={task.done} 
                      />) }
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default DefaultLayout(TasksPage, {
  title: 'Tareas',
});
