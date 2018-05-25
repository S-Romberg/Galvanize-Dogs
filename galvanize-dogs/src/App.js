import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Create from './components/Create'
import Card from './components/Card'

const dogURL = 'https://dogs-rating-api.herokuapp.com/dogs'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: [],
      isClicked: false,
      dogName: '',
      comment: '',
      image: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    fetch(dogURL)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          data: data,
        })
      })
    }

    handleSubmit(event){
      event.preventDefault()
    }

    handleChange(event){
      event.preventDefault()
    }

  render() {
    var isClicked = this.state.isClicked
    return (
      <div className="App">
       {isClicked ? 
       <Create handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>  
      :
      <div>
        <Header /> 
        <Card data={this.state.data}/> 
       </div> 
       }
      </div>
    );
  }
}

export default App;
