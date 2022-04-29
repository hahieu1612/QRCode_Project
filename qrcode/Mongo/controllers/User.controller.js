const login = async (req, res) => {
    try{
        const {username, password} = req.body;
        console.log(req.body);
    }catch(error){

    }
}


module.exports = {
    login: login
}