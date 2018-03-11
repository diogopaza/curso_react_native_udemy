import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Button
} from 'react-native';

class MeuComponente extends Component{



	render(){
		return(
			<View>
				<Text>{ this.props.teste }</Text>
				
			</View>

			);
	};
}

class app3 extends Component{

	constructor(props){
		super(props);

		this.state = {
			texto: 'Texto teste 2 '
		}

	}

	alteraTexto(){
		this.setState( { texto: 'outra coisa'} );
	}


	render(){

		return(
			<View>
				<MeuComponente teste={ this.state.texto }></MeuComponente>
				<Button 
					onPress={() => {this.alteraTexto()} }
					title="Botao"
				/>
			</View>
			
			);
	};
}


AppRegistry.registerComponent('app3', () => app3 );





