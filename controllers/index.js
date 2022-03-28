const router = require('express').Router()

router.use('/api', require('./commentRoutes.js'))

module.exports = router
