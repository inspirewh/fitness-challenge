const sequelize = require("../config/connection");
const { faker } = require('@faker-js/faker');
const { User, Progres, Workout, Week } = require('../models');
const weekSeed = require('./weekSeed.json')
const workoutData = require('./workoutSeed.json')

    

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

        const created = await Progres.create({
            user_id: faker.helpers.arrayElement(userPools).id, 
            pushups: faker.datatype.number({min:5,max:20}),
            burpees: faker.datatype.number({min:5,max:20}),
            situps: faker.datatype.number({min:5,max:20}),
            week_id: faker.helpers.arrayElement(weekPools).id,
        });
        
        models.push(created);
    }
    return models;
}

async function seed(){
    const users = await seedUsers();
    const week = await Week.bulkCreate(weekSeed, {
        individualHooks: true,
        returning: true,
    });
    const progresses = await seedProgress(users, week);
    const workout = await Workout.bulkCreate(workoutData, {
        individualHooks: true,
        returning: true,
      });


}

sequelize.sync({force: true})
    .then(seed)
    .then(() => process.exit(0));
