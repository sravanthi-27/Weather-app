const form = document.getElementById('form');
const latitudeInput = document.getElementById("latitude");
const longitudeInput = document.getElementById("longitude");
const resultContainer = document.getElementById("result");
const aqiResult = document.getElementById("aqi");
const coResult = document.getElementById("co");
const no2Result = document.getElementById("no2");
const o3Result = document.getElementById("o3");
const pm2Result = document.getElementById("pm2.5");
const pm10Result = document.getElementById("pm10");
const so2Result = document.getElementById("so2");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const latitude = latitudeInput.value;
    const longitude = longitudeInput.value;
    const url = `https://air-quality.p.rapidapi.com/current/airquality?lon=${longitude}&lat=${latitude}`;
    const options = {
	    method: 'GET',
	    headers: {
		'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY',
		'x-rapidapi-host': 'air-quality.p.rapidapi.com'
	}
    };
    fetch(url, options)
        .then(response=>response.json()) // coverting into json format
        .then(result=>{
            let readings = result.data[0]; // to print only current latitude, longitude data
            console.log(result);
            aqiResult.textContent = readings.aqi;
            coResult.textContent = readings.co;
            no2Result.textContent = readings.no2;
            pm2Result.textContent = readings.pm25;
            pm10Result.textContent = readings.pm10;
            o3Result.textContent = readings.o3;
            so2Result.textContent = readings.so2;
            resultContainer.style.display = "flex";
        })
});