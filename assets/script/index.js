"use strict";

const options = {
    enableHighAccuracy: true,
    maximumAge: 0
};

function getCurrentPosition(successCallback) {
    navigator.geolocation.watchPosition(successCallback, errorHandler, options);
}

function errorHandler(error) {
    console.error(error.message);
}

window.addEventListener("load", function() {
    if (navigator.geolocation) {
        let map;
        let userMarker;

        mapboxgl.accessToken = "pk.eyJ1IjoibWtvcnpoYW4iLCJhIjoiY2xiZ3JvN3kxMGl6YTN3cXNwejI0YnpnNSJ9.LcyAT6lXudjiJnwDKqbRfA";

        map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v12",
            center: [0, 0],
            zoom: 13,
            pitch: 30
        });

        map.dragPan.disable();
        map.keyboard.disable();
        map.scrollZoom.disable();
        map.doubleClickZoom.disable();
        map.touchZoomRotate.disable();

        userMarker = new mapboxgl.Marker().setLngLat([0, 0]).addTo(map);

        getCurrentPosition(position => {
            const { longitude, latitude } = position.coords;
            map.setCenter([longitude, latitude]);
            userMarker.setLngLat([longitude, latitude]);
        });
    }
});