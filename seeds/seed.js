const sequelize = require("../config/connection");
const { faker } = require('@faker-js/faker');
const { User, Progress, Workout, Week } = require('../models');
const weekSeed = require('./weekSeed')
const workoutSeed = require('./workoutSeed')

    

//be default seed 10 users
//an array of creates users
//seed user
async function seedUsers(number = 10){
    
    const models = [];
    for (let index = 0; index < number; index++) {

        const created = await User.create({
            email: faker.internet.email(),
            name: faker.name.fullName(),
            password: "1234567891",
        });

        models.push(created);
    }
    return models;
}


//seed progress (fitness test)
//user pools is the users you want to seed
async function seedProgress(userPools, weekPools, number = 10){
    //an array of creates users
    
    const models = [];

    for (let index = 0; index < number; index++) {

        const created = await Progress.create({
            user_id: faker.helpers.arrayElement(userPools).id, 
            pushups: faker.datatype.number(),
            burpees: faker.datatype.number(),
            situps: faker.datatype.number(),
            week_id: faker.helpers.arrayElement(weekPools).id,
        });
        
        models.push(created);
    }
    return models;
}

async function seed(){
    const users = await seedUsers();
    const weekData = await weekSeed();
    //const progresses = await seedProgress(users, weekData);
    const workout = await workoutSeed();


}

sequelize.sync({force: true})
    .then(seed)
    .then(() => process.exit(0));
