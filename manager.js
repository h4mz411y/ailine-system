"user strict";
const events = require('./module/events-pool');
const { faker } = require('@faker-js/faker');

require('./module/pilot');
require('./module/system');


const flightId = faker.datatype.uuid();

const pilotName = faker.name.findName();

let destination = faker.address.cityName();




setInterval(() => {
    let NewFlight = `New Fligh Number:${flightId}`;
    console.log(NewFlight);
    events.emit('new-flight', NewFlight);
}, 10000);

events.on('Arrived', manager2);
function manager2() {
    console.log(`Flight ${flightId} has arrived`);
}