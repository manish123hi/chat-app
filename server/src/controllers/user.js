
const registerUser = (req, res) => {
    res.send("Home");
    console.log('home');
}

const loginUser = (req, res) => {
    res.send("login");
    console.log('login');
}

module.exports = {registerUser,loginUser}