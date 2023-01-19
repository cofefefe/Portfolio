const postModel = require('../models/post.models')



module.exports.getPosts = async (req, res, next) => {
    try {
        const posts = await postModel.find().sort({'createdAt': -1}).populate('poster');
        res.send(posts)
    } catch (e) {
        res.status(500).json({e})
    }
}

exports.addPost = async (req,res,next,params)=>{
    console.log('add post du controller')
    let postObject = req.body.post
    let post = new postModel({
        ...postObject,
        content:req.body.content,
        poster: user._id,
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    post.save()
        .then(()=>{
            res.status(200).json({message:"enregistrement du post réussi !"})
          })
          .catch((error)=>{
            res.status(420).json({error})
          })
}