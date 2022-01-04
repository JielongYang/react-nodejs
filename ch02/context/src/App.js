import React from 'react';
import { ThemeContext, store } from './context.js';

class ChildComponent extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {context => (
                    <div>
                        {context.store.getState().count}
                        <button onClick={() => {
                            context.store.add()
                        }}>
                            Add 1
                        </button>
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }
}
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            store
        }
    }

    _updateState() {
        const state = this.state.store.getState();
        this.setState(state)
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


export default App;
