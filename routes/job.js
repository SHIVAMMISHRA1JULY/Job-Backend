const express = require('express');
const { createJob, updateJob, deleteJob, getAllJob, singleCompanyJobs, countNumbers } = require('../controllers/job');
const checkToken = require('../middleware/checkToken');
const router = express.Router();

router.post('/create',checkToken, createJob)
router.put('/update/:_id',checkToken, updateJob)
router.delete('/delete/:_id',checkToken, deleteJob) //params
router.get('/getalljob/',getAllJob)
router.get('/countNumbers',checkToken,countNumbers)
router.get('/singlecompanyalljob/',checkToken,singleCompanyJobs)


module.exports = router