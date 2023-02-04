const got = require('got')
console.log('begin')

/*
setTimeout(() => {
    console.log('log')
}, 2000);
*/

const lat = '-23.36'
const lon = '-46.84'
var key = '8bd6a33e0af254f2379ae190808ac131'

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon=' + lon + '&appid='+key;

async function get() {
    try {
        const data = await got(url).json()
        const temp = data.list[0].weather[0]
        console.log('the current climate is: '+ temp.description)
    } catch (error) {
        console.log("error code: " + error.code)
    }
}
get()

console.log('end')