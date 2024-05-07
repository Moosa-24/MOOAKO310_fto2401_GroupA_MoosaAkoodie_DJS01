/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocityKmh = 10000; // Initial velocity in km/h
const accelerationMs2 = 3; // Acceleration in m/s^2
const timeInSeconds = 3600; // Time in seconds (1 hour)
const initialDistanceKm = 0; // Initial distance in km
const initialFuelKg = 5000; // Initial fuel in kg
const fuelBurnRateKgs = 0.5; // Fuel burn rate in kg/s

// Function to calculate new velocity
function calcNewVelocity(velocity, acceleration, time) { 
  if (typeof velocity !== 'number' || typeof acceleration !== 'number' || typeof time !== 'number') {
    throw new Error('Invalid input: velocity, acceleration, and time must be numbers.');
  }
  return velocity + (acceleration * time);
}

//calcultes new distance
const newDistance = initialDistanceKm + (initialVelocityKmh * (timeInSeconds / 3600));

// Calculates remaining fuel
const remainingFuel = initialFuelKg - (fuelBurnRateKgs * timeInSeconds);

//calculates new velocity based on acceleration
const newVelocity = calcNewVelocity(initialVelocityKmh, accelerationMs2, timeInSeconds);


console.log(`Corrected New Velocity: ${newVelocity.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${newDistance.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel.toFixed(2)} kg`);
