import { ComponentType } from "react";

const DefaultLayout = (Component: ComponentType) => {
  return () => {
    return <>
      <main>
        <Component />
      </main>
    </>;
  }
}

export default DefaultLayout;
