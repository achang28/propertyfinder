/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var RN = require('react-native');

var styles = RN.StyleSheet.create({
	text: {
		color: "blue",
		backgroundColor: "red",
		fontSize: 30,
		margin: 80,
	}
})

class PropertyFinderApp extends RN.Component {
	render() {
		return RN.createElement(RN.Text, {style: styles.text,}, "Fuck you!");
	}
}

RN.AppRegistry.registerComponent('PropertyFinder', () => PropertyFinderApp);
