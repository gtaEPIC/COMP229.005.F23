module.exports.home = function (req, res, next) {
    res.render('index',
        {
            title: 'COMP229',
            username: 'Julio'
        }
    );
}

module.exports.about = function (req, res, next) {
    res.render('index',
        {
            title: 'About',
            username: 'Julio'
        }
    );
}

module.exports.project = function (req, res, next) {
    res.render('projserv',
        {
            title: 'Projects Page',
            projName: 'Website',
            desc: 'This is a example project'
        }
    );
}

module.exports.service = function (req, res, next) {
    res.render('projserv',
        {
            title: 'Services Page',
            projName: 'Web development',
            desc: 'I am able to develop your web application.'
        }
    );
}