import { React } from "react";
import { BsDashCircle } from "react-icons/bs";

function DeleteIcon({ className, onClick }) {
  return <BsDashCircle className={className} onClick={onClick} />;
}

export { DeleteIcon };
