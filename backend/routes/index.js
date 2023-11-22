const router = require('express').Router()

const bucketRoute = require('./buckets');
const ballRoute = require('./ball');
const bucketSuggestionRoute = require('./bucketSuggestion');
router.use('/bucket',bucketRoute);
router.use('/ball',ballRoute);
router.use('/bucket-suggestions',bucketSuggestionRoute);

module.exports = router;