// src/views/ControlView.js
import React from 'react';
import { View, Button, Slider } from 'react-native';

function ControlView({ light, onToggle, onBrightnessChange }) {
    return (
        <View>
            <Button title={light.status === 'ON' ? 'Turn Off' : 'Turn On'} onPress={() => onToggle(!light.isOn)} />
            <Slider
                value={light.brightness}
                onValueChange={onBrightnessChange}
                minimumValue={0}
                maximumValue={100}
            />
        </View>
    );
}

export default ControlView;
