import React, {createContext, ReactChildren, useReducer, ReactChild} from "react";
import { Profile } from "../components/views/Profile";
import { pathReducer } from "./currentViewReducer";


interface IContextProps {
  render: JSX.Element
  dispatchView: React.Dispatch<{type: string}>
}

export const ViewContext = createContext({} as IContextProps);

const initState = {
  render: <Profile />
}


export const ViewContextProvider = ({children}: 
  {children: ReactChild | ReactChild[] | ReactChildren}
  ) => {
  const [state, dispatch] = useReducer(pathReducer, initState);

  return (
    <ViewContext.Provider value={{render: state.render, dispatchView: dispatch}}>
      {children}
    </ViewContext.Provider>
  )
}
