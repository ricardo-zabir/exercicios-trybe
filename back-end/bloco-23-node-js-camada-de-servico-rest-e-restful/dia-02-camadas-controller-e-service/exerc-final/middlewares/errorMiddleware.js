module.exports = (err, _req, res, _next) => {
    const { message, status, code } = err;
    return res.status(400).json({ error: {
        code,
        message
    } });
}