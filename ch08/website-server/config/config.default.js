/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1595554400793_1984';

    // add your middleware config here
    config.middleware = [];

    config.mongoose = {
        client: {
            url: 'mongodb://127.0.0.1:27017',
            options: {},
        }
    };

    config.jwt = {
        secret: "jwt_secret"
    };

    config.cors = {
        origin: 'http://reactnode.com',
        credentials: true,
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };

    const userConfig = {
        security: {
            csrf: {
                enable: false
            }
        },
        domainWhiteList: ['http://reactnode.com'],
    };

    return {
        ...config,
        ...userConfig,
    };
};
