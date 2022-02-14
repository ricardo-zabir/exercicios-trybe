module.exports = (_req,res,_next) => {
    return res.status(404).json({message: "Opsss, route not found!"})
}