"use strict";

const options = {
    enableHighAccuracy: true
};

function getCurrentPosition(successCallback) {
    navigator.geolocation.getCurrentPosition(successCallback, errorHandler, options);
}

function errorHandler(error) {
    console.error(error.message);
}

window.addEventListener("load", function() {
    if (navigator.geolocation) {
        let map;
        let userMarker;

        getCurrentPosition(position => {
            mapboxgl.accessToken = "pk.eyJ1IjoibWtvcnpoYW4iLCJhIjoiY2xiZ3JvN3kxMGl6YTN3cXNwejI0YnpnNSJ9.LcyAT6lXudjiJnwDKqbRfA";

            const { latitude, longitude } = position.coords;

            map = new mapboxgl.Map({
                container: "map",
                style: "mapbox://styles/mapbox/streets-v12",
                center: [longitude, latitude],
                zoom: 13,
                pitch: 30
            });

            userMarker = new mapboxgl.Marker()
                .setLngLat([longitude, latitude])
                .addTo(map);
        });
    }
});