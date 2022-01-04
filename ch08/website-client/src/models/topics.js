import { getList } from '@/services/topic';

const namespace = 'topics';
const selectState = state => state[namespace];
const Model = {
    namespace,
    state: {
        topics: [],
        title: ''
    },
    effects: {
        *fetchTopics(_, { call, put, select }) {
            const { title } = yield select(selectState);
            const result = yield call(getList, { title });
            yield put({
                type: 'overrideStateProps',
                payload: { topics: result.data_list }
            })
        },
    },
    reducers: {
        overrideStateProps(state, { payload }) {
            return {
                ...state,
                ...payload,
            };
        },
    },
};

export default Model;