import { useState, useEffect } from "react";

function UseCurrentLocation() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });
          setLoading(false);
        },
        (error) => {
          setError(error);
          setLoading(false);
        }
      );
    } else {
      setError(new Error("Geolocalizzazione non supportata dal browser."));
      setLoading(false);
    }
  }, []);

  const getLocation = () => {
    setLoading(true);
    setError(null);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });
          setLoading(false);
        },
        (error) => {
          setError(error);
          setLoading(false);
        }
      );
    } else {
      setError(new Error("Geolocalizzazione non disponibile."));
      setLoading(false);
    }
  };

  return { currentLocation, getLocation, loading, error };
}

export default UseCurrentLocation;