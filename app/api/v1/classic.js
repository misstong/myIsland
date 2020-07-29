const Router = require('koa-router')

const router = new Router();

router.get("/api/v1/classic", async (ctx)=>{
    throw new Error('test');
    ctx.body = 'success classic';
})

module.exports = router;