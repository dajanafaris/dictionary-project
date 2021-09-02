import React from "react";
import Meaning from "./Meaning";

export default function (props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning maning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
