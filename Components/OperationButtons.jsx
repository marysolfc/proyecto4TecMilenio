import React from 'react';
import {View} from 'react-native';
import CalcButton from './CalcButton';
import {labels} from '../Views/ValueLabels';

function OperationButtons({onPress}) {
  const styles = {
    operators: {
      flex: 1,
      backgroundColor: '#cfe2f3ff',
      paddingTop: 20,
    },
    btn: {
      alignItems: 'center',
      gap: 20,
    },
  };

  return (
    <View style={styles.operators}>
      <View style={styles.btn} onPress={() => (onPress ? onPress(label) : null)}>
        {labels.OPERATORS.map(numericbutton => (
          <CalcButton key={numericbutton} label={numericbutton} onPress={onPress} />
        ))}
      </View>
    </View>
  );
}
export default OperationButtons;
