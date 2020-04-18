// importa los articulos desde archivo json
const path = require('path');
const Data = require('../models/data');

// Renderea la pagina inicial
exports.getIndex = function (req, res, next) {
    res.render('index', { title: 'Quilljs saving data' });
};

exports.postData = function (req, res, next) {
    console.log('controller postData');

    const data = new Data({ text: req.body.text });

    console.log('postAddArticle: ' + data);

    data.save();
    res.redirect('/');
}
