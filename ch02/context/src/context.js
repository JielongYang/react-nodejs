import React from 'react';

const createStore = () => {
    let state = { count: 1 };
    let getState = () => state;
    let listeners = [];
    let subscribe = (listener) => listeners.push(listener);
    let add = () => {
        state.count++;
        listeners.forEach(listener => listener())
    }
    return { subscribe, getState, add }
}

export const store = createStore();

export const ThemeContext = React.createContext({
    store
});