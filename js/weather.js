const apiKey = "3iQluZex1ysRYKk4hMfyBgD0B4OJA9AV"
const baseUrl = "http://dataservice.accuweather.com/"

const getCityUrl = city =>
    `${baseUrl}locations/v1/cities/search?apikey=${apiKey}&q=${city}`
    
const getWeatherUrl = cityKey =>
    `${baseUrl}currentconditions/v1/${cityKey}?apikey=${apiKey}&language=pt-br`

const fetchData = async url => {
    try {
        const response = await fetch(url)

        if ( !response.ok ) {
            throw new Error( "Não foi possível obter dados" )
        }

        return response.json()

    } catch ( { message, name } ) {
        alert( message, name )
    }
}

const getCityData = cityName => fetchData(getCityUrl(cityName))
const getCityWeather = cityKey => fetchData(getWeatherUrl(cityKey))

getCityData("São Paulo")
.then(console.log)