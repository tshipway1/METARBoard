const fs = require('fs');

// load the full airports file
const rawData = JSON.parse(fs.readFileSync('airports.json', 'utf-8'));

const airportArray = Array.isArray(rawData) ? rawData : rawData.airports || [];

// Filter only US airports and ignore heliports
const usAirports = airportArray.filter(airport =>
  airport.isoregion?.startsWith("US-") &&
  airport.type !== "heliport"
);

fs.writeFileSync('us_airports.json', JSON.stringify(usAirports, null, 2));

console.log(`Saved ${usAirports.length} US airports to us_airports.json`);