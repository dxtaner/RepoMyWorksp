const Koa = require('koa');
const app = new Koa();

const Router=require('koa-router')
const router=new Router();

router.get('/',(ctx)=>{
    ctx.body="<h1>index sayfasına hoşgeldiniz.</h1>",
    ctx.status=200;
})

router.get('/about',(ctx)=>{
    ctx.body="<h1>hakkimda sayfasına hoşgeldiniz.</h1>",
    ctx.status=200;    
})

router.get('/contact',(ctx)=>{
    ctx.body="<h1>iletişim sayfasına hoşgeldiniz.</h1>",
    ctx.status=200;   
})

router.get('*', (req, res) => {
    ctx.body="<h1>Sayfa Bulunamadı 404</h1>",
    ctx.status=404;
})

app.use(router.routes())

// app.listen(3000);

app.listen(port, ()=> {
    console.log(`Sunucu port ${port} da çalışmaya başladı...`)
})