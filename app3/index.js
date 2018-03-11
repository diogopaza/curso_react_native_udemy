import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Button
} from 'react-native';







class app3 extends Component{

	constructor(props){
		super(props);

		this.state = {
			opcaoUsuario: ' '
		}

	}

	jokenpo(escolhaUsuario){
		
		this.setState( { opcaoUsuario: escolhaUsuario  })

	}



	render(){

		return(
			<View>
				<Text>Escolha do Computador</Text>
				<Text>Escolha do Usuário: { this.state.opcaoUsuario }</Text>
				<Text>Resultado</Text>
				<Button
					onPress={()=> { this.jokenpo('pedra') } }
					title="pedra"
					/>
				<Button
					onPress={()=> { this.jokenpo('papel') } }
					title="papel"
					/>
				<Button
					onPress={()=> { this.jokenpo('tesoura') } }
					title="tesoura"
					/>
			</View>
			
			);
	};
}


AppRegistry.registerComponent('app3', () => app3 );





