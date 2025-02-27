class SiteController {
    // [GET] /news
    index(req, res) {
        res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.send('NEW DETALL!!!');
    }
}

module.exports = new SiteController();
