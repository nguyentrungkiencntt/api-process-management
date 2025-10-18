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
        router.get('/countCompleted/:id', ProcessManageControllers.countCompleted);
        router.get('/countNoCompleted/:id', ProcessManageControllers.countNoCompleted);
        router.get('/count/:id', ProcessManageControllers.count);
        router.get('/all', ProcessManageControllers.getAllTopic);
        router.get('/coin', ProcessManageControllers.getCoin);
        router.post('/createTopic', ProcessManageControllers.createTopic);
        router.post('/create', ProcessManageControllers.create);
        return router;
    }
}

module.exports = new ProcessManageRouter();