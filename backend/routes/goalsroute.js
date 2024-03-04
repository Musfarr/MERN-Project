const express = require('express')
const router = express.Router()
const {Getgoals , Postgoals , deletegoals , updategoals} = require('../controllers/goalcontroller')


router.route('/').get(Getgoals).post(Postgoals)
router.route('/:id').put(updategoals).delete(deletegoals)


module.exports = router