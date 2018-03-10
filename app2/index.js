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
		backgroundColor: 'cornflowerblue',
		flex:1, 
	},
	topo:{
		backgroundColor: 'brown',
		flex:2,
	},
	conteudo:{
		backgroundColor: 'yellowgreen',
		flex:8,
	},
	rodape:{
		backgroundColor: 'orangered',
		flex:1,
	},

}

const App = () =>{
	const{ principal, topo, conteudo, rodape } = Estilos
  return(
  	<View style={ principal }>
  		 
  		 <Text style={ topo } >Topo</Text>
  		 <Text style={ conteudo } >conteudo2</Text>
  		 <Text style={ rodape } >rodapé</Text>
  	</View>
     

    );
  
};





AppRegistry.registerComponent('app2', () =>  App );