const Koa = require('koa')
const InitManager = require('./app/core/init')
const catchError = require('./app/middleware/exception')
const app = new Koa();
app.use(catchError)
InitManager.init(app);

app.listen(3332)