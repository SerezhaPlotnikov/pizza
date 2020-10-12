import classNames from "classnames";
import React from "react";

export function AddButton({ onClick, className, children }) {
  return (
    <div
      onClick={onClick}
      className={classNames("button", className, {
        "pizza-block__bottom-add": "pizza-block__bottom-add",
      })}
    >
      {children}
    </div>
  );
}
