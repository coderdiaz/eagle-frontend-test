import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import TasksContext from "@/components/TasksContext";

function MyApp({ Component, pageProps }: AppProps) {
  return <TasksContext>
    <Component {...pageProps} />;
  </TasksContext>
};

export default MyApp;
