const User = require("./User");
const Workout = require("./Workout");
const Week = require("./Week");
const Progres = require('./Progres');


// A user can have many progress forms
User.hasMany(Progres, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Progres.belongsTo(User, {
    foreignKey: 'user_id'
})

Week.hasMany(Progres, {
    foreignKey: 'week_id',
    onDelete: 'CASCADE',
});

Week.belongsTo(Progres, {
    foreignKey: 'week_id'
})





module.exports = {User, Progres, Workout, Week};

