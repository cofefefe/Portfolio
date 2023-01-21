const postModel = require('../models/post.models')



exports.getPosts = async (req, res, next) => {
    try {
        const posts = await postModel.find().sort({'createdAt': -1}).populate('poster');
        res.send(posts)
    } catch (e) {
        res.status(500).json({e})
    }
}

exports.savePost = async (req, res, next, params)=>{
    console.log("aaaaaaaa");
  const result = { test: "Aaaa" };
  res.send(result);
}