import React, { useEffect, useState } from 'react';
import { View, Text, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const API_KEY = '49c9fbeaa423bdbca9a2df85a175f470';

const WeatherDisplay = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ).then(granted => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getLocation();
        } else {
          setError('Permission Denied');
        }
      });
    } else {
        getLocation();
    }
  }, []);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position);
        getWeather(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.error(error);
        setError('Error getting location');
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 }
    );
  };

  const getWeather = (lat, lon) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then(res => res.json())
      .then(json => {
        setWeather(json);
      })
      .catch((error) => {
        console.error(error);
        setError('Error fetching weather data');
      });
  };

  return (
    <View>
      {error ? (
        <Text>Error: {error}</Text>
      ) : weather ? (
        <View>
          <Text>Current Temperature: {weather.main.temp} °C</Text>
          {/* <Text>Weather Description: {weather.weather[0].description}</Text> */}
        </View>
      ) : (
        <Text>Fetching Weather...</Text>
      )}
    </View>
  );
};

export default WeatherDisplay;
