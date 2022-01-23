import React, {createContext, ReactChildren, useReducer, ReactChild} from "react";
import { Profile } from "../components/views/Profile";
import { Skills } from "../components/views/Skills";
import { Education } from "../components/views/Education";
import { Experience } from "../components/views/Experience";
import { Contacts } from "../components/views/Contacts";


interface IContextProps {
  render: JSX.Element
  dispatchView: React.Dispatch<{type: string}>
}

interface IViewState {
  render: JSX.Element
}


export const ViewContext = createContext({} as IContextProps);

const initState = {
  render: <Profile />
}

const pathReducer = (state: IViewState, action: {type: string}) => {
  switch(action.type) {
    case 'profile' : {
      return Object.assign({}, state, {
        render: <Profile />
      })
    }
      case 'skills' : {
        return Object.assign({}, state, {
          render: <Skills />
        })
    }
      case 'education' : {
        return Object.assign({}, state, {
          render: <Education />
        })
    }
      case 'experience' : {
        return Object.assign({}, state, {
          render: <Experience />
        })
    }
        case 'contacts' : {
      return Object.assign({}, state, {
        render: <Contacts />
      })
    }
    default:
      return state
    }
  }


export const ViewContextProvider = ({children}: {children: ReactChild | ReactChild[] | ReactChildren}) => {
  const [state, dispatch] = useReducer(pathReducer, initState);


  return (
    <ViewContext.Provider value={{render: state.render, dispatchView: dispatch}}>
      {children}
    </ViewContext.Provider>
  )
}
