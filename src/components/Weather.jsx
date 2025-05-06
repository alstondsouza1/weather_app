const weatherCodes = { 
    0: 'Clear',
    1: 'Mainly Clear',
    2: 'Partly Cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Fog',
    51: 'Drizzle',
    53: 'Drizzle',
    55: 'Drizzle',
    56: 'Freezing Drizzle',
    57: 'Freezing Drizzle',
    61: 'Rain Showers',
    63: 'Rain Showers',
    65: 'Rain Showers',
    66: 'Freezing Rain Showers',
    67: 'Freezing Rain Showers',
    71: 'Snow Showers',
    73: 'Snow Showers',
    75: 'Snow Showers',
    77: 'Snow Showers',
    80: 'Rain Showers',
    81: 'Rain Showers',
    82: 'Rain Showers',
    85: 'Snow Showers',
    86: 'Snow Showers',
    95: 'Thunderstorms',
    96: 'Thunderstorms',
    99: 'Thunderstorms',
};

function Weather({ weather }) {
    return (
        <>
            <h2>{weather.temp}</h2>
            <h2>{weatherCodes[weather.code]}</h2>
        </>
    );
}

export default Weather;