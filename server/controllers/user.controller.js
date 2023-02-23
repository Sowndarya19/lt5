const express=require('express');


const router =express.Router();

const user=require('../models/user.model');
 router.get('/',(req,res)=>{
    user.findOne().then(docs=>{
        res.send(docs);
    }).catch(err=>{
        res.status(500).send(err);
    })
 }).post('/',(req,res)=>{
    const obj=req.body;
    user.create(obj).then(doc=>{
        res.status(201).send(obj);
    }).catch(err=>{
        res.status(500).send(err);
    })

 });
 module.exports=router;