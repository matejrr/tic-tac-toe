import "./player.css";
import { images } from "../../assets/images/images";
import { ChangeEvent, useEffect, useState } from "react";
import { winnerCount } from "../table/table";

export function Player() {
    const [playerAName, setPlayerAName] = useState("");
    const [playerBName, setPlayerBName] = useState("");
    const [firstTime, setFirstTime] = useState<string | null>(null);
    const [secondTime, setSecondTime] = useState<string | null>(null);
    const [thirdTime, setThirdTime] = useState<string | null>(null);
    const [endGame, setEndGame] = useState(false);
    const [playerAColor, setPlayerAColor] = useState(false);

    const handlePlayerAName = (event: ChangeEvent<HTMLInputElement>) => {
        setPlayerAName(event.target.value);
    };
    const handlePlayerBName = (event: ChangeEvent<HTMLInputElement>) => {
        setPlayerBName(event.target.value);
    };

    const getCurrentTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
    };

    useEffect(() => {
        console.log(winnerCount, "winnercount");
        if (winnerCount[0] !== undefined && firstTime === null) {
            setFirstTime(getCurrentTime());
            console.log("winnerCount1");
        }
        if (winnerCount[1] !== undefined && secondTime === null) {
            setSecondTime(getCurrentTime());
        }
        if (winnerCount[2] !== undefined && thirdTime === null) {
            setThirdTime(getCurrentTime());
            setEndGame(true);
        }
    }, [JSON.stringify(winnerCount), firstTime, secondTime, thirdTime]);

    useEffect(() => {
        if (endGame) {
            const playerAWins = winnerCount.filter(
                (winner) => winner === "player A"
            ).length;
            const playerBWins = winnerCount.filter(
                (winner) => winner === "player B"
            ).length;
            if (playerAWins > playerBWins) {
                setPlayerAColor(true);
            }
        }
    }, [endGame, winnerCount]);

    function winner(winnerCount: string[], playerA: string, playerB: string) {
        let PlayerACounter = 0;
        let PlayerBCounter = 0;
        if (endGame) {
            winnerCount.forEach((winner) => {
                if (winner === playerA) {
                    PlayerACounter++;
                } else if (winner === playerB) {
                    PlayerBCounter++;
                }
            });
            if (PlayerACounter > PlayerBCounter) {
                return `${playerAName} is the winner`;
            } else if (PlayerBCounter > PlayerACounter) {
                return `${playerBName} is the winner`;
            } else {
                return "draw";
            }
        }
    }

    return (
        <div className="player-body">
            <div className="player-comp">
                <div className="players">
                    <p className="player-name1">
                        PlayerA:
                        <input
                            style={{ marginLeft: 5 }}
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
                            style={{ marginLeft: 5 }}
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
                            1st game Winner:{" "}
                            {winnerCount[0] !== undefined
                                ? winnerCount[0] === "player A"
                                    ? playerAName
                                    : winnerCount[0] === "player B"
                                    ? playerBName
                                    : "draw"
                                : null}
                        </li>
                        <p className="first-time">{firstTime}</p>
                    </div>
                    <div>
                        <li className="second-winner">
                            2nd game Winner:{" "}
                            {winnerCount[1] !== undefined
                                ? winnerCount[1] === "player A"
                                    ? playerAName
                                    : winnerCount[1] === "player B"
                                    ? playerBName
                                    : "draw"
                                : null}
                        </li>
                        <p className="second-time">{secondTime}</p>
                    </div>
                    <div>
                        <li className="third-winner">
                            3rd game Winner:{" "}
                            {winnerCount[2] !== undefined
                                ? winnerCount[2] === "player A"
                                    ? playerAName
                                    : winnerCount[2] === "player B"
                                    ? playerBName
                                    : "draw"
                                : null}
                        </li>
                        <p className="third-time">{thirdTime}</p>
                    </div>
                    <div>
                        {thirdTime && (
                            <p
                                style={{
                                    position: "absolute",
                                    marginLeft: 23,
                                    left: 255,
                                    top: 300,
                                    fontFamily: "monospace",
                                    fontSize: "x-large",
                                }}
                            >
                                Game Over
                            </p>
                        )}
                        <p
                            style={{
                                color: playerAColor === true ? "red" : "blue",
                                position: "absolute",
                                marginLeft: 23,
                                left: 238,
                                top: 345,
                                fontFamily: "monospace",
                                fontSize: "medium",
                                marginRight: 70,
                            }}
                        >
                            {winner(winnerCount, "player A", "player B")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
