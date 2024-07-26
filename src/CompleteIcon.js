import { React } from "react";
import { BsCheckCircle } from "react-icons/bs";

function CompleteIcon({ className, onClick }) {
  return <BsCheckCircle className={className} onClick={onClick} />;
}

export { CompleteIcon };
