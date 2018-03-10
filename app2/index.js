import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Button,

} from 'react-native';

const Estilos = {
	
	principal:{

		paddingTop:40
	}

};

const botaoPressionado = () =>{

	alert('pressionei');
}

const App = () => {
	
	const{ principal } = Estilos;
  
  return(
  	<View style={ principal }>
  		<Button 
  			onPress={botaoPressionado}
  			title="Clique aqui"
  			color="#841584"
  			accessibilityLabel="Clique aqui para abrir as notícias"


  		/>


  		 
  	</View>
     

    );
  
};





AppRegistry.registerComponent('app2', () =>  App );