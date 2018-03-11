import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,

} from 'react-native';

const Estilos = {
	
	principal:{
		
		paddingTop:40,
		alignItems:'center',
		justifyContent:'center',
		flex:1
	},
	
	botao:{
		backgroundColor:'#538530',
		paddingVertical:10,
		paddingHorizontal:40,
		marginTop:20
	},
	textoBotao:{
		color:'white',
		fontSize:16,
		fontWeight:'bold'
	}


};

const gerarNovaFrase = () =>{

	var numAleatorio = Math.random() * 5;
	numAleatorio = Math.floor(numAleatorio);
	alert(numAleatorio);

		var frases = [];

		frases[0] ='aa';
		frases[1] ='bb';
		frases[2] ='cc';
		frases[3] ='dd';
		frases[4] ='ee';

		var fraseEscolhida = frases[ numAleatorio ];

		Alert.alert( fraseEscolhida );


}

const App = () => {
	
	const{ principal,botao,imagem,textoBotao  } = Estilos;
  
  return(
  	<View style={ principal }>
  		<Image source={ require('./imgs/logo.png')}
  			 />
  			
  		<TouchableOpacity 
  			onPress={gerarNovaFrase}
  			style={ botao }>
  			<Text style={ textoBotao}>Nova Frase</Text>     		

    	</TouchableOpacity>
  		

  		


  		 
  	</View>
     

    );
  
};





AppRegistry.registerComponent('app2', () =>  App );