

// geoJson URL
var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the query URL
d3.json(link, function(data) {
    // Once we get a response, send the data.features object to the createFeatures function
    var earthquakeData = data.features;

    // Create a GeoJSON layer containing the features array on the earthquakeData object
    // Run the onEachFeature function once for each piece of data in the array
    var earthquakes = L.geoJSON(earthquakeData, {
        onEachFeature: function(feature, layer) {
            layer.bindPopup("<h3>" + feature.properties.place +
            "</h3><hr><p>" + new Date(feature.properties.time) + "</p>" +
            "</h3><hr><p>Magnitude: " + feature.properties.mag + "</p>");
        },
        pointToLayer: function (feature, latlng) {
          var color = getColor(feature.properties.mag);  
          var geojsonMarkerOptions = {
            radius: 4*feature.properties.mag,
            fillColor: color,
            color: "black",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
          };
          return L.circleMarker(latlng, geojsonMarkerOptions);
        }
    });

    var overlayMaps = {
        Earthquakes: earthquakes
    };

    // Creating map object
    var map = L.map("map", {
        center: [39.8283, -98.5795], //center of us
        zoom: 4.5,
        zoomSnap: 0.5,
        layers: earthquakes
    });

    //api request
    L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken: API_KEY
    }).addTo(map);

 // Create a legend to display information about our map
 var legend = L.control({position: 'topright'});

 legend.onAdd = function (map) {
 
    var div = L.DomUtil.create('div', 'info legend'),
    mags = [0, 1, 2, 3, 4, 5, 6, 7],
    labels = [];

    div.innerHTML+='Magnitude<br><hr>'



    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < mags.length; i++) {
         div.innerHTML +=
             '<i style="background:' + getColor(mags[i]) + '">&nbsp&nbsp&nbsp&nbsp</i> ' +
             mags[i] + (mags[i + 1] ? '&ndash;' + mags[i + 1] + '<br>' : '+');
    }
 
    return div;
 };




 
 legend.addTo(map);

});



function getColor(magnitude) {
    var percentGreen;
    if(magnitude>7){
        percentGreen = 0;
    }
    else{
        percentGreen = (7-magnitude)/7;
    }
    var r = 255;
    var g = Math.round(255*percentGreen);
	var b = 0;
    
	var h = r * 0x10000 + g * 0x100 + b * 0x1;
    
    return '#' + ('000000' + h.toString(16)).slice(-6);
}




// Create a GeoJSON layer containing the features array on the earthquakeData object
// Run the onEachFeature function once for each piece of data in the array











//functino getS


//         case "Brooklyn":
//             return "green";
//             break;
//         case "Bronx":
//             return "yellow";
//             break;
//         case "Staten Island":
//             return "red";
//             break;
//         case "Manhattan":
//             return "blue";
//             break;
//         case "Queens":
//             return "purple";
//             break;
//         default:
//             return "grey";
        
//     }
// }


// //D3 geoJson request
// d3.json(link, function(dataset){
//     L.geoJSON(dataset,{
//         style: function(feature){
//             return{
//                 color: "white",
//                 fillColor: chooseColor(feature.properties.borough),
//                 fillOpacity: 0.5,
//                 weight: 1.9
//             };
//         },
//         onEachFeature: function(feature, layer){
//             layer.on({
//                 mouseover: function(event){
//                     layer = event.target;
//                     layer.setStyle({
//                         fillOpacity: .75
//                     });
//                 },
//                 mouseout: function(event){
//                     layer = event.target;
//                     layer.setStyle({
//                         fillOpacity: .5
//                     });
//                 },
//                 click: function(event){
//                     map.fitBounds(event.target.getBounds());
//                 },
//             })
//             layer.bindPopup("<h1>" + feature.properties.neighborhood + "</h1>" +
//                             "<h2>" + feature.properties.borough + "</h2>"
//             );
//         }
//     }).addTo(map);
// });




