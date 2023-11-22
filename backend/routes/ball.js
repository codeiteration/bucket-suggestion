const router = require('express').Router()
const ballController = require('../controllers/ballController')

router.get('/getAllBall',ballController.getAllBall);
router.post('/addBall',ballController.addBalls);
router.delete('/removeBall/:id',ballController.deleteBall);
router.post('/updateBall/:id',ballController.updateBall);
router.get('/getBallById/:id',ballController.getOneBall);

module.exports = router;