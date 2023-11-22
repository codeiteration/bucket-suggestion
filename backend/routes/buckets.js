const router = require('express').Router()
const bucketController = require('../controllers/bucketController')

router.get('/getAllBucket',bucketController.getAllBuckets);
router.post('/addBucket',bucketController.addBucket);
router.delete('/removeBucket/:id',bucketController.deleteBuckets);
router.post('/updateBucket/:id',bucketController.updateBuckets);
router.get('/getBucketById/:id',bucketController.getOneBuckets);

module.exports = router;