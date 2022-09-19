// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([39.8097, -98.5556], 5);

// Coordinates for each point to be used in the line.
let line = [
  [37.773972, -122.431297],
  [36.1716, -115.1391],
  [30.1900,  -97.6687],
  [43.6777, -79.6248],
  [40.6413, -73.7781]
];

// Create a polyline using the line coordinates 
L.polyline(line, {
  color: "blue",
  weight: 4,
  dashArray: 10,
  opacity: .7
}).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
    
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
