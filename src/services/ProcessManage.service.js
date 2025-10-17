const db = require("../models");
const v4 = require("../utils/common");

const KEY_COIN = 'S2LBG4AYEB8MV';
class ProcessManageService {

    async createTopic({ title }) {
        return new Promise(async (relsove, reject) => {
            try {
                const responsive = await db.Topic.findOrCreate({
                    where: { title },
                    defaults: {
                        code: v4.generate(12),
                        title,
                        isDelete: false
                    }
                })

                const coin = await db.Coin.findOne({
                    where: { code: KEY_COIN },
                    raw: true
                })

                const addCoin = 2500 + (+coin?.coin);

                responsive[1] = await db.Coin.update({
                    coin: addCoin,
                }, { where: { code: KEY_COIN } })

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

                const coin = await db.Coin.findOne({
                    where: { code: KEY_COIN },
                    raw: true
                })

                const addCoin = (+coin?.coin) - 50525;

                responsive[1] = await db.Coin.update({
                    coin: addCoin,
                }, { where: { code: KEY_COIN } })



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
                    where: {
                        code: codeTopic,
                        isDelete: true
                    },
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

                const coin = await db.Coin.findOne({
                    where: { code: KEY_COIN },
                    raw: true
                })

                const addCoin = (+coin?.coin) - 5255;

                responsive[1] = await db.Coin.update({
                    coin: addCoin,
                }, { where: { code: KEY_COIN } })


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

                const coin = await db.Coin.findOne({
                    where: { code: KEY_COIN },
                    raw: true
                })

                const addCoin = (+coin?.coin) - 100000;

                responsive[1] = await db.Coin.update({
                    coin: addCoin,
                }, { where: { code: KEY_COIN } })


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

    async getCoin() {
        return new Promise(async (relsove, reject) => {
            try {
                const coinDB = await db.Coin.findOne({
                    where: { code: KEY_COIN },
                    raw: true,
                    attributes: ["coin", "code"]
                });
                return relsove({
                    error: coinDB ? 0 : 1,
                    message: coinDB ? "Get Coin success!" : "Get Coin Fail!",
                    data: coinDB
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    async delete(id) {
        return new Promise(async (relsove, reject) => {
            try {
                const responsive = await db.Process.update({ isDelete: true }, {
                    where: { code: id }
                })

                const coin = await db.Coin.findOne({
                    where: { code: KEY_COIN },
                    raw: true
                })

                const addCoin = (+coin?.coin) + 100000;

                responsive[1] = await db.Coin.update({
                    coin: addCoin,
                }, { where: { code: KEY_COIN } })


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