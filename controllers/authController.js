

const showRegisterPage = async (req, res) => {
res.render('auth/register');
};
const showLoginPage = (req, res) => {
    res.render("auth/login");
};
module.exports = {
    showRegisterPage,
    showLoginPage
};