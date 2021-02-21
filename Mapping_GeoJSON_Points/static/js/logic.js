// Add console.log to check if code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid', {
//     center: [40.7, -94.5],
//     zoom: 4
//   });

// Accessing the airport GeoJSON file
let airportData = "https://raw.githubusercontent.com/mcginav/Mapping_Earthquakes/main/majorAirports.json"

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
        console.log(data);
    // Creating a GeoJSON layer w/retrieved data
    L.geoJSON(data).addTo(map);
});    


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// We create the dark view tile layer that will be an option for the background of our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    Street: streets,
    Dark: dark
  };

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
})
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

