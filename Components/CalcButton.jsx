import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

function CalcButton({ label, onPress }) {
    const styles = {
        btnText: {
            fontSize: 25,
            backgroundColor: '#125DA4',
            padding: 20,
            borderRadius: 20,
            color: 'white',
          },

        }
    

    return (
        <TouchableOpacity underlayColor="white" onPress={() => onPress ? onPress(label) : null}>           
            <Text style={styles.btnText}>{label}</Text>
        </TouchableOpacity>
    )
}
export default CalcButton