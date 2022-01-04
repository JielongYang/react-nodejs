'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ObjectId = Schema.ObjectId;

    const CommentSchema = new Schema({
        content: { type: String },
        topic_id: { type: ObjectId },
        author_name: { type: String },
        create_at: { type: Date, default: Date.now },
        update_at: { type: Date, default: Date.now },
    });

    return mongoose.model('Comment', CommentSchema);
};