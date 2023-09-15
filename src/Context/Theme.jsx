import React, { createContext, useEffect, useReducer, useState } from 'react';

export const Theme = createContext();
export const initialState = { theme: !!localStorage.theme ? JSON.parse(localStorage.favs) : [] }

export const AppProvider = ({ children }) => {


    const reducer = (state, action) => {
        switch (action.type) {
            case Global.actionType[0].TOGGLE_THEME:
                return { ...state, theme: !state.theme }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Theme.Provider value={{state, dispatch}}>
            {children}
        </Theme.Provider>
    );
}