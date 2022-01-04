import request from '@/utils/request';
import API_HOST from '@/utils/apiHost';

export async function create(params) {
    return request(`${API_HOST}/topics`, {
        method: 'POST',
        data: params,
    });
}

export async function getList(params) {
    return request(`${API_HOST}/topics`, {
        params,
    });
}

export async function getDetail(id) {
    return request(`${API_HOST}/topics/${id}`)
}

export async function createComment(id, params) {
    return request(`${API_HOST}/topics/${id}/comments`, {
        method: 'POST',
        data: params,
    })
}

export async function getCommentList(id) {
    return request(`${API_HOST}/topics/${id}/comments`)
}