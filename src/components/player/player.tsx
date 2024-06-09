import "./player.css";
import { images } from "../../assets/images/images";
import { ChangeEvent, useState } from "react";
import { winnerCount } from "../table/table";

export function Player() {
  const [playerAName, setPlayerAName] = useState("");
  const [playerBName, setPlayerBName] = useState("");

  const handlePlayerAName = (event: ChangeEvent<HTMLInputElement>) => {
    setPlayerAName(event.target.value);
  };
  const handlePlayerBName = (event: ChangeEvent<HTMLInputElement>) => {
    setPlayerBName(event.target.value);
  };
  console.log(winnerCount);
  return (
    <div className="player-body">
      <div className="player-comp">
        <div className="players">
          <p className="player-name1">
            PlayerA:
            <input
              onChange={handlePlayerAName}
              value={playerAName}
              className="player-A-name"
              type="text"
              placeholder="player A name"
            />
          </p>
          <p className="player-name2">
            PlayerB:
            <input
              onChange={handlePlayerBName}
              value={playerBName}
              className="player-B-name"
              type="text"
              placeholder="player B name"
            />
          </p>
        </div>
        <div className="count">
          <img className="old-note" src={images.image1} />
          <div>
            <li className="first-winner">
              1st game Winner:
              {winnerCount[0] !== undefined
                ? winnerCount[0] === "player A"
                  ? playerAName
                  : winnerCount[0] === "player B"
                  ? playerBName
                  : "draw"
                : null}
              : {winnerCount[0] === undefined && null}
            </li>
            <p className="first-time">time: 12:30 p.m.</p>
          </div>
          <div>
            <li className="second-winner">
              2nd game Winner:
              {winnerCount[1] !== undefined
                ? winnerCount[1] === "player A"
                  ? playerAName
                  : winnerCount[1] === "player B"
                  ? playerBName
                  : "draw"
                : null}
              : {winnerCount[1] === undefined && null}
            </li>
            <p className="second-time">time: 12:30 p.m.</p>
          </div>
          <div>
            <li className="third-winner">
              3d game Winner:
              {winnerCount[2] !== undefined
                ? winnerCount[2] === "player A"
                  ? playerAName
                  : winnerCount[2] === "player B"
                  ? playerBName
                  : "draw"
                : null}
              : {winnerCount[2] === undefined && null}
            </li>
            <p className="third-time">time: 12:30 p.m.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
