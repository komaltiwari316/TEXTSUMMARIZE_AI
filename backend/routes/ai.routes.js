const express=require('express');
const aiController=require('../controllers/ai.controller');

const router=express.Router();

router.post('/review',aiController.getReview)

module.exports=router;