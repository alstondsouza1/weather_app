const weatherCodes = {

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