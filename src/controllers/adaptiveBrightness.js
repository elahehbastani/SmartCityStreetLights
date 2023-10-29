// src/controllers/adaptiveBrightness.js
export function calculateAdaptiveBrightness(ambientLight) {
    // Simplified example, adjust logic as needed
    if (ambientLight < 50) {
        return 100;  // Full brightness if ambient light is low
    } else if (ambientLight < 200) {
        return 75;  // Medium brightness for medium ambient light
    } else {
        return 50;  // Lower brightness for high ambient light
    }
}
