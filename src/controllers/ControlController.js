// src/controllers/ControlController.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import LightModel from '../models/LightModel';
import ControlView from '../views/ControlView';

function ControlController() {
    const [light, setLight] = useState(null);
    const lightId = 'light-001'; 

    useEffect(() => {
        const lightRef = db.ref(`SmartStreetLights/streetlights/${lightId}`);
        lightRef.on('value', snapshot => {
            setLight({ ...snapshot.val(), lightId });
        });

        return () => lightRef.off();  // Cleanup listener on unmount
    }, [lightId]);

    const onToggle = (isOn) => {
        LightModel.toggleLight(lightId, isOn);
    };

    const onBrightnessChange = (brightness) => {
        LightModel.adjustBrightness(lightId, brightness);
    };

    return light ? <ControlView light={light} onToggle={onToggle} onBrightnessChange={onBrightnessChange} /> : null;
}

export default ControlController;
