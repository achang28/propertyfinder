'use strict';
var React = require('react-native');
var SearchPage = require("./SearchPage");
var {
	Component,
	StyleSheet,
	NavigatorIOS
} = React;

var styles = StyleSheet.create({
	container: {
  		color: 'blue',
    	flex: 1,
  	},
  	navBar: {
		backgroundColor: 'blue',
		flex: 1,
		opacity: 1,
  	}
});

class PropertyFinderApp extends Component {
	render() {
		return (
			<NavigatorIOS
				style = {styles.container}
				initialRoute={{
					title: "Property Finder",
					component: SearchPage,
					wrapperStyle: styles.navBar
				}} />
		)
	}
}

React.AppRegistry.registerComponent('PropertyFinder', () => PropertyFinderApp);