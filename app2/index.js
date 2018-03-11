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

} from 'react-native';

const Estilos = {
	
	principal:{

		paddingTop:40
	},
	imagem:{
		width:300, 
		height:300,
		justifyContent: 'flex-end',
		paddingBottom:20
	}


};



const App = () => {
	
	const{ principal,imagem  } = Estilos;
  
  return(
  	<View style={ principal }>
  		<ImageBackground source={ require('./imgs/uvas.png')}
  			style={ imagem }>
  			<Text>Legenda para a foto</Text>
  		</ImageBackground>
  		

  		


  		 
  	</View>
     

    );
  
};





AppRegistry.registerComponent('app2', () =>  App );