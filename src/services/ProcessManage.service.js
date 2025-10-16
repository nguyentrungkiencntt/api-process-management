const db = require("../models");
const v4 = require("../utils/common");

class ProcessManageService {

    async createTopic({ title }) {
        return new Promise(async (relsove, reject) => {

            console.log(title)
            try {
                const responsive = await db.Topic.findOrCreate({
                    where: { title },
                    defaults: {
                        code: v4.generate(12),
                        title,
                        isDelete: false
                    }
                })

                return relsove({
                    error: responsive[1] ? 0 : 1,
                    message: responsive[1] ? 'Tạo chủ đề thành công.' : 'Tạo chủ đề không thành công.'
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    async create({ title, codeTopic }) {
        return new Promise(async (relsove, reject) => {
            try {
                const responsive = await db.Process.findOrCreate({
                    where: { title },
                    defaults: {
                        code: v4.generate(12),
                        codeTopic,
                        title,
                        isDelete: false,
                        isCompleted: false
                    }
                })

                return relsove({
                    error: responsive[1] ? 0 : 1,
                    message: responsive[1] ? 'Tạo nhiệm vụ thành công.' : 'Tạo nhiệm vụ không thành công.'
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    async getAll(codeTopic) {
        return new Promise(async (relsove, reject) => {
            try {
                const responsive = await db.Topic.findOne({
                    where: { code: codeTopic },
                    include: [
                        { model: db.Process, as: "processes" }
                    ],
                    nest: true
                })

                return relsove({
                    error: responsive ? 0 : 1,
                    message: responsive ? 'Lấy tất cả dư liệu thành công.' : 'Lấy tất cả dư liệu không thành công.',
                    data: responsive
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    async getAllTopic() {
        return new Promise(async (relsove, reject) => {
            try {
                const responsive = await db.Topic.findAll({})

                return relsove({
                    error: responsive ? 0 : 1,
                    message: responsive ? 'Lấy tất cả dư liệu thành công.' : 'Lấy tất cả dư liệu không thành công.',
                    data: responsive
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    async getOne(code) {
        return new Promise(async (relsove, reject) => {
            try {
                const responsive = await db.Process.findOne({
                    where: { code }
                })

                return relsove({
                    error: responsive ? 0 : 1,
                    message: responsive ? 'Lấy tất cả dư liệu thành công.' : 'Lấy tất cả dư liệu không thành công.',
                    data: responsive
                })
            } catch (error) {
                reject(error);
            }
        })
    }



    async updateTitle(id, { title }) {
        return new Promise(async (relsove, reject) => {
            try {
                const responsive = await db.Process.update({
                    title
                }, {
                    where: { code: id }
                })

                return relsove({
                    error: responsive ? 0 : 1,
                    message: responsive ? "Câp nhật dư liệu thành công." : "Cập nhât dư liệu không thành công."
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    async updateCompleted(id) {
        return new Promise(async (relsove, reject) => {
            try {
                const responsive = await db.Process.update({
                    isCompleted: true
                }, {
                    where: { code: id }
                })
                return relsove({
                    error: responsive ? 0 : 1,
                    message: responsive ? "Update success!" : "Update fail!"
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    async countCompleted() {
        return new Promise(async (relsove, reject) => {
            try {
                const { count } = await db.Process.findAndCountAll({
                    where: { isCompleted: true }
                })
                return relsove({
                    error: 0,
                    message: "Count success!",
                    count
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    async countNoCompleted() {
        return new Promise(async (relsove, reject) => {
            try {
                const { count } = await db.Process.findAndCountAll({ where: { isCompleted: false } });
                return relsove({
                    error: 0,
                    message: "Count success!",
                    count
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    async count() {
        return new Promise(async (relsove, reject) => {
            try {
                const count = await db.Process.count();
                return relsove({
                    error: 0,
                    message: "Count success!",
                    count
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    async delete(id) {
        return new Promise(async (relsove, reject) => {
            try {
                const responsive = await db.Process.destroy({
                    where: { code: id }
                })

                return relsove({
                    error: responsive ? 0 : 1,
                    message: responsive ? "Xoá thành công." : "Xoá không thành công."
                })
            } catch (error) {
                reject(error);
            }
        })
    }
}

module.exports = new ProcessManageService();