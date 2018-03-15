import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Button,  
} from 'react-native';
import Topo from './src/components/topo';
import Icone from './src/components/icone';


const Estilos = StyleSheet.create({

	viewBotoes: {
			width: 90,
			
			marginTop: 10


	},
	principalBotoes: {
		
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	palco: {
		alignItems: 'center',
		marginTop: 10

	},
	txtResultado: {
		fontSize: 25,
		fontWeight: 'bold',
		color: 'red',
		height: 60
	}


});


class app3 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			opcaoUsuario: ' ',
			escolhaComputador: '',
			resultado: ''
		};
	}
 
	jokenpo(escolhaUsuario) {
		
		escolhaAleatoria = Math.random() * 3;
		escolhaAleatoria = Math.floor(escolhaAleatoria);
		opcaoEscolhida = [];
		opcaoEscolhida[0] = 'papel';
		opcaoEscolhida[1] = 'tesoura';
		opcaoEscolhida[2] = 'pedra';
		escolhaComputador = opcaoEscolhida[escolhaAleatoria];

		let resultado='';
		if (escolhaComputador === 'pedra') {
			if (escolhaUsuario === 'pedra') {
				resultado = 'Empate';
			}
			if (escolhaUsuario === 'papel') {
				resultado = 'Você ganhou';
			}
			if (escolhaUsuario === 'tesoura') {
				resultado = 'Você perdeu';
			}
		}

		if (escolhaComputador === 'papel') {
			if (escolhaUsuario === 'papel') {
				resultado = 'Empate';
			}
			if (escolhaUsuario === 'tesoura') {
				resultado = 'Você ganhou';
			}
			if (escolhaUsuario === 'pedra') {
				resultado = 'Você perdeu';
			}
		}

		if (escolhaComputador === 'tesoura') {
			if (escolhaUsuario === 'tesoura') {
				resultado = 'Empate';
			}
			if (escolhaUsuario ==='pedra') {
				resultado = 'Você ganhou';
			}
			if (escolhaUsuario === 'papel') {
				resultado = 'Você perdeu';
			}
		}
		
		this.setState({ opcaoUsuario: escolhaUsuario,
							escolhaComputador, 	
							resultado });
	}
	

	render() {
		return (
			<View>
				<Topo />

				<View style={Estilos.principalBotoes}> 
					<View style={Estilos.viewBotoes}>
						<Button
							onPress={() => { this.jokenpo('pedra'); }}
							title="pedra"
						/>
					</View>
						
					<View style={Estilos.viewBotoes}>
						<Button
							onPress={() => { this.jokenpo('papel'); }}
							title="papel"
						/>
					</View>
					<View style={Estilos.viewBotoes}>
						<Button
							onPress={() => { this.jokenpo('tesoura'); }}
							title="tesoura"
						/>
					</View>
				</View>	

				
				<View style={Estilos.palco}>
					<Text style={Estilos.txtResultado}> { this.state.resultado }</Text>
					
					<Icone escolha={this.state.escolhaComputador} jogador='Computador' />
					
					<Icone escolha={this.state.opcaoUsuario} jogador='Você' />
					
				
				</View>
				
			</View>
			
			);
	}
}


AppRegistry.registerComponent('app3', () => app3);

