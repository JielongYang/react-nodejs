'use strict';

const Service = require('egg').Service;

class CommentService extends Service {
    async getByTopicId(id) {
        return await this.ctx.model.Comment.find(
            { topic_id: id },
            "",
            { sort: '-top -create_at', }
        ).exec();
    }

    async create(id, body) {
        const author = await this.service.user.getCurrentUser();
        let comment = this.ctx.model.Comment()
        comment.author_name = author.username;
        comment.content = body.content;
        comment.topic_id = id;
        return comment.save();
    }
}

module.exports = CommentService;