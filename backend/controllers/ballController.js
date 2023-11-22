const db = require('../models')
const ball = db.balls

const addBalls = async (req, res) => {
    const { name,volume } = req.body;
    const ballCreated = await ball.create({name,volume});
    res.status(200).send(ballCreated);
}

const getAllBall = async (req, res) => {
    let balls = await ball.findAll({})
    res.status(200).send(balls)

}

const getOneBall = async (req, res) => {
    let id = req.params.id
    let ball = await ball.findOne({ where: { id: id }})
    res.status(200).send(ball)

}


const updateBall = async (req, res) => {
    let id = req.params.id
    const ball = await ball.update(req.body, { where: { id: id }})
    res.status(200).send(ball)
   

}


const deleteBall = async (req, res) => {
    let id = req.params.id
    await ball.destroy({ where: { id: id }} )
    res.status(200).send('Ball is deleted !')
}


module.exports = {
    addBalls,
    getAllBall,
    getOneBall,
    updateBall,
    deleteBall,
}