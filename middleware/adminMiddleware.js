const adminMiddleware = (req, res, next) => {

    if (req.user.role !== "admin") {
        return res.status(403).send("Access Denied! Admin Only.");
    }

    next();
};

module.exports = adminMiddleware;