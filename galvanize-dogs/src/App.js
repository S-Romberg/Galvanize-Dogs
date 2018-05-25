import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Create from './components/Create'
import DogCard from './components/DogCard'

const dogURL = 'https://dogs-rating-api.herokuapp.com/dogs'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: [],
      isClicked: true,
      dogName: '',
      comment: '',
      imgURL: '',
      rating: 10
    }
  }

  componentDidMount(){
    fetch(dogURL)
      .then(response => response.json())
      .then(data => {
        console.log('data: ',data)
        this.setState({
          data: data.dogs,
        })
      })
    }
    
    // componentDidUpdate(){
    //   fetch(dogURL)
    //     .then(response => response.json())
    //     .then(data => {
    //       this.setState({
    //         data: data,
    //       })
    //     })
    //   }

    handleSubmit = (event) => {
      event.preventDefault()
      fetch(dogURL, {
        method: "POST",
        headers: new Headers({"content-type": "application/json"}),
        body: JSON.stringify({
          dogName: this.state.dogName,
          comment: this.state.comment,
          imgURL: this.state.imgURL,
          rating: this.state.rating
        })
      })
      .then(response => response.json())
      .then(entry => {
       console.log(entry)
      })
      .then(
        document.getElementById('form').reset()
      )
    }

    handleChange = (event) => {
      const value = event.target.value
      const key = event.target.name
      this.setState({
        [key]: value
      })
    }

    handleDelete = (event) => {
      event.preventDefault()
      alert("ARE YOU SURE ")

    }
    upVote = (event) => {
      console.log('yeah')
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
        <DogCard upVote={this.upVote} data={this.state.data}/> 
       </div> 
       }
      </div>
    );
  }
}

export default App;
