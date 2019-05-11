import React, { Component } from 'react';
import './App.css';
import Easy from "./easy.json";
import Medium from "./medium.json";
import Hard from "./hard.json"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";


class App extends Component {
  state={    
    EasyScore: 0,
    MediumScore: 0,
    HardScore: 0,
    currentScore: 0,
    highScore: 0,
    message: "",
    difficulty: "",
    gameData: "",
    selectedImages: [],
    classAnimation: "",
  }

  // Clicking the difficulty buttons will display the appropriate game mode images and reset the score
  chooseDifficulty = mode => {
    if (mode === "Easy") {
      this.setState({ 
        currentScore: 0,
        gameData: Easy, 
        message: "",
        highScore: this.state.EasyScore
      })
    }
    if (mode === "Medium") {
      this.setState({ 
        currentScore: 0,
        gameData: Medium,
        message: "",
        highScore: this.state.MediumScore
      })
    }
    if (mode === "Hard") {
      this.setState({ 
        currentScore: 0,
        gameData: Hard,
        message: "",
        highScore: this.state.HardScore
      })
    }
    this.setState({ 
      difficulty: mode,
      selectedImages: [],
    });
  };

  // Shuffle the order of the json images
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
        currentScore: 0,
        message: "Game over",
        classAnimation: "",
        selectedImages: [],
      });

      // Store each mode's current score
      if (this.state.difficulty === "Easy") {
        this.setState({ 
          EasyScore: (this.state.currentScore > this.state.EasyScore) ? this.state.currentScore : this.state.EasyScore,
        })
      }
      if (this.state.difficulty === "Medium") {
        this.setState({ 
          MediumScore: (this.state.currentScore > this.state.MediumScore) ? this.state.currentScore : this.state.MediumScore,
        })
      }
      if (this.state.difficulty === "Hard") {
        this.setState({ 
          HardScore: (this.state.currentScore > this.state.HardScore) ? this.state.currentScore : this.state.HardScore,
        })
      }

    } else {
      this.setState({ 
        currentScore: this.state.currentScore +1,
        message: "Correct!",
        classAnimation: "bounce",
        selectedImages: [...this.state.selectedImages, id],
      });
    }
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
      highScore={this.state.difficulty === "Easy" ? this.state.EasyScore :
                  this.state.difficulty === "Medium" ? this.state.MediumScore :
                  this.state.difficulty === "Hard" ? this.state.HardScore : 0}
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

      <Footer />
    </div>
    );
  }
};

export default App;
