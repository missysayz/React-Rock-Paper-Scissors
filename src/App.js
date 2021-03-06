import React, { useState, useEffect } from "react";
import OptionBox from "./OptionBox";
import rock from "./Images/rock.jpg";
import paper from "./Images/paper.jpeg";
import scissors from "./Images/scissors.jpeg";
import { Container, Header } from "semantic-ui-react";
import Scorecard from "./Scorecard";

// class App extends React.Component {
//   state = { userChoice: null , compChoice: null };

function App() {
  const optionArr = ["Rock", "Paper", "Scissors"];

  const [userChoice, setUserChoice] = useState("");
  const [compChoice, setCompChoice] = useState("");
  const [finalResult, setFinalResult] = useState("");
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [ties, setTies] = useState(0);

  useEffect(() => {
    if (userChoice !== "") results();
  }, [userChoice]);

  useEffect(() => {
    if (finalResult !== "") score();
  }, [finalResult]);

  const score = () => {
    console.log(finalResult);
    if (finalResult === "You Win!") {
      setWins(wins + 1);
    } else if (finalResult === "Sorry You Lose!") {
      setLosses(losses + 1);
    } else if (finalResult === "Tie") {
      setTies(ties + 1);
    }
  };

  const optionClick = choice => {
    setUserChoice(choice);
    getCompChoice();
  };

  const getCompChoice = () => {
    setCompChoice(optionArr[Math.floor(Math.random() * optionArr.length)]);
    results();
  };

  const computerResult = () => {
    return userChoice !== null ? <div>{compChoice}</div> : <div />;
  };

  const results = () => {
    // const {userChoice, compChoice} = this.state

    if (userChoice === "Rock" && compChoice === "Rock") {
      setFinalResult("Tie");
    } else if (userChoice === "Rock" && compChoice === "Paper") {
      setFinalResult("Sorry You Lose!");
    } else if (userChoice === "Rock" && compChoice === "Scissors") {
      setFinalResult("You Win!");
    } else if (userChoice === "Paper" && compChoice === "Rock") {
      setFinalResult("You Win!");
    } else if (userChoice === "Paper" && compChoice === "Paper") {
      setFinalResult("Tie");
    } else if (userChoice === "Paper" && compChoice === "Scissors") {
      setFinalResult("Sorry You Lose!");
    } else if (userChoice === "Scissors" && compChoice === "Rock") {
      setFinalResult("Sorry You Lose!");
    } else if (userChoice === "Scissors" && compChoice === "Paper") {
      setFinalResult("You Win!");
    } else if (userChoice === "Scissors" && compChoice === "Scissors") {
      setFinalResult("Tie");
    } else {
      setFinalResult("Default");
    }
  };

  return (
    <>
      <div>
        <Container style={{ marginTop: "25px" }}>
          <Header as='h1'>Rock|Paper|Scissors</Header>
          <br />
          <Header as='h2'>Please make a selection:</Header>
          <hr />
          <OptionBox name='Rock' img={rock} optionClick={optionClick} />
          <OptionBox name='Paper' img={paper} optionClick={optionClick} />
          <OptionBox
            name='Scissors'
            img={scissors}
            optionClick={optionClick}
          />{" "}
        </Container>
      </div>

      <div>Player Choice: {userChoice}</div>
      <div>Computer: {compChoice}</div>
      {finalResult === "You Win!" ? (
        <div style={{ color: "green" }}>Results: {finalResult}</div>
      ) : (
        <div style={{ color: "Red" }}>Results: {finalResult}</div>
      )}
      <div>
        <Scorecard
          wins={wins}
          losses={losses}
          ties={ties}
          finalResult={finalResult}
        />{" "}
      </div>
    </>
  );
}

export default App;
