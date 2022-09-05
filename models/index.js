const Progress = require("./Progress");
const User = require("./User");
const Workout = require("./Workout");
const Week = require("./Week");


// A user can have many progress forms
User.hasMany(Progress, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Progress.belongsTo(User, {
    foreignKey: 'user_id'
})





module.exports = {User, Progress, Workout, Week};

