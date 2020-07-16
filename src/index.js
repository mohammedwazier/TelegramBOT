const Config = require('./Config/Config');
const Main = require('./Controller/Main')


const ObjectData = Object.assign(Config, Main);
console.log(ObjectData)

module.exports = ObjectData;