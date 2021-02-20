// Add console.log to check if code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 4);

// Get data from cities.js
let cityData = cities


// Add a marker for Los Angeles, CA
// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color:"black",
//     fillColor: '#ffffa1'
//  }).addTo(map);

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000
    })
    .bindPopup("<h2>"+city.city + ", "+ city.state + " </h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>" )
    .addTo(map);
   });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then add our 'graymap' title layer
streets.addTo(map);