const { Week } = require ('../models');

const weekData = [
    {
        number: 1,
        image: 'Cardio Blast Thumbnail.jpg',
        href: '/week/1',
        description: 'week 1 text - Some quick example text to build on the card title and make up the bulk of the card content',
    },
    {
        number: 2,
        image: 'Cardio Blast Thumbnail.jpg',
        href: "/week/2",
        description: "week 2 text - Some quick example text to build on the card title and make up the bulk of the card content"
    },
    {
        number: 3,
        image: "../public/assets/css/Cardio Blast Thumbnail.jpg",
        href: "/week/3",
        description: "week 3 text - Some quick example text to build on the card title and make up the bulk of the card content"
    },
    {
        number: 4,
        image: "../public/assets/css/Cardio Blast Thumbnail.jpg",
        href: "/week/4",
        description: "week 4 text - Some quick example text to build on the card title and make up the bulk of the card content"
    },
    {
        number: 5,
        image: "../public/assets/css/Cardio Blast Thumbnail.jpg",
        href: "/week/5",
        description: "week 6 text - Some quick example text to build on the card title and make up the bulk of the card content"
    },
    {
        number: 6,
        image: "../public/assets/css/Cardio Blast Thumbnail.jpg",
        href: "/week/6",
        description: "week 6 text - Some quick example text to build on the card title and make up the bulk of the card content"
    },

];

const weekSeed = () => Week.bulkCreate(weekData);

module.exports = weekSeed;
