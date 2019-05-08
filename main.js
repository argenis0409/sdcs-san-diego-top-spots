$(document).ready(function () {
    $.getJSON("data.json", function (topSpotsData) {

        for (i = 0; i < topSpotsData.length; i++) {

            $(".table").append(
                "<tr> <td  class='column1'>" + topSpotsData[i].name +
                "</td> <td class='column2'>" + topSpotsData[i].description +
                "</td> <td class='column3'>" + "<a href='https://www.google.com/maps?q=" +
                topSpotsData[i].location + "'" + " class='button' target='_blank'>" + "Open In Google Maps" + "</a>" + "</td> </tr>");
        }

        $.getJSON("data.json", function (topSpotsData) {
            map = new google.maps.Map(document.getElementById("map"), {
                zoom: 9, center: { lat: 32.9628, lng: -117.0359 }
            })

            for (i = 0; i < topSpotsData.lenght; i++) {
                var uluru = { lat: topSpotsData[i].location[0], lgn: topSpotsData[i].location[1] };
                var tooltip = topSpotsData[i].name;
                var marker = new google.maps.Marker({ position: uluru, map: map, title: tooltip })
            }

        })
    });

});

