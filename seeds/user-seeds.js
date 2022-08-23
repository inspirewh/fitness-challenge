const { User } = require('../models');

const userData = [{
      first_name: 'John',
      last_name:'JohnTest',
      email:'john@test.com',
        password: 'jkohn'

    },
    {
        first_name: 'Jake',
        last_name:'JakeTest',
        email:'jake@test.com',
        password: 'jake'
    },
    {
        first_name: 'Joe',
        last_name:'JoeTest',
        email:'joe@test.com',
        password: 'joe'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;