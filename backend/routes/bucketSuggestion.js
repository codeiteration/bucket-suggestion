const router = require('express').Router()
const bucketSuggestionController = require('../controllers/bucketSuggestionController')


router.post('/placeBallIntoBucket',bucketSuggestionController.insertBallIntoBuckets);
router.get('/getResult',bucketSuggestionController.getResult);

module.exports = router;