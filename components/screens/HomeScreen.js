import React from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  Picker
} from 'react-native'
import { ScreenOrientation } from 'expo';
import SquareGrid from "react-native-square-grid";
import circle from '../../assets/circle.png'
import plus from '../../assets/plus.png'
import xcross from '../../assets/unchecked.png'

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

const whiteStyle = {
  flex: 0,
  backgroundColor: "white",
  flexWrap: 'nowrap',
  borderWidth: 0.5,
  borderColor: '#000',
  width: 50,
  height: 50
};






export default class HomeScreen extends React.Component {
  views = [];
  state = {
    boxStyles: [],
    symbol: 'reset'
  };

  changeSymbol(key) {
    var stateCopy = Object.assign({}, this.state);
    stateCopy.boxStyles[key] = this.state.symbol;
    this.setState(stateCopy);
    console.log(this.state.boxStyles[key]);
    console.log(stateCopy.boxStyles[key]);
    console.log(this.views[key]);
  }

  renderTile(symbolType){
    if(symbolType == 'circle'){
      return(
        <Image
          style={{width: 50, height: 50}}
          source={circle}
        />
      );
    } else if(symbolType == 'plus'){
      return(
        <Image
          style={{width: 50, height: 50}}
          source={plus}
        />
      );
    } else if(symbolType == 'xcross'){
      return(
        <Image
          style={{width: 50, height: 50}}
          source={xcross}
        />
      );
    } else {
      return (<View />);
    }
  }

  constructor(props) {
    super(props);
    for (let i = 0; i < 99; i++) {
      this.state.boxStyles.push('reset');
      this.views.push(
          <View key={i}/>
      )
    }

    this.renderItem = this.renderItem.bind(this);

  }

  renderItem(item) {
  	return (
      <TouchableOpacity onPress={() => this.changeSymbol(item["key"])}>
  		<View style={whiteStyle}>
        {this.renderTile(this.state.boxStyles[item["key"]])}
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
        <Picker
          selectedValue={this.state.symbol}
          style={{height: 50, width: 200}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({symbol: itemValue})
          }>
          <Picker.Item label="Circle" value="circle" />
          <Picker.Item label="Plus" value="plus" />
          <Picker.Item label="X" value="xcross" />
          <Picker.Item label="Reset" value="reset" />
        </Picker>
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
