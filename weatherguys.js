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
      getLink(data);
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

  function getLink(data) {
    var temp = Math.round(data.main.temp * 9 / 5 + 32);
    ourTemp = temp;

    if (ourTemp <= 60) {
      document.getElementById("nav").innerHTML = '<li>' + '<a href="http://www.forever21.com/Product/Product.aspx?BR=21men&Category=mens-sweatshirts-hoodies&ProductID=2000190465&VariantID=" target="_blank">Outfit 1</a>' + '</li>' + '<li>' + '<a href="http://www.hm.com/us/product/38486?article=38486-F" target="_blank">Outfit 2</a>' + '</li>';
    } else if (ourTemp >= 60 && ourTemp <= 75) {
      document.getElementById("nav").innerHTML = '<li>' + '<a href="http://www.forever21.com/Product/Product.aspx?BR=21men&Category=mens-jackets-and-coats-denim&ProductID=2000250289&VariantID=061" target="_blank">Outfit 1</a>' + '</li>' + '<li>' + '<a href="http://www.hm.com/us/product/59506?article=59506-A" target="_blank">Outfit 2</a>' + '</li>';
    } else if (ourTemp >= 75 && ourTemp <= 80) {
      document.getElementById("nav").innerHTML = '<li>' + '<a href="http://www.forever21.com/Product/Product.aspx?BR=21men&Category=mens-tees-tanks&ProductID=2000214950&VariantID=" target="_blank">Outfit 1</a>' + '</li>' + '<li>' + '<a href="http://www.zumiez.com/rip-n-dip-lord-nermal-pocket-tee-shirt.html" target="_blank">Outfit 2</a>' + '</li>';
    } else if (ourTemp >= 80 && ourTemp <= 85) {
      document.getElementById("nav").innerHTML = '<li>' + '<a href="http://www.forever21.com/Product/Product.aspx?BR=21men&Category=mens-bottom-shorts&ProductID=2000226080&VariantID=013" target="_blank">Outfit 1</a>' + '</li>' + '<li>' + '<a href="http://www.forever21.com/Product/Product.aspx?BR=21men&Category=mens-tees-tanks&ProductID=2000191075&VariantID=011" target="_blank">Outfit 2</a>' + '</li>';
    } else if (ourTemp >= 85 && ourTemp <= 90) {
      document.getElementById("nav").innerHTML = '<li>' + '<a href="http://www.pacsun.com/pacsun/lucis-destroyed-extended-length-tank-top-0124468680006.html?cgid=mens&dwvar_0124468680006_color=031&start=84" target="_blank">Outfit 1</a>' + '</li>' + '<li>' + '<a href="http://www.pacsun.com/obey/working-man-ii-shorts-0170502750004.html?cgid=mens&dwvar_0170502750004_color=619&prefn1=mens-shop-by-style&start=54&prefv1=Shorts&dwvar_0170502750004_size=3800#" target="_blank">Outfit 2</a>' + '</li>';
    } else {
      document.getElementById("nav").innerHTML = '<li>' + '<a href="http://www.forever21.com/Product/Product.aspx?BR=21men&Category=mens-tees-tanks&ProductID=2000190898&VariantID=" target="_blank">Outfit 1</a>' + '</li>' + '<li>' + '<a href="http://www.zumiez.com/volcom-base-coast-black-tank-top.html" target="_blank">Outfit 2</a>' + '</li>';
    }
  }
  

});
