const crypto = require('crypto');
module.exports = (req,res,_next) => {
    const { email, password } = req.body;
    const emailValid = email && email.includes('@') && email.includes('.com');
    const passwordValid = password && password.length > 4 && password.length < 8;
    if(!emailValid || !passwordValid) {
        return res.status(400).json({message: "email or password is incorrect"})
    }
    const token = crypto.randomBytes(8).toString('hex');
    return res.status(200).json({token: token});
}