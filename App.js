import React from 'react';
import { StyleSheet, Text, View, Image, WebView } from 'react-native';
import api from './utilities/api.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      pic: 'https://www.geek.com/wp-content/uploads/2016/11/gScmGae-625x352.png',
      explanation: '',
      date: '',
      media: ''
    }
  }

componentDidMount(){
  api.nasaPics().then((res) => {
    this.setState({
      title: res.title,
      pic: res.url,
      explanation: res.explanation,
      date: res.date,
      media: res.media_type
    })
  })
  .catch((error) => {
    console.error(error)
  })
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.date}</Text>
        <Text style={styles.text}>{this.state.title}</Text>
        {this.state.media == 'video' ?
        <WebView
          javaScriptEnabled={true}
          source={{uri: this.state.pic}}
          style={{width: 370, height: 200}}
        /> :
        <Image
          source={{uri: this.state.pic}}
          style={{width: 370, height: 200}}
        />}
        <Text style={styles.text}>{this.state.explanation}</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#916e7a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#b5a6ab',
    fontSize: 15,
    padding: 10
  }
});