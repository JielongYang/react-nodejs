import { getDetail, getCommentList, createComment } from '@/services/topic';

const namespace = 'topicDetail';
const selectState = state => state[namespace];
const Model = {
    namespace,
    state: {
        id: null,
        topic: {},
        comments: [],
        editingComment: ''
    },
    effects: {
        *getDetail(_, { call, select, put }) {
            const { id } = yield select(selectState);
            const topic = yield call(getDetail, id);
            yield put({ type: 'overrideStateProps', payload: { topic } })
        },
        *getComments(_, { call, select, put }) {
            const { id } = yield select(selectState);
            const comments = yield call(getCommentList, id);
            yield put({ type: 'overrideStateProps', payload: { comments } })
        },
        *createComment(_, { call, select, put }) {
            const { id, editingComment } = yield select(selectState);
            yield call(createComment, id, { content: editingComment });
            yield put({ type: 'getComments' })
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