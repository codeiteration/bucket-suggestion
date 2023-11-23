const db = require('../models')
const bucketSuggestion = db.bucketSuggestions;
const ball = db.balls;
const bucket = db.buckets;


const insertLogic = async (bucketData,ballData) => {
    return bucketData.filter(b => b.bucketVolume == b.remainingVolume );
}

const addBallIntoBuck =  async (balls) => {
    const totalBuckets = await bucket.findAll({});
    const totalBalls = await ball.findAll({});

    if (totalBalls.length> 0 && totalBuckets.length > 0) { 

      let getBucketSuggestionsData = [];
      let ballDataWithVolume = []; 
      
      // creating buckets suggestion table 
      const { count , rows } = bucketSuggestion.findAndCountAll({});
      if (count > 0) { 
        getBucketSuggestionsData = rows;
      } else {
        await totalBuckets.forEach(b => {
          getBucketSuggestionsData.push({bucketName: b.name,bucketVolume: b.volume,remainingVolume: 0,bucketData: []})
          bucketSuggestion.create({bucketName: b.name,bucketVolume: b.volume,remainingVolume: 0,bucketData: []})
        });
      } 

      // modify ball data 
      balls.forEach( (b) => {
         let ballData = {...b,ballVolume:parseFloat(totalBalls.filter( B => B.name == b.name)[0].volume)};
         ballDataWithVolume.push(ballData);    
      })

     // console.log(balls);
     return await insertLogic(getBucketSuggestionsData , ballDataWithVolume)

    } else {
      return "Sorry buckets and ball not available for placement.";
    }
}

const insertBallIntoBuckets = async (req, res) => {
  const { balls } = req.body;
  const insetBall = await addBallIntoBuck(balls);
  res.status(200).send(insetBall)
}



const getResult = async (req, res) => { 
   
}


module.exports = {
  insertBallIntoBuckets,
  getResult
}