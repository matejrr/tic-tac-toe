import { ReactNode } from "react";
import "./body.css";

interface BodyProps {
  children: ReactNode;
}

export function Body(props: BodyProps) {
  return <div className="body">{props.children}</div>;
}
