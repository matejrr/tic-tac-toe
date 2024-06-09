import "./header.css";

interface HeaderProps {
  player: boolean;
  setPlayer: (value: boolean) => void;
}

export function Header(props: HeaderProps) {
  return (
    <div className="header">
      {props.player === true ? (
        <p className="your-turn">Player A Turn</p>
      ) : (
        <p className="your-turn">Player B Turn</p>
      )}
    </div>
  );
}
