// Question: What are props?
// Answer: It is an object, they are read-only, and they are passed from parent to child.

// Question: What is higher order component?
// Answer: A function that handles logic and returns a child components.

// Question: What does the "Warning: Each child in a list should have a unique "key" prop" mean?
// Answer: This helps react identify what list items have been changed. We like to use a id as a key as a best practice
// Because the key needs to be unique, and it needs to be stable. Components will still
// render without the key, but adding one is a best practice for better performance.

// What is the VDOM?
// Answer: A lightweight copy of the DOM that allows react track changes and only make necessary updates.

import LocationCard from './LocationCard';
function Locations({ cityCoordinates, handleLocation }) {

    return (
        <> { cityCoordinates.map(city => (
            <LocationCard key={city.name} 
            city={city} 
            handleLocation={handleLocation} />
            ))}
        </>
    );
}

export default Locations;