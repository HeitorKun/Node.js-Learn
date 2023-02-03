const got = require('got')
console.log('begin')

/*
setTimeout(() => {
    console.log('log')
}, 2000);
*/

var lat = '44.33'
var lon = '10.0'
var key = '8bd6a33e0af254f2379ae190808ac131'

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon=' + lon + '&appid='+key;
console.log(url)
async function get() {
    const data = await got(url).json()
    .then(res => console.log(res))
    
}

get()

console.log('jeje')