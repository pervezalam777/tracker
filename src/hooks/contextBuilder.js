import React, { useReducer, useContext } from 'react'

export default (reducer, initialState, actions, stateKey='state') => {
    const Context = React.createContext();

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initialState)

        const actionDispatcher = {};
        for (const key in actions) {
           actionDispatcher[key] = actions[key](dispatch);
        }

        return <Context.Provider value={{[stateKey]:state, ...actionDispatcher}}>
            {children}
        </Context.Provider>
    }

    const withContext = (Component) => {
        return (props) => {
            const data = useContext(Context);
            return <React.Fragment>
                <Component {...props} {...data} />
            </React.Fragment>
        }
    }

    return [withContext, Provider]

}