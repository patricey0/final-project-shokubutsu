const announces = require('./data_fake.json');
const fetch = require('node-fetch');


async function feed(element, id) {
    try {
        element["image"] = `https://uneimage`
        element["visitor_id"] = 1
        const response = await fetch(`http://localhost:5000/v1/announces`,{
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
