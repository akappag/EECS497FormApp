import React from 'react';
import { ScreenOrientation } from 'expo';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, ThemeProvider, Header } from 'react-native-elements';
import Grid from 'react-native-grid-component';

export default class App extends React.Component {
    _renderItem = (data, i) => (
        <View style={[{ backgroundColor: data }, styles.item]} key={i} />
    );

    _renderPlaceholder = i => <View style={styles.item} key={i} />;
  render() {
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE);
    var coord_list = [[2, 2], [1, 3], [4, 5]]
    var dot_list = []

    coord_list.forEach(function (pair) {
        dot_list.push(
            <View style = {generateDot(pair[0], pair[1])}>
            </View>
        );
    });

    return (
        <View style = {styles.main}>
            <View>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            </View>
            <View style = {styles.backdrop}>
                <View style = {styles.grid}>
                    <Grid
                        style={styles.list}
                        renderItem={this._renderItem}
                        renderPlaceholder={this._renderPlaceholder}
                        data={generateGrid(160)}
                        itemsPerRow={20}
                    />
                </View>
                {dot_list}
                <View style = {styles.buttons}>
                    <ThemeProvider theme = {button_theme}>
                        <Button title="Add Performer"/>
                        <Button title="Delete Performer"/>
                    </ThemeProvider>
                </View>
            </View>
        </View>
    );
  }
}

const button_theme = {
    Button: {
        raised: true,
        type: 'outline'
    },
};

const styles = StyleSheet.create({
  grid: {
    flex: 0.8,
    backgroundColor: 'black',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
  },
  CircleShapeView: {
    //To make Circle Shape
    width: 15,
    height: 15,
    borderRadius: 150 / 2,
    borderColor: 'black',
    borderWidth: 2,
    position: 'absolute',
    top: 119,
    left: 498
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 10
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    flex: 1,
    height: 40,
    margin: 1,
    backgroundColor: 'white'
  },
  list: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flex: 0.2
  }
});

function generateGrid(length) {
    return Array.from(Array(length)).map(() => 'white');
}

function generateDot(x, y) {
    return {
        width: 15,
        height: 15,
        borderRadius: 150 / 2,
        borderColor: 'black',
        borderWidth: 2,
        position: 'absolute',
        left: x * 35 + 3,
        bottom: y * 42 - 4
    };
}
