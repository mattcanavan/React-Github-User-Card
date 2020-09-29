import React, { Component } from 'react';
import UserCard from './UserCard'
import './App.css';

export default class App extends Component {

  state = {
    myCard: {},
  } 
  
  componentDidMount() {
    fetch('https://api.github.com/users/mattcanavan')
      .then((res) => res.json())
      .then((res) => {
        this.setState({myCard: res})
        console.log(this.state)
      })
      .catch((err) => console.log("error: ", err));
  }

  render() {
    return (
      <div>
      <UserCard myCard={this.state.myCard}/>
      </div>
    )
  }

}
