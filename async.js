const { resolve } = require("path");
const axios = require('axios');


/*
const event = new Promise((resolve, reject) => {
    var name = "John";
    if (name == "Lebang") {
        resolve();
    } else {
        reject("Thats not your name");
    }
});

event.then((name) => {
    console.log(name)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log('Done');
})


const data = axios.get("https://cat-fact.herokuapp.com/facts");

data.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
}).finally(()=> {
    console.log('done')
}) */

const fetchData = async () => {
    try {
        const data = await axios.get("https://cat-fact.herokuapp.com/facts");
        console.log(data);
    } catch (err) {
        console.log(err)
    } finally {
        console.log('Finished')
    }
}

fetchData();
