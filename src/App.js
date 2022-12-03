import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
const emptyArray = ["", "", "", "", "", "", "", "", ""];

function App() {
  const [content, setContent] = useState(emptyArray);
  const [counter, setCounter] = useState(0);
  const [Player, setPlayer] = useState({ x: "Player1", o: "Player2" });
  const [showModal, setShowModal] = useState(false);
  const [PlayerWinn, setPlayerWinn] = useState("");
  const [timer, setTimer] = useState(0);
  const [theme, setTheme] = useState("light");

  function handelTicToc(index) {
    const newContent = [...content];
    if (!newContent[index]) {
      newContent[index] = counter % 2 == 0 ? "x" : "o";
      setContent(newContent);
    }
  }

  useEffect(() => {
    const Player1 = prompt(`Please enter name of Player1 `);
    const Player2 = prompt(`Please enter name of player2`);
    const personPlayer = prompt(`Please choose ${Player1} by press x or o`);
    if (personPlayer === "x") {
      setPlayer({ x: `${Player1}`, o: `${Player2}` });
    } else if (personPlayer === "o") {
      setPlayer({ o: `${Player1}`, x: `${Player2}` });
    }
  }, []);

  useEffect(() => {
    checkWinner();
  }, [counter]);

  useEffect(() => {
    setCounter((prev) => prev + 1);
  }, [content]);

  function checkWinner() {
    if (content[0] === content[1] && content[1] === content[2] && content[1]) {
      // alert(`${Player[content[0]]} you win`);
      setContent(emptyArray);
      setShowModal(true);
      setPlayerWinn(Player[content[0]]);
    } else if (
      content[3] === content[4] &&
      content[4] === content[5] &&
      content[5]
    ) {
      // alert(`${Player[content[3]]} you win`);
      setContent(emptyArray);
      setShowModal(true);
      setPlayerWinn(Player[content[3]]);
    } else if (
      content[6] === content[7] &&
      content[8] === content[7] &&
      content[8]
    ) {
      // alert(`${Player[content[8]]} you win`);
      setContent(emptyArray);
      setShowModal(true);
      setPlayerWinn(Player[content[8]]);
    } else if (
      content[0] === content[3] &&
      content[3] === content[6] &&
      content[6]
    ) {
      // alert(`${Player[content[6]]} you win`);
      setContent(emptyArray);
      setShowModal(true);
      setPlayerWinn(Player[content[6]]);
    } else if (
      content[1] === content[4] &&
      content[4] === content[7] &&
      content[7]
    ) {
      // alert(`${Player[content[7]]} you win`);
      setContent(emptyArray);
      setShowModal(true);
      setPlayerWinn(Player[content[7]]);
    } else if (
      content[2] === content[5] &&
      content[5] === content[8] &&
      content[8]
    ) {
      // alert(`${Player[content[8]]} you win`);
      setContent(emptyArray);
      setShowModal(true);
      setPlayerWinn(Player[content[8]]);
    } else if (
      content[0] === content[4] &&
      content[4] === content[8] &&
      content[8]
    ) {
      // alert(`${Player[content[6]]} you win`);
      setContent(emptyArray);
      setShowModal(true);
      setPlayerWinn(Player[content[6]]);
    } else if (
      content[2] === content[4] &&
      content[4] === content[6] &&
      content[6]
    ) {
      // alert(`${Player[content[6]]} you win`);
      setContent(emptyArray);
      setShowModal(true);
      setPlayerWinn(Player[content[6]]);
    } else if (
      content[0] &&
      content[1] &&
      content[2] &&
      content[3] &&
      content[4] &&
      content[5] &&
      content[6] &&
      content[7] &&
      content[8]
    ) {
      setContent(emptyArray);
      setShowModal(true);
    }
  }

  function handelModalClose() {
    if (showModal) {
      setTimer(0);
    }
    setShowModal(false);
  }

  useEffect(() => {
    const time = setTimeout(() => {
      if (!showModal) {
        setTimer((timer) => timer + 1);
      }
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  }, [timer]);

  function HandelThem() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <div className={`maimbody ${theme}`}>
      {showModal && (
        <div className="baseModal" onClick={handelModalClose}>
          {" "}
          <div className="modalBox">{PlayerWinn ? `${PlayerWinn}, you winn in ${timer} seconds` : `this game havent winner`}
            
          </div>
        </div>
      )}

      <div className="roweOne">
        <div className="timerTTags">
          <span className="chengeThem" onClick={HandelThem}>
            Change Background
          </span>
          <span className="boxPlayersName">{timer} Seconds</span>
        </div>
        {content.map((item, index) => (
          <div key={index} className="singelSguer" onClick={() => handelTicToc(index)}>
            {item}
          </div>
        ))}
        <div className="PlayersPerson">
          <span className="boxPlayersName">X : {Player["x"]}</span>
          <span className="boxPlayersName">O : {Player["o"]}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
