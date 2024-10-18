import { useState } from "react";
import { Cell } from "../DTO/DTO";
import { CellComp } from "../cellComp/tic-tac-toe-grid";

const defaultCells: Cell[] = [
    {
        id: 1,
        player: undefined,
    },
    {
        id: 2,
        player: undefined,
    },
    {
        id: 3,
        player: undefined,
    },
    {
        id: 4,
        player: undefined,
    },
    {
        id: 5,
        player: undefined,
    },
    {
        id: 6,
        player: undefined,
    },
    {
        id: 7,
        player: undefined,
    },
    {
        id: 8,
        player: undefined,
    },
    {
        id: 9,
        player: undefined,
    },
];

export interface Comb {
    line:
        | "parallel"
        | "perpendicular"
        | "diagonal-crecendo"
        | "diagonal-decrecendo";
    ids: number[];
}

export const winningCells: Comb[] = [
    {
        line: "parallel",
        ids: [1, 2, 3],
    },
    {
        line: "parallel",
        ids: [4, 5, 6],
    },
    {
        line: "parallel",
        ids: [7, 8, 9],
    },
    {
        line: "perpendicular",
        ids: [1, 4, 7],
    },
    {
        line: "perpendicular",
        ids: [2, 5, 8],
    },
    {
        line: "perpendicular",
        ids: [3, 6, 9],
    },
    {
        line: "diagonal-crecendo",
        ids: [1, 5, 9],
    },
    {
        line: "diagonal-decrecendo",
        ids: [3, 5, 7],
    },
];

function isEqualArray(arr1: number[], arr2: number[]): boolean {
    const aux = [];
    for (const i of arr1) {
        if (arr2.includes(i)) {
            aux.push(true);
        } else {
            aux.push(false);
        }
    }

    return aux.every((value) => value === true);
}

interface TableProps {
    setPlayer: (value: boolean) => void;
    player: boolean;
}

export const winnerCount: string[] = [];

export function Table(props: TableProps) {
    const [cells, setCells] = useState<Cell[]>(defaultCells);
    const [crossOut, setCrossOut] = useState(false);
    const [winningComb, setWinningComb] = useState<Comb>();
    const [stopGame, setStopGame] = useState(false);

    const handleStopGame = () => {
        setStopGame(true);
    };

    const handleCrossOut = () => {
        setCrossOut(!crossOut);
    };

    const handlePlayer = () => {
        props.setPlayer(!props.player);
    };

    function handleResetButton() {
        setCells(defaultCells);
        props.setPlayer(true);
        setWinningComb(undefined);
        setStopGame(false);
    }

    function handleTicTacToe(cells: Cell[]) {
        const playerAIds = cells
            .filter((cell) => cell.player == true)
            .map((cell) => cell.id);
        const playerBIds = cells
            .filter((cell) => cell.player == false)
            .map((cell) => cell.id);

        for (const comb of winningCells) {
            if (isEqualArray(comb.ids, playerAIds) === true) {
                handleCrossOut();
                setWinningComb(comb);
                winnerCount.length == 3 ? null : winnerCount.push("player A");
                handleStopGame();

                return;
            }

            if (isEqualArray(comb.ids, playerBIds) === true) {
                handleCrossOut();
                setWinningComb(comb);
                winnerCount.length == 3 ? null : winnerCount.push("player B");
                handleStopGame();
                return;
            }
        }

        if (cells.every((cell) => cell.player !== undefined)) {
            winnerCount.length == 3 ? null : winnerCount.push("draw");
        }
    }

    return (
        <div>
            <div className="table">
                {cells.map((cell) => {
                    return (
                        <div
                            key={cell.id}
                            onClick={() => {
                                const modifiedCells = cells.map((jell) => {
                                    if (
                                        cell.id === jell.id &&
                                        cell.player == undefined &&
                                        stopGame === false
                                    ) {
                                        return {
                                            id: jell.id,
                                            player: props.player,
                                        };
                                    } else {
                                        return jell;
                                    }
                                });

                                cell.player === undefined && handlePlayer();
                                setCells(modifiedCells);
                                handleTicTacToe(modifiedCells);
                            }}
                        >
                            <CellComp
                                player={cell.player}
                                crossOut={!!winningComb?.ids.includes(cell.id)}
                                line={winningComb?.line}
                            />
                        </div>
                    );
                })}
            </div>
            <div className="reset-button-component">
                <button className="reset-button" onClick={handleResetButton}>
                    Reset Game
                </button>
            </div>
        </div>
    );
}
