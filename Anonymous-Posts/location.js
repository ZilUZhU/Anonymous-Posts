import React, { useEffect, useState } from 'react';
import { View, Text, PermissionsAndroid, Platform } from 'react-native';
import * as Location from 'expo-location';

const API_KEY = '49c9fbeaa423bdbca9a2df85a175f470';

const WeatherDisplay = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // This function should be declared outside of useEffect
    const getLocation = async () => {
      try {
        // Check and request permission for iOS
        if (Platform.OS === 'ios') {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setError('Permission to access location was denied');
            return;
          }
        }

        // Check and request permission for Android
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Permission',
              message: 'WeatherApp needs access to your location for fetching weather data.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            }
          );
          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            setError('Location permission denied');
            return;
          }
        }

        let location = await Location.getCurrentPositionAsync({});
        fetchWeatherData(location.coords.latitude, location.coords.longitude);
      } catch (error) {
        console.error('Error requesting location permission:', error);
        setError('Error requesting location permission');
      }
    };

    getLocation();
  }, []);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      const json = await response.json();
      setWeather(json);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Error fetching weather data');
    }
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
