import React from 'react';

const createStore = (reducer) => {
          let state = { count: 1 };
          let getState = () => state;
          let listeners = [];
          let subscribe = (listener) => listeners.push(listener);
          let dispatch = (action) => {
              state = reducer(state, action);
              listeners.forEach(listener => listener())
          }
          dispatch({});
          return { subscribe, getState, dispatch }
      }
      
      function reducer(state, action) {
          if (!state) {
              state = {
                  count: 1
              }
          }
          switch (action.type) {
              case 'AddOne':
                  state.count++;
                  break;
              case 'MinusThree':
                  state.count = state.count * 3;
                  break;
              case 'DividedByTwo':
                  state.count = state.count / 2;
                  break;
              default:
                  break;
          }
          return { ...state }
      }
      
      export const store = createStore(reducer)
      
      export const ThemeContext = React.createContext({
        store
      });