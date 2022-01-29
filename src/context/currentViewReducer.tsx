import { Profile } from "../components/views/Profile";
import { Skills } from "../components/views/Skills";
import { Education } from "../components/views/Education";
import { Experience } from "../components/views/Experience";
import { Contacts } from "../components/views/Contacts";

interface IViewState {
  render: JSX.Element
}


export const pathReducer = (state: IViewState, action: {type: string}) => {
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