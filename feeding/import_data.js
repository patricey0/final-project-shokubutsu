const announces = require('./data_fake.json');
const fetch = require('node-fetch');


async function feed(element) {
    try {
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

announces.forEach(element => {
    element.visitor_id = 2
    feed(element);
});