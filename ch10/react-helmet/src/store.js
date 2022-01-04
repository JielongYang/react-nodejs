import { createStore } from 'redux';

const reducer = (state = { list: ['item1', 'item2'] }, action) => {
    return state;
}

const getStore = () => {
    return createStore(reducer);
};

export default getStore;