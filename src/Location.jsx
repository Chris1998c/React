import React from "react";
import UseCurrentLocation from "./UseCurrentLocation";

function Location() {
  const { currentLocation, getLocation, loading, error } = UseCurrentLocation();

  return (
    <div>
      <h1>Posizione Corrente</h1>
      {loading && <h3>Loading...</h3>}
      {error && <p>Errore: {error.message}</p>}
      {currentLocation && (
        <div>
          <p>Latitudine: {currentLocation.latitude}</p>
          <p>Longitudine: {currentLocation.longitude}</p>
        </div>
      )}
      <button onClick={getLocation}>Ottieni Posizione</button>
    </div>
  );
}

export default Location;