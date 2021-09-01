document
  .getElementById("country-button")
  .addEventListener("click", function () {
    const countryInput = document.getElementById("country-input");
    const countryName = countryInput.value;
    document.getElementById("info-body").style.display = "none";
    if (countryInput.value.length != 0) {
      console.log("I am there");
      countryInput.value = "";
      fetch(
        ` https://coronavirus-19-api.herokuapp.com/countries/${countryName} `
      )
        .then((res) => res.json())
        .then((data) => displayCountry(data))
        .catch((error) => {
          alert("PLease Put Valid Country Name.");
        });
    } else {
      alert("Please put a country name.");
    }
  });
function displayCountry(country) {
  document.getElementById("info-body").style.display = "block";

  const conName = document.getElementById("country");
  conName.innerHTML = `${country.country}`;
  const conCases = document.getElementById("cases");
  conCases.innerHTML = `Total Cases : ${country.cases}`;
  const conTodayCases = document.getElementById("todayCases");
  conTodayCases.innerHTML = `Today Cases : ${country.todayCases}`;
  const conDeaths = document.getElementById("deaths");
  conDeaths.innerHTML = `Total Deaths : ${country.deaths}`;
  const conTodayDeaths = document.getElementById("todayDeaths");
  conTodayDeaths.innerHTML = `Today Deaths : ${country.todayDeaths}`;
  const message = document.getElementById("message");
  message.innerHTML = `Stay Home , Stay Safe & Pray For ${country.country}.`;
}
