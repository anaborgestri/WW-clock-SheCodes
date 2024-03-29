function refreshTime() {
  let tokyoTime = document.querySelector("#onetime");
  tokyoTime.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("hh:mm:ss [<small>]A[</small>]");
  let tokyoDate = document.querySelector("#onedate");
  tokyoDate.innerHTML = moment().tz("Asia/Tokyo").format("D MMMM YYYY");

  let saopauloTime = document.querySelector("#twotime");
  saopauloTime.innerHTML = moment()
    .tz("America/Sao_Paulo")
    .format("hh:mm:ss [<small>]A[</small>]");
  let saopauloDate = document.querySelector("#twodate");
  saopauloDate.innerHTML = moment()
    .tz("America/Sao_Paulo")
    .format("D MMMM YYYY");

  let barcelonaTime = document.querySelector("#threetime");
  barcelonaTime.innerHTML = moment()
    .tz("Europe/Madrid")
    .format("hh:mm:ss [<small>]A[</small>]");
  let barcelonaDate = document.querySelector("#threedate");
  barcelonaDate.innerHTML = moment().tz("Europe/Madrid").format("D MMMM YYYY");
}
refreshTime();
setInterval(refreshTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current-location") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = cityTimeZone;
  citiesElement.innerHTML = `<h2>${cityName}</h2>
          <div class="city-one-details">
            <div class="city-one-weather">
              <div class="weather-icon">
                ☀️
                <span class="weather-temperature">9<strong>°C</strong> </span>
              </div>
            </div>
            <div class="city-one-time">
              <div class="time" id="onetime">${cityTime.format(
                "hh:mm:ss [<small>]A[</small>]"
              )}</div>
              <div class="date" id="onedate">${cityTime.format(
                "D MMMM YYYY"
              )}</div>
            </div>
          </div>
          <div class="weather-description">clear sunshine</div>
      <div class="backlink"><a href="index.html">Back to all cities</a></div>`;
}

let selectCity = document.querySelector("#cities-select");
selectCity.addEventListener("change", updateCity);
