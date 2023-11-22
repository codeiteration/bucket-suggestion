const db = require('../models')
const bucket = db.buckets;

const addBucket = async (req, res) => {
    const { name,volume } = req.body;
    const createdBucket = await bucket.create({name,volume})
    res.status(200).send(createdBucket)
}

const getAllBuckets = async (req, res) => {
    let buckets = await bucket.findAll({})
    res.status(200).send(buckets)
}

const getOneBuckets = async (req, res) => {
    let id = req.params.id
    let bucket = await bucket.findOne({ where: { id: id }})
    res.status(200).send(bucket)
}

const updateBuckets = async (req, res) => {
    let id = req.params.id
    const bucket = await bucket.update(req.body, { where: { id: id }})
    res.status(200).send(bucket)
}


const deleteBuckets = async (req, res) => {
    let id = req.params.id
    await bucket.destroy({ where: { id: id }} )
    res.status(200).send('Bucket is deleted !')
}



module.exports = {
    addBucket,
    getAllBuckets,
    getOneBuckets,
    updateBuckets,
    deleteBuckets,
}