var APIKEy = "94e79ba8556f84815ec979fab05d8e3f";
var savedUl = $('.list-group')
var fetchButton = $('.btn-primary')
var cityName = $('#city-name')
var tempBox = $(".box");




function getApi() {
  var cityNameValue = cityName.val()
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityNameValue + '&APPID=' + APIKEy;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.main.temp);

      tempBox.empty();
      var temp = $('<h3>');
      temp.text(data.main.temp);

      tempBox.append(temp)

    });
}
fetchButton.on('click', getApi);