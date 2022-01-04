import React from 'react';
  import { ThemeContext, store } from './context.js';
  import ChildComponent from './ChildComponent.js';
 
 export default class App extends React.Component {
     constructor() {
          super();
          this.state = {
              store
          }
      }
  
      _updateState() {
          const state = this.state.store.getState();
          this.setState(state);
      }
  
      componentDidMount() {
          this.state.store.subscribe(() => this._updateState())
      }
  
      render() {
          return (
              <ThemeContext.Provider value={{ store: this.state.store }}>
                  <ChildComponent />
              </ThemeContext.Provider>
          )
      }
  }