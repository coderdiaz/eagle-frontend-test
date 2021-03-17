import "tailwindcss/tailwind.css";
import Router from "next/router";
import type { AppProps } from "next/app";
import TasksContext from "@/components/TasksContext";
import { parseCookies } from "nookies";

const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return <TasksContext>
    <Component {...pageProps} />
  </TasksContext>
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const jwt = parseCookies(ctx).jwt;

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  if (!jwt) {
    if (ctx.pathname !== "/") {
      redirectUser(ctx, "/");
    }
  }

  return { pageProps };
}

export default MyApp;
