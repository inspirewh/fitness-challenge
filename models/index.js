const Progress = require("./progress");
const User = require("./User");



User.hasMany(Progress, {
    foreignKey: 'user_id'
});

Progress.belongsTo(User, {
    foreignKey: 'user_id'
})



module.exports = {User, Progress};

