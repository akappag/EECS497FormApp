import React from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native'
import { ScreenOrientation } from 'expo';
import SquareGrid from "react-native-square-grid";

var NUMBERS = [
	"one",
	"two",
	"three",
	"four",
	"five",
	"six"
];

const redStyle = {
  flex: 0,
  backgroundColor: "red",
  flexWrap: 'nowrap',
  borderWidth: 0.5,
  borderColor: '#fff',
  width: 50,
  height: 50
};

const blackStyle = {
  flex: 0,
  backgroundColor: "black",
  flexWrap: 'nowrap',
  borderWidth: 0.5,
  borderColor: '#fff',
  width: 50,
  height: 50
};






export default class HomeScreen extends React.Component {
  views = [];
  state = { boxStyles: [] };

  changeColor(key) {
    var stateCopy = Object.assign({}, this.state);
    stateCopy.boxStyles[key] = !stateCopy.boxStyles[key] ;
    this.setState(stateCopy);
    console.log(this.state.boxStyles[key]);
    console.log(stateCopy.boxStyles[key]);
    console.log(this.views[key]);
  }

  constructor(props) {
    super(props);
    for (let i = 0; i < 99; i++) {
      this.state.boxStyles.push(true);
      this.views.push(
          <View key={i}/>
      )
    }

    this.renderItem = this.renderItem.bind(this);

  }

  renderItem(item) {
  	return (
      <TouchableOpacity onPress={() => this.changeColor(item["key"])}>
  		<View style={this.state.boxStyles[item["key"]] ? blackStyle : redStyle }>
      {item}
  		</View>
      </TouchableOpacity>

  	);
  }

  render() {
    return (
      <ScrollView style={styles.screen}>
        <View style={styles.container}>
          <SquareGrid rows={10} columns={10} items={this.views} renderItem={this.renderItem} />
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    height: 500,
  },
  item: {
		flex: 0,
    backgroundColor: "red",
    flexWrap: 'nowrap',
    borderWidth: 0.5,
    borderColor: '#fff',
    width: 50,
    height: 50
	},
  touchItem: {
    flex: 0,
    backgroundColor: "black",
    flexWrap: 'nowrap',
    borderWidth: 0.5,
    borderColor: '#fff',
    width: 50,
    height: 50
  }
})
