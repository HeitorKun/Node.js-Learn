const climate = require('./utils/climate')
console.log('begin')

const lat = '-23.36'
const lon = '-46.84'

climate.getClimate(lat, lon).then(({result, error}) => {
    if (typeof error === 'undefined') {
    console.log(result)
    } else {
        console.log("a problem occurred")
    }
})

//console.log('end')