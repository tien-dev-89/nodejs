const newsRouter = require('./news')
const siteRouter = require('./site')


function route(app){
    app.use('/news', newsRouter);
    
    app.use('/news', siteRouter);



}


module.exports = route;