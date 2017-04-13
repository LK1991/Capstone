var ourTemp = 0;

$(function() {

  var location = "http://ip-api.com/json";
  $.getJSON(location, function(data) {
    var lat = data.lat;
    var lon = data.lon;


    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Pasadena,ca=" + "&units=metric" + "&appid=09e341f7a16aba16ee1a251b7b5ef0e4", function(data) {

      // Our Data
      var icon = data.weather[0].icon;
      var icon_replace = $(".weather-app_main__information--icon").attr("src");
      var temp = Math.round(data.main.temp * 9 / 5 + 32);
      ourTemp = temp;
      $(".weather-app_main__information--city").html(data.name);
      var description = data.weather[0].description;
      var cDescription = description.charAt(0).toUpperCase() + description.slice(1);

      // Apply Data To Page
      $(".weather-app_main__information--icon").attr("src", icon_replace.replace("#", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217538/" + icon + ".png"));
      $(".weather-app_main__information--temperature").html(temp + "°F");
      $(".weather-app_main__information--description").html(cDescription);
      getOutfit(data);
      getCaption(data);
    })
  })

  function getOutfit(data) {
    var temp = Math.round(data.main.temp * 9 / 5 + 32);
    ourTemp = temp;

    if (ourTemp <= 60) {
      document.getElementById("weatherNow").innerHTML = '<img width=327 height=500 style="margin: 0px 100px" src= "images/guyoutfit1.png" >' + '<img width=328 height=500 src= "images/guyoutfitt.jpg" >';
    } else if (ourTemp >= 60 && ourTemp <= 75) {
      document.getElementById("weatherNow").innerHTML = '<img width=325 height=500 style="margin: 0px 100px" src= "images/guyoutfit2.png" >' + '<img width=366 height=500 src= "images/guyoutfit22.jpg" >';
    } else if (ourTemp >= 75 && ourTemp <= 80) {
      document.getElementById("weatherNow").innerHTML = '<img width=324 height=500 style="margin: 0px 100px" src= "images/guyoutfit3.png" >' + '<img width=400 height=500 src= "images/guyoutfit33.jpg" >';
    } else if (ourTemp >= 80 && ourTemp <= 85) {
      document.getElementById("weatherNow").innerHTML = '<img width=324 height=500 style="margin: 0px 100px" src= "images/guyoutfit4.png" >' + '<img width=330 height=500 src= "images/guyoutfit44.png" >';
    } else if (ourTemp >= 85 && ourTemp <= 90) {
      document.getElementById("weatherNow").innerHTML = '<img width=313 height=500 style="margin: 0px 100px" src= "images/guyoutfit5.png" >' + '<img width=313 height=500 src= "images/guyoutfit55.jpg" >';
    } else {
      document.getElementById("weatherNow").innerHTML = '<img width=322 height=500 style="margin: 0px 100px" src= "images/guyoutfit6.png" >' + '<img width=400 height=500 src= "images/guyoutfit66.jpg" >';
    }
  }

  function getCaption(data) {
    var temp = Math.round(data.main.temp * 9 / 5 + 32);
    ourTemp = temp;

    if (ourTemp <= 60) {
      document.getElementById("captionNow").innerHTML = '<p>' + 'A nice sweater and jeans will keep you warm in this cold weather.' + '</p>';
    } else if (ourTemp >= 60 && ourTemp <= 75) {
      document.getElementById("captionNow").innerHTML = '<p>' + 'Drop the sweater and go for something lighter like a jacket to top off your outfit.' + '</p>';
    } else if (ourTemp >= 75 && ourTemp <= 80) {
      document.getElementById("captionNow").innerHTML = '<p>' + 'Bring out the t-shirts to keep you chilly on this warm day.' + '</p>';
    } else if (ourTemp >= 80 && ourTemp <= 85) {
      document.getElementById("captionNow").innerHTML = '<p>' + 'Its getting hotter now so bring out the shorts!' + '</p>';
    } else if (ourTemp >= 85 && ourTemp <= 90) {
      document.getElementById("captionNow").innerHTML = '<p>' + 'A tank top is a great option for this kind of hot day.' + '</p>';
    } else {
      document.getElementById("captionNow").innerHTML = '<p>' + 'Shorts and a tank is a simple outfit for boiling hot weather.' + '</p>';
    }
}

});
