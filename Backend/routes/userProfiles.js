const express = require('express');
const User = require('../models/User');

const router = express.Router();

//get User Profiles

router.get('/users',(req,res) =>{
    User.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});



//get a specific User Profile

router.get("/User/:id",(req,res) =>{

    let postId = req.params.id;

    User.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false, err})
        }

        return res.status(200).json({
            success:true,
            post
        });
    });

});


//update a User Profile

router.put('/User/update/:id',(req,res)=>{
    User.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//Delete a User Profile

router.delete('/User/delete/:id',(req,res) =>{
    User.findByIdAndRemove(req.params.id).exec((err,deletePost) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });

        return res.json({
            message:"Delete Successful",deletePost
        });
    });
});

module.exports = router;