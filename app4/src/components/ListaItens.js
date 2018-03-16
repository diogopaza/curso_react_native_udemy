import React, { Component } from 'react';
import {
 
  Platform,
  View,
  Text,
 
} from 'react-native';

 class ListaItens extends Component {
 	constructor(props){

 		super(props);
 		console.log('construindo aplicação')

 	}

 	componentWillMount() { 
 		console.log('Fazer alguma coisa antes de renderizar');
 	}

 	componentDidMount() { 

 		console.log('Fazer alguma coisa depois da renderização ')
 	}

	render() {
		
		console.log('objeto é renderizado');
		return(
			<View>
				<Text>teste importação de Compnente</Text>
			</View>
		);
	}

}

export default ListaItens;



