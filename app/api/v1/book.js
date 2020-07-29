const Router = require('koa-router');
const { PositiveIntegerValidator } = require('../validators/validator');


const router = new Router();

router.get("/api/v1/book", async (ctx)=>{
    ctx.body = 'success book';
})

router.get("/api/:book_id/book", async (ctx)=>{
    const v = await new PositiveIntegerValidator().validate(ctx, {
        id: 'book_id'
    })
    ctx.body = v;
})
module.exports = router;