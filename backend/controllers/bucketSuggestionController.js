const db = require('../models')
const bucketSuggestion = db.bucketSuggestions;
const ball = db.balls;
const bucket = db.buckets;


const addBallIntoBuck = (balls) => {
  
}

const insertBallIntoBuckets = async (req, res) => {
  const { balls } = req.body;
  const insetBall = addBallIntoBuck(balls);
  res.status(200).send(insetBall)
}



const getResult = async (req, res) => { 
   
}


module.exports = {
  insertBallIntoBuckets,
  getResult
}