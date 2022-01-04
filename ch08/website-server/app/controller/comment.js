'use strict';

const Controller = require('egg').Controller;

class CommentController extends Controller {
    async getList() {
        const { ctx } = this;
        const { id } = ctx.params;
        ctx.body = await ctx.service.comment.getByTopicId(id)
    }

    async create() {
        const { ctx } = this;
        const { id } = ctx.params;
        const { body } = ctx.request;
        await ctx.service.comment.create(id, body)
        ctx.body = { status: 'ok' }
    }
}

module.exports = CommentController;