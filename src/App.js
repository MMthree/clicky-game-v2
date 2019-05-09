import React, { Component } from 'react';
import './App.css';
import Easy from "./easy.json";
import Medium from "./medium.json";
import Hard from "./hard.json"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";


class App extends Component {
  state={
    currentScore: 0,
    highScore: 0,
    easyHS: 0,
    mediumHS: 0,
    hardHS: 0,
    message: "",
    difficulty: "",
    gameData: "",
    selectedImages: [],
    classAnimation: "",
  }

  chooseDifficulty = mode => {
    if (mode === "Easy") {
      this.setState({ 
        currentScore: 0,
        gameData: Easy, 
        message: "",
        highScore: this.state.easyHS
      })
    }
    if (mode === "Medium") {
      this.setState({ 
        currentScore: 0,
        gameData: Medium,
        message: "",
        highScore: this.state.mediumHS
      })
    }
    if (mode === "Hard") {
      this.setState({ 
        currentScore: 0,
        gameData: Hard,
        message: "",
        highScore: this.state.hardHS
      })
    }

    this.setState({ 
      difficulty: mode,
      selectedImages: [],
    });
  };

  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return this.setState({ gameData: a });
    
  }

  game = id => {
    const find = this.state.selectedImages.find(pic => pic === id);

    if ( id === find) {
      this.setState({ 
        highScore: (this.state.currentScore > this.state.highScore) ? this.state.currentScore : this.state.highScore,
        currentScore: 0,
        message: "Game over",
        classAnimation: "",
        selectedImages: [],
      });
    } else {
      this.setState({ 
        currentScore: this.state.currentScore +1,
        message: "Correct!",
        classAnimation: "bounce",
        selectedImages: [...this.state.selectedImages, id],
      });
    }
    console.log(this.state.highScore)
    this.shuffle(this.state.gameData);
    setTimeout(() => {
      this.setState({ classAnimation: "" });
    }, 700);
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
      
      <div className={`text-center ${this.state.classAnimation}`}>
          <h3 className="answer">{this.state.message}</h3>
      </div>
      
      <div className={`container ${this.state.message === "Game over" ? 'game-over' : ''}`}>
        <div className="row">
          {this.state.gameData && this.state.gameData.map(data => { 
            return(
              <Card 
              key={data.id}
              game={this.game}
              id={data.id}
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
