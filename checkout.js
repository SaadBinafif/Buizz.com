let map;

function initMap(latitude, longitude) {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: latitude, lng: longitude },
        zoom: 15, // Increase the zoom level for a closer view
    });

    // Add a marker for the user's location
    new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: "Your Location",
    });
}

document.getElementById("getLocationBtn").addEventListener("click", function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            document.getElementById("location").value = `Latitude: ${lat}, Longitude: ${lng}`;
            
            // Show the map
            document.getElementById("map").style.display = "block";
            initMap(lat, lng); // Pass the latitude and longitude to initMap
        }, function(error) {
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    alert("User denied the request for Geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert("Location information is unavailable.");
                    break;
                case error.TIMEOUT:
                    alert("The request to get user location timed out.");
                    break;
                case error.UNKNOWN_ERROR:
                    alert("An unknown error occurred.");
                    break;
            }
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});
