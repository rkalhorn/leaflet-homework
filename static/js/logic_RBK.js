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

//D3 geoJson request
d3.json(link, function(dataset){
    L.geoJSON(dataset).addTo(map);
});


