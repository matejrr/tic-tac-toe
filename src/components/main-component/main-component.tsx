import { ReactNode } from "react";
import "./main-component.css";

interface MainComponentProps {
  children: ReactNode;
}

export function MainComponent(props: MainComponentProps) {
  return (
    <div className="frame">
      <div className="main-component">{props.children}</div>
    </div>
  );
}
