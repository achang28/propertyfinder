'use strict';
 
var React = require('react-native');
var MapDetails = require("./MapDetails");
var {
	AlertIOS,
 	Component,
	Image,
	MapView,
	ScrollView,
 	StyleSheet,
 	TouchableHighlight,
 	Text,
 	View,
} = React;

var styles = StyleSheet.create({
	container: {
	  // marginTop: 65
	},
	heading: {
	  backgroundColor: '#F8F8F8',
	},
	separator: {
	  height: 1,
	  backgroundColor: '#DDDDDD'
	},
	image: {
	  width: 400,
	  height: 300
	},
	map: {
		margin: 5,
		flex: 1,
		height: 200,		
	},
	price: {
	  fontSize: 25,
	  fontWeight: 'bold',
	  margin: 5,
	  color: '#48BBEC'
	},
	title: {
	  fontSize: 20,
	  margin: 5,
	  color: '#656565'
	},
	description: {
	  fontSize: 18,
	  margin: 5,
	  color: '#656565'
	}
});

class PropertyView extends Component {
	constructor(props) {
		super(props);
	}

	getInititalState() {
		return {
			mapParams: {
				annotations: null,
				region: null,	
				scrollEnabled: false,
				zoomEnabled: false,
				rotateEnabled: false,
				pitchEnabled: false,
			}
		}
	}

	componentWillMount() {
		// create MapView annotation array for single property
		var annotations = this._prepareAnnotation(this.props.property);
		var region = this._prepareRegion(this.props.property);
		
		console.log("*** Component mounting...***");
		
		this.setState(() => {
			return {
				mapParams: {
					annotations: annotations,
					region: region,
					scrollEnabled: false,
					zoomEnabled: false,
					rotateEnabled: false,
					pitchEnabled: false,
				}
			}
		});
	}

	componentWillReceiveProps(nextProps) {
		console.log("*** Component receiving props");
		this._prepareAnnotation(nextProps.property);
		this._prepareRegion(nextProps.property);
	}

	_prepareAnnotation(property) {
		var annotations = new Array({
			title: property.title,
			subtitle: property.price_formatted,
			latitude: property.latitude,
			longitude: property.longitude,
		});

		return annotations;
	}

	_prepareRegion(property) {
		var region = {
			latitude: property.latitude,
			longitude: property.longitude,
			latitudeDelta: 0,
			longitudeDelta: 0
		};

		return region;
	}

	mapViewPressed(mapParams) {
		console.log("*** Map Params: ", mapParams);
		this.props.navigator.push({
			title: "Maps",
			component: MapDetails,
			passProps: {
				mapParams: mapParams
			},
			rightButtonTitle: "Directions",
			onRightButtonPress: () => {
				console.log("*** Right Button was pressed");
				AlertIOS.alert("Testing", "Try again...", 
					[
						{
							text: "OK",
							onPress: () => { console.log("pressed") },
						}
					]
				)
			}
		});
	}

	render() {
		var property = this.props.property;
		var stats = property.bedroom_number +" bed " +property.property_type;
		if (property.bathroom_number) {
			stats += ", " +property.bathroom_number +" " +(property.bathroom_number) > 1 ? "bathrooms" : "bathroom";
		}

		var price = property.price_formatted.split(' ')[0];
		var mapParams = this.state.mapParams;

		return (
			<ScrollView style={styles.container}>
				<Image style={styles.image} source={{
					uri: property.img_url
				}} />
				<View style={styles.heading}>
					<Text style={styles.price}>${price}</Text>
					<Text style={styles.title}>${property.title}</Text>
					<View style={styles.separator} />
				</View>
				<Text style={styles.description}>{stats}</Text>
				<Text style={styles.description}>{property.summary}</Text>

				<TouchableHighlight underlayColor="#FF8000" onPress={() => this.mapViewPressed(mapParams)} >
					<View>
						<MapView
							style={styles.map}
							annotations={mapParams.annotations}
							region={mapParams.region}
							scrollEnabled={mapParams.scrollEnabled}
							zoomEnabled={mapParams.zoomEnabled}
							rotateEnabled={mapParams.rotateEnabled}
							pitchEnabled={mapParams.pitchEnabled} />
					</View>
				</TouchableHighlight>
			</ScrollView>
		)
	}
}

module.exports = PropertyView;