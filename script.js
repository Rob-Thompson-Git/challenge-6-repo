var APIKEy = "94e79ba8556f84815ec979fab05d8e3f";
var savedLiItem = $('.list-group-item')
var fetchButton = $('.btn-primary')
var cityName = $('#city-name')
var tempBox = $(".box-ul");
var historyList = $('#history-list');

var storedCities = JSON.parse(localStorage.getItem("cities")) || [];
function saveToLocalStorage(cityName){
storedCities.push(cityName);
localStorage.setItem("cities", JSON.stringify(storedCities));
}

function initialHistoryRender(){
  for (var i =0; i < storedCities.length; i++){
    var listItem = $('<li>')
    listItem.text(storedCities[i])
    historyList.append(listItem);
  }

}

function getApi() {
  var cityNameValue = cityName.val()

  savedLiItem.append(cityNameValue);
  saveToLocalStorage(cityNameValue);

  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityNameValue + '&APPID=' + APIKEy;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.main.temp);
      console.log(data.main.humidity);
      console.log(data.wind.speed)

      tempBox.empty();

      var city = $('.li-one');
      var temp = $('.li-two');
      var humidity = $('.li-three');
      var wind = $('.li-four');

      city.text(cityNameValue)
      temp.text(data.main.temp);
      humidity.text(data.main.humidity);
      wind.text(data.wind.speed)

      tempBox.append(city);
      tempBox.append(temp);
      tempBox.append(humidity);
      tempBox.append(wind);
    }); 
    cityName.val('');
}
fetchButton.on('click', getApi);
initialHistoryRender();