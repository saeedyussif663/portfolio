import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const initialState = {
        isModalopen: false,
    }

    const reducerFn = (state, action) => {
        if (action.type === "TOGGLE") {
            return {
                isModalopen: !state.isModalopen
            }
        }

        if (action.type === "CLOSE") {
            return {
                isModalopen: false
            }
        }

        return state
    }
    
    
    const [state, dispatch] = useReducer(reducerFn, initialState);

      const openNavBar = () => {
          dispatch({ type: "TOGGLE" });
        }
    
    const closeNavBar = () => {
        dispatch({ type: "CLOSE" });
     }

    return (
        <AppContext.Provider value={{state, openNavBar, closeNavBar}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }

export const useGlobalContext = () => {
    return useContext(AppContext)
}