const Course = require('../models/Course');
const { mutibleMongooseToObject } = require("../../util/mongoose");

class SiteController {
    // [GET] /news
    async index(req, res, next){
        // try {
        //     const courses = await Course.find({});
        //     res.json(courses);
        // } catch (err) {
        //     res.status(400).json({ error: 'error!' });
        // }

        Course.find({})
            .then(courses => {
                // courses = courses.map(course => course.toObject());
                res.render('home', { 
                    courses: mutibleMongooseToObject(courses)
                })
            })
            .catch(next)
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
