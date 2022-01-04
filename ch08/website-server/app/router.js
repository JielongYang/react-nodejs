'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    const jwt = app.middleware.jwt(app.config.jwt);
    router.post('/register', controller.user.register);
    router.post('/login', controller.user.login);
    router.post('/topics', jwt, controller.topic.create);
    router.get('/topics', jwt, controller.topic.getList);
    router.get('/topics/:id', jwt, controller.topic.getById);
    router.post('/topics/:id/comments', jwt, controller.comment.create);
    router.get('/topics/:id/comments', jwt, controller.comment.getList);
};
