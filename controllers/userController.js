const showHomePage = (req, res) => {
    res.render('home');
}

const showCategory = (req, res) => { 
    res.render('/user/categories')
}

module.exports = {
    showHomePage,
    showCategory
}