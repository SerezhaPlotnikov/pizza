import React, { useState } from "react";
export function AddButton() {
  const [value, setValue] = useState(0);
  return (
    <div
      className='pizza-block__bottom-add'
      onClick={() => setValue(value + 1)}
    >
      + Добавить |<span>{value}</span>
    </div>
  );
}
