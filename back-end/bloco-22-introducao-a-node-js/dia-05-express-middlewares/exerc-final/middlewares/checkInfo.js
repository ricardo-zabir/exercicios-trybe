module.exports = (req,res,_next) => {
    const { username, email, password } = req.body;
    const usernameLongEnough = username && username.length > 3;
    const emailValid = email && email.includes('@') && email.includes('.com');
    const passwordValid = password && password.length > 4 && password.length < 8;
    if(!usernameLongEnough || !emailValid || !passwordValid) {
        return res.status(400).json({message: 'invalid data'})
    }
    return res.status(201).json({message: 'user created'})
}