// What is JSX?
// Answer: A JavaScript syntax that looks like HTML, that allows us to write HTML like syntax
// inside of JavaScript file/ React component.

// Question: Is React Imperative or Declarative?
// Answer: React is declarative, it allows us to describe what we want to see on the screen.

// Question: Wht is a synethic event in react?
// Answer: A cross-browser wrapper around the browser's native event, that normalizes events so they have consistent properties across different browsers.

function LocationCard({ city, handleLocation }) {
    return (
        <div
            onClick={() => handleLocation(city)}>{city.name}
        </div>
    );
}

export default LocationCard;