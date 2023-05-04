import { ReactNode } from "react";
import "./PrimaryButton.css";

interface ButtonOptions {
  children?: ReactNode;
  onClick: () => void;
}

const PrimaryButton = (props: ButtonOptions) => {
  return (
    <button className="btn" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default PrimaryButton;
