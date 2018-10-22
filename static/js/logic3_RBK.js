// Creating map object
var map = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 11
});

//api request
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
}).addTo(map);

// geoJson URL
var link = "http://data.beta.nyc//dataset/0ff93d2d-90ba-457c-9f7e-39e47bf2ac5f/resource/" +
"35dd04fb-81b3-479b-a074-a27a37888ce7/download/d085e2f8d0b54d4590b1e7d1f35594c1pediacitiesnycneighborhoods.geojson";


//
function chooseColor(borough){
    switch(borough){
        case "Brooklyn":
            return "green";
            break;
        case "Bronx":
            return "yellow";
            break;
        case "Staten Island":
            return "red";
            break;
        case "Manhattan":
            return "blue";
            break;
        case "Queens":
            return "purple";
            break;
        default:
            return "grey";
        
    }
}


//D3 geoJson request
d3.json(link, function(dataset){
    L.geoJSON(dataset,{
        style: function(feature){
            return{
                color: "white",
                fillColor: chooseColor(feature.properties.borough),
                fillOpacity: 0.5,
                weight: 1.9
            }
        }
    }).addTo(map);
});



