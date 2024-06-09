import { Icons } from "../../assets/icons/icons";
import styled, { keyframes } from "styled-components";
import { Cell } from "../DTO/DTO";
import { Comb } from "../table/table";

const TicTacToeGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LineThroughParal = styled.div`
  position: absolute;
  width: 100%;
  height: 8px;
  background-color: rgb(50, 20, 22);
  transform-origin: left;
  animation: ${keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);

}
  `} 0.3s forwards;
`;

const LineThroughPerpend = styled.div`
  position: absolute;
  width: 7px;
  background-color: rgb(50, 20, 22);
  transform-origin: translateX(0);
  animation: ${keyframes`
      0% {
    height: -50%;
  }
  100% {
    height: 100%;

}
    `} 0.25s forwards;
`;

const LineThroughDiagDec = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 8px;
  background-color: rgb(50, 20, 22);

  transform: rotate(-42deg);
  transform-origin: bottom left;
  animation: ${keyframes`
    0% {
    width: 0;
    height: 0;
  }
  100% {
   width: 141%;
   left: 2px;
}
    `} 0.25s forwards;
`;

const LineThroughDiagCrec = styled.div`
  position: absolute;
  left: 0;
  bottom: 100%;
  width: 0;
  height: 8px;
  background-color: rgb(50, 20, 22);

  transform: rotate(42deg);
  transform-origin: top left;
  animation: ${keyframes`
      0% {
    width: 0;
    height: 100%;
  }
  100% {
   width: 141%;

}
    `} 0.25s forwards;
`;

interface CellCompProps {
  player: Cell["player"];
  line: Comb["line"] | undefined;
  crossOut: boolean;
}

export function CellComp(props: CellCompProps) {
  return (
    <TicTacToeGrid className="tic-tac-toe-grid">
      {props.crossOut === false ? (
        <>
          {props.player === true && <Icons.closeIcon />}
          {props.player === false && <Icons.radioIcon />}
        </>
      ) : (
        <>
          {props.player === true && <Icons.closeIcon />}
          {props.player === false && <Icons.radioIcon />}
          {props.line === "parallel" && <LineThroughParal />}
          {props.line === "perpendicular" && <LineThroughPerpend />}
          {props.line === "diagonal-crecendo" && <LineThroughDiagCrec />}
          {props.line === "diagonal-decrecendo" && <LineThroughDiagDec />}
        </>
      )}
    </TicTacToeGrid>
  );
}
