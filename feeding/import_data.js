const announces = require('./data_fake.json');
const fetch = require('node-fetch');


async function feed(element, id) {
    try {
        element["image"] = `https://res.cloudinary.com/shokubutsu/image/upload/v1643367444/kwkgbk417iftmmt9t90h.jpg`
        element["visitor_id"] = 1
        const response = await fetch(`https://shokubutsu.herokuapp.com/v1/announces`,{
            method: 'post',
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
