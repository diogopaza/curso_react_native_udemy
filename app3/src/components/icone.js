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


class Icone extends Component {
	render() {		
			if( this.props.escolha == 'pedra'){
				return(
				<View style={ Estilos.txtIcone }>
					<Text style={ Estilos.txtJogador }>{ this.props.jogador }</Text>
					<Image source={ require('../../img/pedra.png')} />
				</View>
			
				)
			}
			else if ( this.props.escolha == 'tesoura'){
				return(
				<View style={ Estilos.txtIcone }>
					<Text style={ Estilos.txtJogador }>{ this.props.jogador }</Text>
					<Image source={ require('../../img/tesoura.png')} />
				</View>
			
				)
			}
			if ( this.props.escolha == 'papel'){
				return(
				<View style={ Estilos.txtIcone }>
					<Text style={ Estilos.txtJogador }>{ this.props.jogador }</Text>
					<Image source={ require('../../img/papel.png')} />
				</View>			
				)
			} else{
				return false;
			}
	}
}

const Estilos = StyleSheet.create({

	txtIcone:{
		alignItems: 'center',
		marginBottom:10,


	},
	txtJogador:{
		fontSize:18
	}

	});
		
export default Icone;
