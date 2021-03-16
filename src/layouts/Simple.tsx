import { ComponentType } from "react";

const SimpleLayout = (Component: ComponentType) => {
  return () => {
    return <>
      <main>
        <Component />
      </main>
    </>;
  }
}

export default SimpleLayout;
