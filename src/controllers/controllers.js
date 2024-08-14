
let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}
let gethomeview = (req, res) => {
    return res.render('remember/missyou.ejs')
}

module.exports = {
    getHomePage: getHomePage,
    gethomeview: gethomeview,
}