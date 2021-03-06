import { ComponentType, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Sidebar from "@/components/Sidebar";
import { Context, ContextValues } from "@/components/TasksContext";
import UserConfig from "@/components/UserConfig";
import useInactive from "../hook/useInactive";
import Modal from "@/components/Modal";

type ILayoutOptions = {
  title: string;
}

const DefaultLayout = (Component: ComponentType, options: ILayoutOptions) => {
  return () => {
    const [isShowed, setIsShowed] = useState(false);
    const { tasks } = useContext(Context) as ContextValues;
    const router = useRouter();

    const { inactive } = useInactive(60, 120, () => {
      Cookies.remove("jwt");
      router.push("/");
    });

    const toggle = () => {
      setIsShowed(!isShowed);
    };

    useEffect(() => {
      if (inactive) {
        if (!isShowed) {
          toggle()
        }
      }

      return () => {
        setIsShowed(false);
      }
    }, [inactive]);

    return <>
      <div className="h-screen flex overflow-hidden">
        <Sidebar />
        <main className="flex flex-col flex-1 w-0 overflow-hidden">
          <div className="flex px-6 py-6 justify-between items-center">
            <div>
              <span className="text-xl font-bold text-blueGray-600">{options.title}</span>
            </div>
            <nav className="px-3">
              <div className="flex space-x-4">
                <div className="flex px-3 border-r border-gray-300">
                  <a href="#" className="px-2 py-1 text-gray-500">
                    <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </a>
                  <a href="#" className="px-2 py-1 text-gray-500 relative">
                    <svg className="w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="inline-flex rounded-full bg-blue-600 text-white w-5 text-xs items-center justify-center absolute top-0 right-0 border-2 border-blueGray-200">{tasks.filter(task => !task.done).length}</span>
                  </a>
                </div>
                <UserConfig />
              </div>
            </nav>
          </div>
          <Component />
        </main>
      </div>
      { isShowed ? <Modal onClick={toggle} /> : null }
    </>;
  }
}

export default DefaultLayout;
