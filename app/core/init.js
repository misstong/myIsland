const requireDirectory = require('require-directory');
const Router = require('koa-router');

class InitManager{
    static init(app) {
        InitManager.app = app;
        InitManager.initLoadRouters()
        InitManager.loadConfig()
    }

    static initLoadRouters() {
        const apiDir = `${process.cwd()}/app/api`
        const modules = requireDirectory(module, apiDir, {
            visit: whenLoadModule
        })
        function whenLoadModule(obj) {
            if (obj instanceof Router) {
                InitManager.app.use(obj.routes())
            }
        }
    }

    static loadConfig() {
        const configPath = process.cwd() + '/app/config/config.js';
        const config = require(configPath);
        global.config = config;
    }
}

module.exports = InitManager;




