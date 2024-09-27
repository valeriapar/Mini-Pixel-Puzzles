import { createContext, useContext, useReducer } from "react"
import React from 'react'

//Inizializzo il contesto
const GiocatoreContext = createContext()


//Definisco Azione e Reducer
const initialState = {
    idPlayer: Number(localStorage.getItem('ID')),
    idLevel: null,
    score: 0
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_PLAYER':
            return {
                ...state,
                idPlayer: action.payload.idPlayer,
                idLevel: action.payload.idLevel,
                score: action.payload.score
            };
        default:
            throw new Error('Errore');
    }
}


//Creo Provider
export function GiocatoreProvider({ children }) {
    const [ state, dispatch ] = useReducer(reducer, initialState);

    return (
        <GiocatoreContext.Provider value={{ state, dispatch }}>
            {children}
        </GiocatoreContext.Provider>
    )
}

export function usePlayer() {
    const context = useContext(GiocatoreContext);

    if (!context) {
        throw new Error("useGiocatore deve essere utilizzato all'interno di un Giocatore Provider")
    }
    return context;
}