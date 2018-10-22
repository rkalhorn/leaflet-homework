// Creating map object
var map = L.map("map", {
    center: [39.8283, -98.5795], //center of us
    zoom: 10
});

//api request
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
}).addTo(map);

// geoJson URL
var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


//
// function chooseColor(borough){
//     switch(borough){
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




