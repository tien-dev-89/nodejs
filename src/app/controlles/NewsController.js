class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.render('search');
    }
}

// const NewC = {
//      // [GET] /news
//      index(req, res) {
//         res.render('news');
//     },

//     // [GET] /news/:slug
//     show(req, res) {
//         res.render('search');
//     }
// }

module.exports = new NewsController();
// module.exports = NewC();
