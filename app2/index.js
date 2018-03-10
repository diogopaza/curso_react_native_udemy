import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
} from 'react-native';

const Estilos = {
	
	principal:{
		backgroundColor: 'cornflowblue',
	},
	conteudo1:{
		backgroundColor: 'brow',
	},
	conteudo2:{
		backgroundColor: 'yellowgreen',
	},
	conteudo3:{
		backgroundColor: 'orangered',
	},

}

const App = () =>{
	const{ principal, conteudo1, conteudo2, conteudo3 } = Estilos
  return(
  	<View style={ principal }>
  		 
  		 <Text style={ conteudo1 } >B</Text>
  		 <Text style={ conteudo2 } >C</Text>
  		 <Text style={ conteudo3 } >C</Text>
  	</View>
     

    );
  
};





AppRegistry.registerComponent('app2', () =>  App );