const formChangeLocate = document.querySelector("[data-js='change-location']")
const cityName = document.querySelector("[data-js='city-name']")
const cityWeather = document.querySelector("[data-js='city-weather']")
const cityTemperature = document.querySelector("[data-js='city-temperature']")
const cityCard = document.querySelector("[data-js='city-card'")
const timeImg = document.querySelector("[data-js='time']")
let iconImgContainer = document.querySelector("[data-js='time-icon']")

const showCityCard = () => {
    if (cityCard.classList.contains("d-none"))
    cityCard.classList.remove("d-none")
}

const fetchCityWeatherInfo = async cityName => {
    const [{ Key, LocalizedName }] = await getCityData(cityName)
    const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] =
    await getCityWeather(Key)

    return { LocalizedName, WeatherText, Temperature, IsDayTime, WeatherIcon }
}

const showCityWeatherInfo = async cityName =>{
    const { LocalizedName, WeatherText, Temperature, IsDayTime, WeatherIcon } =
        await fetchCityWeatherInfo(cityName)

    const iconImg = document.createElement("img")
    iconImg.setAttribute("src", `./src/icons/${WeatherIcon}.svg`)

    timeImg.src = IsDayTime? "./src/day.svg" : "./src/night.svg"
    iconImgContainer.appendChild(iconImg)
    cityName.textContent = LocalizedName
    cityWeather.textContent = WeatherText
    cityTemperature.textContent = Temperature.Metric.Value
}

const handleCityForm = event =>{
    iconImgContainer.textContent = null
    event.preventDefault()
    
    const valueInput = event.target.city.value
    
    showCityCard()
    showCityWeatherInfo(valueInput)
    formChangeLocate.reset()
}

formChangeLocate.addEventListener("submit", handleCityForm)