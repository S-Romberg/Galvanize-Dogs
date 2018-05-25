import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Create from './components/Create'
import DogCard from './components/DogCard'

const dogURL = 'https://dogs-rating-api.herokuapp.com/dogs/'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: [],
      dogName: '',
      comment: '',
      imgURL: '',
      rating: 10,
      updateFeed: false
    }
  }

  componentDidMount(){
    fetch(dogURL)
      .then(response => response.json())
      .then(data => 
        this.setState({
          data: data.dogs,
        })
      )
    }

    componentDidUpdate() {
      fetch(dogURL)
        .then(res => res.json())
        .then(data =>
          this.setState({data: data.dogs})
        )
    }

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
      console.log('clicked')
      alert("YOU MONSTER")
      let deleteURL = dogURL + event.target.name
      fetch(deleteURL, {
        method: "DELETE",
        headers: new Headers({"content-type": "application/json"})
      })
    }
    
    upVote = (event) => {
      console.log('yeah')
    }
  
  render() {
    return (
      <div className="App">
        <Create handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>  
        <Header /> 
        <DogCard handleDelete={this.handleDelete} upVote={this.upVote} data={this.state.data}/> 
      </div>
    );
  }
}

export default App;
