import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

interface IDemoContext {
  state: string[];
  setState: Dispatch<SetStateAction<string[]>>;
}
// export const DemoContext = createContext<IDemoContext>({
//   state: [],
//   setState: () => {},
// });
export const DemoContext = createContext({} as IDemoContext);

function DemoContextProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<string[]>(["a", "b", "c", "d", "e", "f"]);




  return (
    <DemoContext.Provider value={{ state, setState }}>
      {children}
    </DemoContext.Provider>
  );
}

export default DemoContextProvider;
