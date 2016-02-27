$(".submit-button").on("click", function() {
  var cityName = $("input").val();

  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + ",us&units=imperial&appid=e42d32af9555a899db7106b67e9e5aae",
    method: "GET",
    success: function(weatherData) {
      var descriptionEl = $("<div>");
      descriptionEl.html("description: " + weatherData.weather[0].description);
      $(".weather-display").html(descriptionEl);
    }
  });
});