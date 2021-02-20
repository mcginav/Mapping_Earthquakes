// Add console.log to check if code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid', {
   center:[ 
    40.7, -94.5
    ], 
    zoom: 4
});

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then add our 'graymap' title layer
streets.addTo(map);