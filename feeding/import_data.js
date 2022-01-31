const announces = require('./data_fake.json');
const fetch = require('node-fetch');


async function feed(element, id) {
    try {
        element["image"] = `https://res.cloudinary.com/shokubutsu/image/upload/v1643640258/plant-2_cdsmcr.jpg`
        const response = await fetch(`https://shokubutsu.herokuapp.com/v1/announces/${id}`,{
            method: 'patch',
            body: JSON.stringify(element),
            headers: {'Content-Type': 'application/json'}
        });
        return response
    } catch (error) {
        console.log(error);
    }
}

for (let id = 0; id < 31; id++) {
    announces.forEach(element => {
        feed(element, id);
    });
}
