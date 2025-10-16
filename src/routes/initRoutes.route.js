const initProcessManageRoutes = require("./ProcessManage.route");

class InitRoutes {

    notRoute(req, res) {
        return res.status(201).json("Không tìm thấy đường.");
    }

    init(app) {
        app.use("/process", initProcessManageRoutes.init());
        return app.use('/', this.notRoute)
    }
}

module.exports = new InitRoutes();