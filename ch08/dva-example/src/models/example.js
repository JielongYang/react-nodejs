export default {
    namespace: "example",
    state: {
        count: 0,
    },
    subscriptions: {
        setup({ dispatch, history }) { },
    },
    effects: {},
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
};