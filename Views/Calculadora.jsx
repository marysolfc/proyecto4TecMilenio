import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {Link} from 'react-router-native';
import SCREENS from './Routes';
import NumericButtons from '../Components/NumericButtons';
import OperationButtons from '../Components/OperationButtons';
import CalcButton from '../Components/CalcButton';
import {labels} from './ValueLabels';

const Calculadora = () => {

  const [textArea, setText] = useState('');
  const [resultText, setResult] = useState('');
  const [histText, setHist] = useState('');

  const calculateResult = () => {
    const text = textArea;
    setHist(text);
    setText('');
    setResult(eval(text));
  };
  const validate=()=>{
    const text = textArea;
    switch(text.slice(-1)){
    case '+':
    case '-':
    case '*':
    case '/':
    return false
    }
    return true
    }
 
  const handleNumberPress = value => {
    if (resultText != '') {
      setResult('');
      setHist('');
    }

    if (value === '.') {
      const lastChar = textArea.split('').pop();
      if (labels.OPERATORS.includes(lastChar) || textArea == '') value = '0.';
      if (lastChar == value) return;
    }
    if (value === '=') return validate() && calculateResult();

    setText(textArea + value);
  };

  const handleClearPress = () => {
    setResult('');
    setHist('');
    setText('');
  };

  const handleDeletePress = () => {
    const text = textArea.split('');
    text.pop();
    setText(text.join(''));
  };

  const handleOperatePress = operation => {
    const text = textArea.split('');
    switch (operation) {
      case '+':
      case '-':
      case '*':
      case '/':
        const lastChar = textArea.split('').pop();
        if (labels.OPERATORS.includes(lastChar)) return;
        if (text == '') return;

        setText(textArea + operation);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" >
        <View style={styles.contenedor}>

          <View style={styles.areas}>
            <Text key={'histText'} style={styles.history}>{histText}</Text>
            <Text key={'resultText'} style={styles.resultado}>{resultText}</Text>
            <Text key={'textArea'} style={styles.calculosTexto}>{textArea}</Text>
          </View>

          <View style={styles.botones}>
            <View style={styles.numeros}>
              <NumericButtons onPress={handleNumberPress} />
              <View style={styles.clean}>
                <CalcButton key={'C'} label={'Clear'} onPress={handleClearPress} />
                <CalcButton key={'Del'} label={'Del'} onPress={handleDeletePress} />
              </View>
            </View>
            <OperationButtons onPress={handleOperatePress} />
          </View>

          <View style={styles.botonBack}>
            <Link to={SCREENS.HOME}>
              <Text key={'inicio'} style={styles.btnText}> 🔙 Ir al inicio</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  areas: {
    flex: 1,
    alignItems: 'flex-end',
    height: 250,
  },
  botones: {
    flex: 1,
    height: 500,
    backgroundColor: '#cfe2f3',
    flexDirection: 'row',
    paddingBottom: 25,
    paddingTop: 10,
  },

  numeros: {
    flex: 1,
    flexGrow: 3,
    backgroundColor: 'blue',
  },

  clean: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#cfe2f3',
    gap: 50,
  },

  calculosTexto: {
    fontSize: 40,
    color: 'black',
    paddingTop: 50,
  },
  resultado: {
    fontSize: 50,
    color: 'green',
    paddingTop: 10,
  },
  history: {
    fontSize: 30,
  },
  botonBack: {
    backgroundColor: 'orange',
    paddingTop: 10,
  },
  btnText: {
    fontSize: 25,
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 0,
    color: 'white',
  },
});

export default Calculadora;
