const sequelize = require("../config/connection");
const { faker } = require('@faker-js/faker');
const User = require("../models/User");

async function seedUsers(number = 10){

    const models = [];
    //an array of creates users
    const admin = await User.create({
        email: 'test@test.com',
        name: 'testname',
        password: 'testing123',
    })
    models.push(admin);
    //seed user
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

async function seedProgress(userPools, number = 10){

    //an array of creates users
    
    const models = [];

    for (let index = 0; index < number; index++) {

        const created = await User.create({
            user_id: faker.helpers.arrayElement(userPools), id,
            pushups: faker.datatype.number(),
            situps: faker.datatype.number(),
            burpees: faker.datatype.number(),
        });
        
        models.push(created);
    }
    return models;
}

//
async function seed(){
    const users = await seedUsers();
    const progress = await seedProgress(users, progress);

}
sequelize.sync({force: true})
    .then(seed)
    .then(() => process.exit(0));
