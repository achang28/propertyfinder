'use strict';
var React = require('react-native');
var SearchPage = require("./SearchPage");
var { StyleSheet, Text, TextInput, View, TouchableHighlight, ActivityIndicatorIOS, Image, Component } = React;
var styles = React.StyleSheet.create({
	container: {
  		color: '#a4a4a4',
    	flex: 1
  	}
});

class PropertyFinderApp extends React.Component {
	render() {
		return (
			<React.NavigatorIOS
				style = {styles.container}
				initialRoute={{
					title: "Property Finder",
					component: SearchPage,
				}} />
		)
	}
}

React.AppRegistry.registerComponent('PropertyFinder', () => PropertyFinderApp);