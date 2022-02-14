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
}];

module.exports = (req,res,_next) => {
    return res.status(200).send(posts)
}