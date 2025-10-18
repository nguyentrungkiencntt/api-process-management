const services = require("../services/ProcessManage.service");

class ProcessManageController {
    async create(req, res) {
        try {
            const responsive = await services.create(req.body);
            return res.status(200).json(responsive);
        } catch (error) {
            return res.status(500).json({
                error: -1,
                message: "Interal Server Error"
            })
        }
    }

    async createTopic(req, res) {
        try {
            // console.log(req.body);
            const responsive = await services.createTopic(req.body);
            return res.status(200).json(responsive);
        } catch (error) {
            return res.status(500).json({
                error: -1,
                message: "Interal Server Error"
            })
        }
    }

    async updateTitle(req, res) {
        try {
            const { id } = req.params;
            const responsive = await services.updateTitle(id, req.body);
            return res.status(200).json(responsive);
        } catch (error) {
            return res.status(500).json({
                error: -1,
                message: "Interal Server Error"
            })
        }
    }

    async updateCompleted(req, res) {
        try {
            const { id } = req.params;
            const responsive = await services.updateCompleted(id);
            return res.status(200).json(responsive);
        } catch (error) {
            return res.status(500).json({
                error: -1,
                message: "Interal Server Error"
            })
        }
    }

    async countCompleted(req, res) {
        try {
            const {id} = req.params;
            const responsive = await services.countCompleted(id);
            return res.status(200).json(responsive);
        } catch (error) {
            return res.status(500).json({
                error: -1,
                message: "Interal Server Error"
            })
        }
    }

    async countNoCompleted(req, res) {
        try {
            const responsive = await services.countNoCompleted();
            return res.status(200).json(responsive);
        } catch (error) {
            return res.status(500).json({
                error: -1,
                message: "Interal Server Error"
            })
        }
    }

    async count(req, res) {
        try {
            const responsive = await services.count();
            return res.status(200).json(responsive);
        } catch (error) {
            return res.status(500).json({
                error: -1,
                message: "Interal Server Error"
            })
        }
    }

    async getAll(req, res) {
        try {

            const { id } = req.params;

            const responsive = await services.getAll(id);
            return res.status(200).json(responsive);
        } catch (error) {
            return res.status(500).json({
                error: -1,
                message: "Interal Server Error"
            })
        }
    }

    async getCoin(req, res) {
        try {

            const responsive = await services.getCoin();
            return res.status(200).json(responsive);
        } catch (error) {
            return res.status(500).json({
                error: -1,
                message: "Interal Server Error"
            })
        }
    }

    async getAllTopic(req, res) {
        try {
            const responsive = await services.getAllTopic();
            return res.status(200).json(responsive);
        } catch (error) {
            return res.status(500).json({
                error: -1,
                message: "Interal Server Error"
            })
        }
    }

    async getOne(req, res) {
        try {

            const { id } = req.params;

            const responsive = await services.getOne(id);
            return res.status(200).json(responsive);
        } catch (error) {
            return res.status(500).json({
                error: -1,
                message: "Interal Server Error"
            })
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const responsive = await services.delete(id);
            return res.status(200).json(responsive);
        } catch (error) {
            return res.status(500).json({
                error: -1,
                message: "Interal Server Error"
            })
        }
    }
}

module.exports = new ProcessManageController();