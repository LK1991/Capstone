var ourTemp=0;

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
    })
  })

  function getOutfit() {
    var htmlstr = '';
    if(ourTemp <= 60) {
      document.getElementById("weatherNow").innerHTML = '<img width=300 top=40 src= "images/1stoutfit.png" >';
    } else {

    }
  }

  var imgArray = new Array();

  imgArray[0] = new Image();
  imgArray[0].src = "images/1stoutfit.png";

  imgArray[1] = new Image();
  imgArray[1].src = "images/1stoutfitt.png";

  imgArray[2] = new Image();
  imgArray[2].src = "images/2ndoutfit.png";

  imgArray[3] = new Image();
  imgArray[3].src = "images/2ndoutfitt.png";

  imgArray[4] = new Image();
  imgArray[4].src = "images/3rdoutfit.png";

  imgArray[5] = new Image();
  imgArray[5].src = "images/3rdoutfitt.png";

  imgArray[6] = new Image();
  imgArray[6].src = "images/4thoutfit.png";

  imgArray[7] = new Image();
  imgArray[7].src = "images/4thoutfitt.png";

  imgArray[8] = new Image();
  imgArray[8].src = "images/5thoutfit.png";

  imgArray[9] = new Image();
  imgArray[9].src = "images/5thoutfitt.png";

  imgArray[10] = new Image();
  imgArray[10].src = "images/6thoutfit.png";

  imgArray[11] = new Image();
  imgArray[11].src = "images/6thoutfitt.png";

  imgArray[12] = new Image();
  imgArray[12].src = "images/guyoutfit1.png";

  imgArray[13] = new Image();
  imgArray[13].src = "images/guyoutfit2.png";

  imgArray[14] = new Image();
  imgArray[14].src = "images/guyoutfit3.png";

  imgArray[15] = new Image();
  imgArray[15].src = "images/guyoutfit4.png";

  imgArray[16] = new Image();
  imgArray[16].src = "images/guyoutfit5.png";

  imgArray[17] = new Image();
  imgArray[17].src = "images/guyoutfit6.png";

  imgArray[18] = new Image();
  imgArray[18].src = "images/guyoutfit22.jpg";

  imgArray[19] = new Image();
  imgArray[19].src = "images/guyoutfit33.jpg";

  imgArray[20] = new Image();
  imgArray[20].src = "images/guyoutfit44.png";

  imgArray[21] = new Image();
  imgArray[21].src = "images/guyoutfit55.jpg";

  imgArray[22] = new Image();
  imgArray[22].src = "images/guyoutfit66.jpg";

  imgArray[23] = new Image();
  imgArray[23].src = "images/guyoutfitt.jpg";

getOutfit();

});
