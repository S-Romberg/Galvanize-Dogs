import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Create from './components/Create'
import Card from './components/Card'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: [],
      isClicked: false,
    }
  }

  componentDidMount(){
    // fetch(houseURL)
    //   .then(response => response.json())
    //   .then(data => {

    //     this.setState({
    //       data: data,
    //       isLoaded: true,
    //       house: '',
    //       characters: {},
    //       title: '',
    //       description: '',
    //       link: '',
    //       img: ''
    //     })
    //   })
    }

  render() {
    var isClicked = this.state.isClicked
    return (
      <div className="App">
       {isClicked ? 
       <div>
       <Create />  
       <Header /> 
       </div> :
       <Card /> 
       }
      </div>
    );
  }
}

export default App;
