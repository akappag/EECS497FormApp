import React from 'react';
import { ScreenOrientation } from 'expo';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import Grid from 'react-native-grid-component';

export default class App extends React.Component {
    _renderItem = (data, i) => (
        <View style={[{ backgroundColor: data }, styles.item]} key={i} />
    );

    _renderPlaceholder = i => <View style={styles.item} key={i} />;
  render() {
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE);
    return (
        // <ThemeProvider>
        //   <Button title="This is a button!" />
        // </ThemeProvider>
        // <View style={styles.container}>
        //     <Text style={styles.title}> FormApp Formations Viewer </Text>
        // </View>
        <View style = {styles.grid}>
            <Grid
                style={styles.list}
                renderItem={this._renderItem}
                renderPlaceholder={this._renderPlaceholder}
                data={generateGrid(200)}
                itemsPerRow={20}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    backgroundColor: 'black'
  },
  container: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black'
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
  }
});

function generateGrid(length) {
    return Array.from(Array(length)).map(() => 'white');
}
