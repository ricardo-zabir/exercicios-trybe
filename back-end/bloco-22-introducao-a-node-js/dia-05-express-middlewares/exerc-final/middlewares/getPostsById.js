const posts = [{
    id:1,
    post:"This is the first post"
},
{
    id:2,
    post:"Second post here !"
},
{
    id:3,
    post:"Third post !"
}]
module.exports = (req,res,_next) => {
    const { id } = req.params;
    if(!id) {
        return res.status(404).json({message: 'post not found'})
    }
    const post = posts.find((p) => p.id === parseInt(id));
    if(!post) {
        return res.status(404).json({message: 'post not found'}) 
    }
    return res.status(200).json(post);
}