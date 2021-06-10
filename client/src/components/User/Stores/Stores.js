import React from 'react'

export default function Stores() {
    function currentLocation() {
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
          document.getElementById('currentLocation').textContent = `Lat: ${position.coords.latitude}, Long: ${position.coords.longitude}`
        });
      }
    return (
        <div>
            <h2>Stores</h2>
            <button onClick={currentLocation}>Stores in your location</button>
            <p id='currentLocation'></p>
        </div>
    )
}
