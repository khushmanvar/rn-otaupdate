import * as React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import { Updates, Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdate: false
    }
  }
  componentDidMount() {
    Updates.checkForUpdateAsync().then(update => {
      if (update.isAvailable) {
        this.setState({showUpdate: true});
      }
    });
  }

  doUpdate = () => {
    Updates.reload();
  }

  render() {
    return <View style={styles.container}>
    { this.state.showUpdate ?
    <Text>A new update is available, click! <Button onPress={() => this.doUpdate()} title="Update Me"></Button></Text>
     : <Text>Updated</Text>}
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
