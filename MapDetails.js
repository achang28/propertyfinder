'use strict'

var React = require("react-native");
var {
	Component,
	MapView,
	StyleSheet,
	View,
} = React;

var styles = StyleSheet.create({
	map: {
		flex: 1,
		height: 568
	}
});

class MapDetails extends Component {
	constuctor(props) {
		super(props);
	}

	// componentWillMount() {
	// 	var mapParams  = this.props.mapParams;
	// 	var annotations = mapParams.annotations;
	// 	var region = mapParams.region;
	// }

	render() {
		var mapParams = this.props.mapParams;
		return(
			<MapView style={styles.map} annotations={mapParams.annotations} region={mapParams.region} ></MapView>
		);
	}
}

module.exports = MapDetails;