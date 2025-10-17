const express = require("express");
const router = express.Router();
const ProcessManageControllers = require("../controllers/ProcessManage.controller");

class ProcessManageRouter {
    init() {
        router.delete('/delete/:id', ProcessManageControllers.delete);
        router.put('/updateTitle/:id', ProcessManageControllers.updateTitle);
        router.put('/updateCompleted/:id', ProcessManageControllers.updateCompleted);
        router.get('/all/:id', ProcessManageControllers.getAll);
        router.get('/one/:id', ProcessManageControllers.getOne);
        router.get('/all', ProcessManageControllers.getAllTopic);
        router.get('/coin', ProcessManageControllers.getCoin);
        router.get('/countCompleted', ProcessManageControllers.countCompleted);
        router.get('/countNoCompleted', ProcessManageControllers.countNoCompleted);
        router.get('/count', ProcessManageControllers.count);
        router.post('/createTopic', ProcessManageControllers.createTopic);
        router.post('/create', ProcessManageControllers.create);
        return router;
    }
}

module.exports = new ProcessManageRouter();