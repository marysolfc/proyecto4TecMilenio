import React from 'react';
import { Text, View,Image } from 'react-native';
import { Link } from 'react-router-native';
import SCREENS from './Routes';

function Home() {
    const logo = {
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        width: 30,
        height: 30,
        };
    const styles = {
        btnLink: {
          fontSize: 20,
          backgroundColor: 'orange',
          color: 'white',
          width:'50%',
          padding: 10,
          borderRadius: 20,
          marginLeft: 40,
        },
        inicio: {
            fontSize: 20,
            backgroundColor: '#125DA4',
            padding: 30,
            color: 'white',
            
          },
          texto: {
            fontSize: 20,
            padding: 20,
            color: '#515251',
          },
      };
    return (
        <View>
        
        <Text style={styles.inicio}><Image source={logo} />Inicio</Text>
            <Text style={styles.texto}>
            Este proyecto final consiste en aplicar el conocimiento adquirido a un caso de la vida cotidiana,
          mediante la creación de una aplicación basada en React Native.

          Dicha aplicación será hecha
          para un cliente que desea tener una calculadora básica.

          Oprime el botón para ir a la calculadora.

            </Text>
            <Text style={styles.texto}>
                Elaborado por: Marisol Flores Castro
            </Text>
            <Text style={styles.texto}>
                Fecha: Marzo 28, 2023
            </Text>
            <Link to={SCREENS.CALCU}><Text style={styles.btnLink}>Ir a la Calculadora</Text></Link>
        </View>
    )
}
export default Home