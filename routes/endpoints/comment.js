const Comment = require('../../models/comment');

let routes = (app) =>{

app.post("/comments",async(req, res)=>{
	try{
		let comment = new Comment(req.body)
		await comment.save()
		res.json(comment)
	}
	catch(err){
		res.status(500).send(err);
	}

})

app.get("/comments/:id",async(req, res)=>{
	try{
		let commentpost = await Comment.find({post_id:req.params.id});
		res.json(commentpost)
	}
	catch(err){
		res.status(500).send(err);
	}

})



app.post("/blogs/:id/comments",async(req, res)=>{
		let comments = await Comment.find({post_id:req.params.id})
		res.send(comments)
	
})

}

module.exports = routes;
