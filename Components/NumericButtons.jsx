import React from 'react';

import {View} from 'react-native';
import CalcButton from './CalcButton';
import { labels } from '../Views/ValueLabels';

function NumericButtons({onPress}) {
  const styles = {
    numeros: {
      flex: 5,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#cfe2f3ff',
    },
    btn: {
      alignItems: 'center',
      gap: 20,
      flexGrow: 1,
    },
  };

  return (
    <View style={styles.numeros}>
      {/* Renderizar los botones numéricos */}
      {labels.NUMS.map(column => (
        <View
          style={styles.btn}
          onPress={() => (onPress ? onPress(label) : null)}>
          {column.map(numericbutton => (
            <CalcButton
              key={numericbutton}
              label={numericbutton}
              onPress={onPress}
            />
          ))}
        </View>
      ))}
    </View>
  );
}
export default NumericButtons;
