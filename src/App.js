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
    message: "",
    difficulty: "",
    gameData: "",
    selectedImages: [],
  }

  chooseDifficulty = mode => {
    if (mode === "Easy") {
      this.setState({ gameData: Easy })
    }
    if (mode === "Medium") {
      this.setState({ gameData: Medium })
    }
    if (mode === "Hard") {
      this.setState({ gameData: Hard })
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
        currentScore: 0,
        message: "Game over",
        selectedImages: [],
      });
      console.log(find)
      console.log("no");
    } else {
      this.setState({ 
        currentScore: this.state.currentScore +1,
        message: "Correct!",
        selectedImages: [...this.state.selectedImages, id],
        highScore: (this.state.currentScore > this.state.highScore) ? this.state.currentScore : this.state.highScore,
      });
      console.log("yes");
      console.log(this.state.selectedImages)
    }
    // if (id != find) {
    //   this.setState({
    //     selectedImages: push,
    //     message: "Correct!",
    //     currentScore: +1,
    //   })
    // } if (id === find) {
    //   this.setState({
    //     messsage: "Game Over",
    //     currentScore: 0,
    //     highScore: (this.state.currentScore > this.state.highScore) ? this.state.currentScore : this.state.highScore,
    //   });
    // }

    this.shuffle(this.state.gameData);
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
      
      <div className="text-center">
        <h1>{this.state.message}</h1>
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
