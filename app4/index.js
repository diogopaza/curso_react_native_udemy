import React, { Component } from 'react';
import {
  AppRegistry,	
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class app4 extends Component {
	render() {
		return(
			<View>
				<ListaItens />
			</View>
		);
	}

}

AppRegistry.registerComponent('app4', ()=>app4);



