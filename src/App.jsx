import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Hal from './Hal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote : 'Make Kanye 2006 again',
      halResponse: null,
    }
    this.getHalResponse = this.getHalResponse.bind(this)
  }

  componentDidMount() {
    axios.get('https://api.kanye.rest').then(result => {
      let quote = result.data.quote;
      this.setState({
        quote
      })
    })``
  }

  getHalResponse() {
    axios.get('https://yesno.wtf/api').then(result => {
      let halResponse = result.data
      this.setState({
        halResponse
      })
    })
  }

  render() {
    let answer = this.state.halResponse ? this.state.halResponse.answer : '';
    let image = this.state.halResponse ? this.state.halResponse.image : '';
    return(
      <div className="App">
        <h1>Kayne says:</h1>
        <h3>{this.state.quote}</h3>
        <Hal 
          getHalResponse = {this.getHalResponse}
          answer={answer} 
          image={image} />

      </div>
    )
  }
}

export default App;