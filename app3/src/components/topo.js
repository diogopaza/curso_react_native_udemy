import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Button,
  Image
} from 'react-native';

const imagem = require('../../img/jokenpo.png');

class Topo extends Component{
	render(){
		return(

			<View>
				<Image source={imagem}/>
			</View>

		)
	}
}

export default Topo;