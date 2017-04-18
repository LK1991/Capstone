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
      document.getElementById("weatherNow").innerHTML = '<img width=400 height=500 style="margin: 0px 100px" src= "images/1stoutfit.png" >' + '<img width=322 height=500 src= "images/1stoutfitt.png" >';
    } else if (ourTemp >= 60 && ourTemp <= 75) {
      document.getElementById("weatherNow").innerHTML = '<img width=322 height=500 style="margin: 0px 100px" src= "images/2ndoutfit.png" >' + '<img width=320 height=500 src= "images/2ndoutfitt.png" >';
    } else if (ourTemp >= 75 && ourTemp <= 80) {
      document.getElementById("weatherNow").innerHTML = '<img width=325 height=500 style="margin: 0px 100px" src= "images/3rdoutfit.png" >' + '<img width=321 height=500 src= "images/3rdoutfitt.png" >';
    } else if (ourTemp >= 80 && ourTemp <= 85) {
      document.getElementById("weatherNow").innerHTML = '<img width=371 height=500 style="margin: 0px 100px" src= "images/4thoutfit.png" >' + '<img width=321 height=500 src= "images/4thoutfitt.png" >';
    } else if (ourTemp >= 85 && ourTemp <= 90) {
      document.getElementById("weatherNow").innerHTML = '<img width=325 height=500 style="margin: 0px 100px" src= "images/5thoutfit.png" >' + '<img width=346 height=500 src= "images/5thoutfitt.png" >';
    } else {
      document.getElementById("weatherNow").innerHTML = '<img width=324 height=500 style="margin: 0px 100px" src= "images/6thoutfit.png" >' + '<img width=359 height=500 src= "images/6thoutfitt.png" >';
    }
  }

  function getCaption(data) {
    var temp = Math.round(data.main.temp * 9 / 5 + 32);
    ourTemp = temp;

    if (ourTemp <= 60) {
      document.getElementById("captionNow").innerHTML = '<p>' + 'These outfits are perfect to wear in cold weather because they will keep you warm, cozy, and comfortable.' + '</p>';
    } else if (ourTemp >= 60 && ourTemp <= 75) {
      document.getElementById("captionNow").innerHTML = '<p>' + 'These are light and airy outfits to keep you cool and warm at the same time.' + '</p>';
    } else if (ourTemp >= 75 && ourTemp <= 80) {
      document.getElementById("captionNow").innerHTML = '<p>' + 'There are open outfits to keep you fresh on a warm sunny day.' + '</p>';
    } else if (ourTemp >= 80 && ourTemp <= 85) {
      document.getElementById("captionNow").innerHTML = '<p>' + 'Its hotter now so lets bring out the shorts and crop top!' + '</p>';
    } else if (ourTemp >= 85 && ourTemp <= 90) {
      document.getElementById("captionNow").innerHTML = '<p>' + 'These are great outfits when you dont know what to wear on a hot day. Theyre simple and fashionable.' + '</p>';
    } else {
      document.getElementById("captionNow").innerHTML = '<p>' + 'Layering neutrals can be chic and important when it comes to that humid weather.' + '</p>';
    }
}

  function getLink(data) {
    var temp = Math.round(data.main.temp * 9 / 5 + 32);
    ourTemp = temp;

    if (ourTemp <= 60) {
      document.getElementById("nav").innerHTML = '<li>' + '<a href="https://www.hollisterco.com/shop/us/girls-tops-online-exclusives/oversized-graphic-hoodie-8788200_03?ofp=true" target="_blank">Outfit 1</a>' + '</li>' + '<li>' + '<a href="http://www.forever21.com/Product/Product.aspx?BR=plus&Category=plus_size-sweatshirts-hoodies&ProductID=2000321568&VariantID=011" target="_blank">Outfit 2</a>' + '</li>';
    } else if (ourTemp >= 60 && ourTemp <= 75) {
      document.getElementById("nav").innerHTML = '<li>' + '<a href="http://www.forever21.com/EU/Product/Product.aspx?BR=f21&Category=top_t-shirts&ProductID=2000285833&VariantID=" target="_blank">Outfit 1</a>' + '</li>' + '<li>' + '<a href="http://www.forever21.com/Product/Product.aspx?BR=plus&Category=plus_size-sweater&ProductID=2000190747&VariantID=" target="_blank">Outfit 2</a>' + '</li>';
    } else if (ourTemp >= 75 && ourTemp <= 80) {
      document.getElementById("nav").innerHTML = '<li>' + '<a href="http://www.forever21.com/Product/Product.aspx?BR=f21&Category=top_blouses&ProductID=2000226435&VariantID=" target="_blank">Outfit 1</a>' + '</li>' + '<li>' + '<a href="http://www.forever21.com/Product/Product.aspx?BR=plus&Category=plus_size-tops&ProductID=2000214529&VariantID=" target="_blank">Outfit 2</a>' + '</li>';
    } else if (ourTemp >= 80 && ourTemp <= 85) {
      document.getElementById("nav").innerHTML = '<li>' + '<a href="http://www.forever21.com/Product/Product.aspx?BR=f21&Category=bottoms_shorts&ProductID=2000058084&VariantID=" target="_blank">Outfit 1</a>' + '</li>' + '<li>' + '<a href="http://www.forever21.com/Product/Product.aspx?BR=plus&Category=plus_size-dresses&ProductID=2000191045&VariantID=" target="_blank">Outfit 2</a>' + '</li>';
    } else if (ourTemp >= 85 && ourTemp <= 90) {
      document.getElementById("nav").innerHTML = '<li>' + '<a href="http://www.forever21.com/Product/Product.aspx?BR=f21&Category=dress&ProductID=2000285602&VariantID=" target="_blank">Outfit 1</a>' + '</li>' + '<li>' + '<a href="http://www.debshops.com/ProductDetail/1005799_001" target="_blank">Outfit 2</a>' + '</li>';
    } else {
      document.getElementById("nav").innerHTML = '<li>' + '<a href="http://www.forever21.com/Product/Product.aspx?BR=f21&Category=bottoms_shorts&ProductID=2000205208&VariantID=052" target="_blank">Outfit 1</a>' + '</li>' + '<li>' + '<a href="http://www.debshops.com/PlusSize/Plus+Size+Soft+Knit+Stripe+Dress%7C1005314_012" target="_blank">Outfit 2</a>' + '</li>';
    }
  }
});
