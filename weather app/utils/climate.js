
const got = require('got')
async function getClimate(lat, lon) {
    var key = '8bd6a33e0af254f2379ae190808ac131'
    const url = 'https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon=' + lon + '&appid='+key;
    try {
        const data = await got(url).json()
        const temp = data.list[0].weather[0]
        const res = {result: 'the current climate is: '+ temp.description,
                    error: undefined
                    }
        return res
    } catch (error) {
        return {result: undefined,
                error: error.code
                }
    }
}

module.exports.getClimate = getClimate