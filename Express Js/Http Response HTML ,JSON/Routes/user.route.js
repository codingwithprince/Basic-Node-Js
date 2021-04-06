const express = require('express');
const router = express.Router();


router.get('/about', (req,res)=>{
    res.send("This is ABOUT");
});
router.get('/contact', (req,res)=>{
    res.send("This is CONTACT");
});
router.get('/services', (req,res)=>{
    res.send("This is SERVICES");
});

module.exports = router;