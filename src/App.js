import React, { Component } from 'react';
import './App.css';
import Easy from "./easy.json";
import Medium from "./medium.json";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";


class App extends Component {
  state={
    currentScore: 4,
    highScore: 3,
    message: "",
    difficulty: "",
    gameData: "",
  }

  chooseDifficulty = mode => {
    if (mode === "Easy") {
      this.setState({ gameData: Easy })
    }
    if (mode === "Medium") {
      this.setState({ gameData: Medium })
    }
    // if (mode === "Hard") {
    //   this.setState({ gameData: Hard })
    // }

    this.setState({ difficulty: mode});
  };


  render() {
  return (
    <div className="App">
  
      <Navbar
      currentScore={this.state.currentScore}
      highScore={this.state.highScore}
      />

      <Header 
      chooseDifficulty={this.chooseDifficulty}
      difficulty={this.state.difficulty}
      />
      
      <div className="row">
        <h1>{this.state.message}</h1>
      </div>
      
      <div className="container">
        <div className="row">
          {this.state.gameData && this.state.gameData.map(data => { 
            return(
              <Card 
              image={data.image}
              />
            )
          })}
        </div>
      </div>
    </div>
    );
  }
};

export default App;
