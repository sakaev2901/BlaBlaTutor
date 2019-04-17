const UserModel = require('../../models/UserModel');

async function create(username, password) {
    let user = await UserModel.create({ username, password });
    await user.save();

}


module.exports = {
    create
};