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

  changeColor(key) {
    var stateCopy = Object.assign({}, this.state);
    stateCopy.boxStyles[key] = !stateCopy.boxStyles[key] ;
    this.setState(stateCopy);
    console.log(this.state.boxStyles[key]);
    console.log(stateCopy.boxStyles[key]);
  }

  constructor(props) {
    console.log("Called");
    super(props);
    this.state = { boxStyles: [] };
    for (let i = 0; i < 99; i++) {
      this.state.boxStyles.push(true);
      this.views.push(
        <TouchableOpacity key={i}  onPress={() => this.changeColor(i)}>
          <View style={[styles.item, this.state.boxStyles[i] ? {backgroundColor: 'black'} : {backgroundColor: 'red'}]} />
        </TouchableOpacity>
      )
    }

  }

  renderItem(item) {
  	return (
  		<View>
      {item}
  		</View>
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
    backgroundColor: '#33F1FF',
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
