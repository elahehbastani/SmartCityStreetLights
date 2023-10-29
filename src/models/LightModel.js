// src/models/LightModel.js
import { db } from '../firebaseConfig';

class LightModel {
    toggleLight(lightId, isOn) {
        db.ref(`SmartStreetLights/streetlights/${lightId}/status`).set(isOn ? 'ON' : 'OFF');
    }

    adjustBrightness(lightId, brightness) {
        db.ref(`SmartStreetLights/streetlights/${lightId}/brightness`).set(brightness);
    }
}

export default new LightModel();
